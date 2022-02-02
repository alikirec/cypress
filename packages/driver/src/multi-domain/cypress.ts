import 'setimmediate'

import '../config/bluebird'
import '../config/jquery'
import '../config/lodash'

import $Cypress from '../cypress'
import { $Cy } from '../cypress/cy'
import $Commands from '../cypress/commands'
import $Log from '../cypress/log'
import $errUtils from '../cypress/error_utils'
import { bindToListeners } from '../cy/listeners'
import { SpecBridgeDomainCommunicator } from './communicator'
import { handleDomainFn } from './domain_fn'
import { handleCommands } from './commands'
import { handleLogs } from './logs'
import { handleSocketEvents } from './socket'
import { handleSpecWindowEvents } from './spec_window_events'
import { handleErrorEvent } from './errors'

const specBridgeCommunicator = new SpecBridgeDomainCommunicator()

specBridgeCommunicator.initialize(window)

specBridgeCommunicator.once('initialize:cypress', (config) => {
  // eventually, setup will get called again on rerun and cy will
  // get re-created
  setup(config)
})

const setup = (cypressConfig: Cypress.Config) => {
  // @ts-ignore
  const Cypress = window.Cypress = $Cypress.create({
    ...cypressConfig,
    // multi-domain cannot be used in component testing and is only valid for e2e.
    // This value is not synced with the config because it is omitted on big Cypress creation, as well as a few other key properties
    testingType: 'e2e',
  }) as Cypress.Cypress

  // @ts-ignore
  const cy = window.cy = new $Cy(window, Cypress, Cypress.Cookies, Cypress.state, Cypress.config, false)

  // @ts-ignore
  Cypress.log = $Log.create(Cypress, cy, Cypress.state, Cypress.config)
  // @ts-ignore
  Cypress.runner = {
    addLog () {},
  }

  // @ts-ignore
  Cypress.cy = cy
  // @ts-ignore
  Cypress.events.proxyTo(Cypress.cy)

  const { state, config } = Cypress

  // @ts-ignore
  Cypress.Commands = $Commands.create(Cypress, cy, state, config)
  // @ts-ignore
  Cypress.isCy = cy.isCy

  handleDomainFn(cy, specBridgeCommunicator)
  handleCommands(Cypress, cy, specBridgeCommunicator)
  handleLogs(Cypress, specBridgeCommunicator)
  handleSocketEvents(Cypress)
  handleSpecWindowEvents(cy)

  cy.onBeforeAppWindowLoad = onBeforeAppWindowLoad(Cypress, cy)

  // outlaw the use of `route` and `server` within the multi-domain context and Cypress.Server.* configurations
  // @ts-ignore
  cy.route = () => $errUtils.throwErrByPath('switchToDomain.route.forbidden')
  // @ts-ignore
  cy.server = () => $errUtils.throwErrByPath('switchToDomain.server.forbidden')
  Cypress.Server = new Proxy(Cypress.Server, {
    get: () => $errUtils.throwErrByPath('switchToDomain.Server.forbidden'),
    // @ts-ignore
    set: () => $errUtils.throwErrByPath('switchToDomain.Server.forbidden'),
  })

  // outlaw the use of Cypress.Cookies.* configurations, but allow other cy cookies methods to be used
  // @ts-ignore
  Cypress.Cookies = new Proxy(Cypress.Server, {
    get: () => $errUtils.throwErrByPath('switchToDomain.Cookies.forbidden'),
    // @ts-ignore
    set: () => $errUtils.throwErrByPath('switchToDomain.Cookies.forbidden'),
  })

  return cy
}

// eslint-disable-next-line @cypress/dev/arrow-body-multiline-braces
const onBeforeAppWindowLoad = (Cypress: Cypress.Cypress, cy: $Cy) => (autWindow: Window) => {
  autWindow.Cypress = Cypress

  Cypress.state('window', autWindow)
  Cypress.state('document', autWindow.document)

  cy.overrides.wrapNativeMethods(autWindow)
  // TODO: DRY this up with the mostly-the-same code in src/cypress/cy.js
  bindToListeners(autWindow, {
    onError: handleErrorEvent(cy, 'app'),
    onHistoryNav () {},
    onSubmit (e) {
      return Cypress.action('app:form:submitted', e)
    },
    onBeforeUnload (e) {
      // TODO: implement these commented out bits
      // stability.isStable(false, 'beforeunload')

      cy.Cookies.setInitial()

      // timers.reset()

      Cypress.action('app:window:before:unload', e)

      // return undefined so our beforeunload handler
      // doesn't trigger a confirmation dialog
      return undefined
    },
    onLoad () {
      specBridgeCommunicator.toPrimary('window:load')
    },
    onUnload (e) {
      return Cypress.action('app:window:unload', e)
    },
    // TODO: this currently only works on hashchange, but needs work
    // for other navigation events
    onNavigation (...args) {
      return Cypress.action('app:navigation:changed', ...args)
    },
    onAlert (str) {
      return Cypress.action('app:window:alert', str)
    },
    onConfirm (str) {
      const results = Cypress.action('app:window:confirm', str) as any[]

      // return false if ANY results are false
      const ret = !results.some((result) => result === false)

      Cypress.action('app:window:confirmed', str, ret)

      return ret
    },
  })
}

specBridgeCommunicator.toPrimary('bridge:ready')
