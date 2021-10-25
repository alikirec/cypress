/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: string;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: string;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
}

export type BrowserFamily =
  | 'chromium'
  | 'firefox';

/** Possible check status of the test run */
export type CloudRunStatus =
  | 'CANCELLED'
  | 'ERRORED'
  | 'FAILED'
  | 'NOTESTS'
  | 'OVERLIMIT'
  | 'PASSED'
  | 'RUNNING'
  | 'TIMEDOUT';

export type CodeGenType =
  | 'component'
  | 'story';

export type CodeLanguageEnum =
  | 'js'
  | 'ts';

export type DevRelaunchAction =
  | 'dismiss'
  | 'trigger';

export type FrontendFrameworkEnum =
  | 'cra'
  | 'nextjs'
  | 'nuxtjs'
  | 'react'
  | 'vue'
  | 'vuecli';

export type NavItem =
  | 'learn'
  | 'projectSetup'
  | 'runs'
  | 'settings';

export type PluginsState =
  | 'error'
  | 'initialized'
  | 'initializing'
  | 'uninitialized';

export type SpecType =
  | 'component'
  | 'integration';

/** The bundlers that we can use with Cypress */
export type SupportedBundlers =
  | 'vite'
  | 'webpack';

export type TestingTypeEnum =
  | 'component'
  | 'e2e';

export type WizardConfigFileStatusEnum =
  | 'changes'
  | 'error'
  | 'skipped'
  | 'valid';

export type WizardNavigateDirection =
  | 'back'
  | 'forward';

export type WizardStep =
  | 'configFiles'
  | 'initializePlugins'
  | 'installDependencies'
  | 'selectFramework'
  | 'setupComplete'
  | 'welcome';

export interface WizardUpdateInput {
  readonly direction: Maybe<WizardNavigateDirection>;
  readonly testingType: Maybe<TestingTypeEnum>;
}

export type IndexQueryVariables = Exact<{ [key: string]: never; }>;


export type IndexQuery = { __typename?: 'Query', app: { __typename?: 'App', activeProject: Maybe<{ __typename?: 'Project', id: string, projectRoot: string, specs: Maybe<{ __typename?: 'SpecConnection', edges: Array<{ __typename?: 'SpecEdge', node: { __typename?: 'Spec', name: string, specType: SpecType, absolute: string, relative: string, id: string, specFileExtension: string, fileExtension: string, fileName: string, gitInfo: Maybe<{ __typename?: 'GitInfo', lastModifiedTimestamp: Maybe<string>, author: Maybe<string> }> } }> }> }> } };

export type NewSpec_NewSpecQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type NewSpec_NewSpecQueryQuery = { __typename?: 'Query', app: { __typename?: 'App', activeProject: Maybe<{ __typename?: 'Project', id: string, storybook: Maybe<{ __typename?: 'Storybook', id: string }>, generatedSpec: Maybe<{ __typename?: 'GeneratedSpec', id: string, content: string, spec: { __typename?: 'FileParts', id: string, name: string, relative: string } }> }> } };

export type NewSpec_CodeGenGlobQueryQueryVariables = Exact<{
  type: CodeGenType;
}>;


export type NewSpec_CodeGenGlobQueryQuery = { __typename?: 'Query', app: { __typename?: 'App', activeProject: Maybe<{ __typename?: 'Project', id: string, codeGenGlob: string }> } };

export type NewSpec_CodeGenCandidateNodeFragment = { __typename?: 'FilePartsEdge', node: { __typename?: 'FileParts', id: string, relative: string, fileName: string, baseName: string, absolute: string } };

export type NewSpec_SearchCodeGenCandidatesQueryVariables = Exact<{
  glob: Scalars['String'];
}>;


export type NewSpec_SearchCodeGenCandidatesQuery = { __typename?: 'Query', app: { __typename?: 'App', activeProject: Maybe<{ __typename?: 'Project', id: string, codeGenCandidates: Maybe<{ __typename?: 'FilePartsConnection', edges: Array<{ __typename?: 'FilePartsEdge', node: { __typename?: 'FileParts', id: string, relative: string, fileName: string, baseName: string, absolute: string } }> }> }> } };

export type NewSpec_GenerateSpecFromStoryMutationVariables = Exact<{
  storyPath: Scalars['String'];
}>;


export type NewSpec_GenerateSpecFromStoryMutation = { __typename?: 'Mutation', generateSpecFromStory: Maybe<boolean> };

export type NewSpec_SetCurrentSpecMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type NewSpec_SetCurrentSpecMutation = { __typename?: 'Mutation', setCurrentSpec: Maybe<boolean> };

export type Runner_AllQueryVariables = Exact<{ [key: string]: never; }>;


export type Runner_AllQuery = { __typename?: 'Query', app: { __typename?: 'App', activeProject: Maybe<{ __typename?: 'Project', id: string, currentSpec: Maybe<{ __typename?: 'Spec', id: string, relative: string, absolute: string, name: string }> }> } };

export type Specs_SpecsFragment = { __typename?: 'App', activeProject: Maybe<{ __typename?: 'Project', id: string, projectRoot: string, specs: Maybe<{ __typename?: 'SpecConnection', edges: Array<{ __typename?: 'SpecEdge', node: { __typename?: 'Spec', name: string, specType: SpecType, absolute: string, relative: string, id: string, specFileExtension: string, fileExtension: string, fileName: string, gitInfo: Maybe<{ __typename?: 'GitInfo', lastModifiedTimestamp: Maybe<string>, author: Maybe<string> }> } }> }> }> };

export type CurrentSpec_RunnerFragment = { __typename?: 'Spec', id: string, relative: string, absolute: string, name: string };

export type SpecsList_SetCurrentSpecMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type SpecsList_SetCurrentSpecMutation = { __typename?: 'Mutation', setCurrentSpec: Maybe<boolean> };

export type SpecNode_SpecsListFragment = { __typename?: 'SpecEdge', node: { __typename?: 'Spec', name: string, specType: SpecType, absolute: string, relative: string, id: string, specFileExtension: string, fileExtension: string, fileName: string, gitInfo: Maybe<{ __typename?: 'GitInfo', lastModifiedTimestamp: Maybe<string>, author: Maybe<string> }> } };

export type Specs_SpecsListFragment = { __typename?: 'App', activeProject: Maybe<{ __typename?: 'Project', id: string, projectRoot: string, specs: Maybe<{ __typename?: 'SpecConnection', edges: Array<{ __typename?: 'SpecEdge', node: { __typename?: 'Spec', name: string, specType: SpecType, absolute: string, relative: string, id: string, specFileExtension: string, fileExtension: string, fileName: string, gitInfo: Maybe<{ __typename?: 'GitInfo', lastModifiedTimestamp: Maybe<string>, author: Maybe<string> }> } }> }> }> };

export type SpecListRowFragment = { __typename?: 'SpecEdge', node: { __typename?: 'Spec', id: string, specFileExtension: string, fileExtension: string, fileName: string, gitInfo: Maybe<{ __typename?: 'GitInfo', lastModifiedTimestamp: Maybe<string>, author: Maybe<string> }> } };

export const NewSpec_CodeGenCandidateNodeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NewSpec_CodeGenCandidateNode"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FilePartsEdge"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"relative"}},{"kind":"Field","name":{"kind":"Name","value":"fileName"}},{"kind":"Field","name":{"kind":"Name","value":"baseName"}},{"kind":"Field","name":{"kind":"Name","value":"absolute"}}]}}]}}]} as unknown as DocumentNode<NewSpec_CodeGenCandidateNodeFragment, unknown>;
export const SpecListRowFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SpecListRow"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SpecEdge"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"specFileExtension"}},{"kind":"Field","name":{"kind":"Name","value":"fileExtension"}},{"kind":"Field","name":{"kind":"Name","value":"fileName"}},{"kind":"Field","name":{"kind":"Name","value":"gitInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lastModifiedTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"author"}}]}}]}}]}}]} as unknown as DocumentNode<SpecListRowFragment, unknown>;
export const SpecNode_SpecsListFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SpecNode_SpecsList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SpecEdge"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"specType"}},{"kind":"Field","name":{"kind":"Name","value":"absolute"}},{"kind":"Field","name":{"kind":"Name","value":"relative"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SpecListRow"}}]}},...SpecListRowFragmentDoc.definitions]} as unknown as DocumentNode<SpecNode_SpecsListFragment, unknown>;
export const Specs_SpecsListFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Specs_SpecsList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"App"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activeProject"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"projectRoot"}},{"kind":"Field","alias":{"kind":"Name","value":"specs"},"name":{"kind":"Name","value":"specs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"25"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SpecNode_SpecsList"}}]}}]}}]}}]}},...SpecNode_SpecsListFragmentDoc.definitions]} as unknown as DocumentNode<Specs_SpecsListFragment, unknown>;
export const Specs_SpecsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Specs_Specs"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"App"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Specs_SpecsList"}}]}},...Specs_SpecsListFragmentDoc.definitions]} as unknown as DocumentNode<Specs_SpecsFragment, unknown>;
export const CurrentSpec_RunnerFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CurrentSpec_Runner"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Spec"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"relative"}},{"kind":"Field","name":{"kind":"Name","value":"absolute"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<CurrentSpec_RunnerFragment, unknown>;
export const IndexDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Index"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"app"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Specs_Specs"}}]}}]}},...Specs_SpecsFragmentDoc.definitions]} as unknown as DocumentNode<IndexQuery, IndexQueryVariables>;
export const NewSpec_NewSpecQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"NewSpec_NewSpecQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"app"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activeProject"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"storybook"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"generatedSpec"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"spec"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"relative"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<NewSpec_NewSpecQueryQuery, NewSpec_NewSpecQueryQueryVariables>;
export const NewSpec_CodeGenGlobQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"NewSpec_CodeGenGlobQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CodeGenType"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"app"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activeProject"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"codeGenGlob"},"name":{"kind":"Name","value":"codeGenGlob"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}]}]}}]}}]}}]} as unknown as DocumentNode<NewSpec_CodeGenGlobQueryQuery, NewSpec_CodeGenGlobQueryQueryVariables>;
export const NewSpec_SearchCodeGenCandidatesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"NewSpec_SearchCodeGenCandidates"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"glob"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"app"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activeProject"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"codeGenCandidates"},"name":{"kind":"Name","value":"codeGenCandidates"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"25"}},{"kind":"Argument","name":{"kind":"Name","value":"glob"},"value":{"kind":"Variable","name":{"kind":"Name","value":"glob"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NewSpec_CodeGenCandidateNode"}}]}}]}}]}}]}}]}},...NewSpec_CodeGenCandidateNodeFragmentDoc.definitions]} as unknown as DocumentNode<NewSpec_SearchCodeGenCandidatesQuery, NewSpec_SearchCodeGenCandidatesQueryVariables>;
export const NewSpec_GenerateSpecFromStoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"NewSpec_GenerateSpecFromStory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"storyPath"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"generateSpecFromStory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"storyPath"},"value":{"kind":"Variable","name":{"kind":"Name","value":"storyPath"}}}]}]}}]} as unknown as DocumentNode<NewSpec_GenerateSpecFromStoryMutation, NewSpec_GenerateSpecFromStoryMutationVariables>;
export const NewSpec_SetCurrentSpecDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"NewSpec_SetCurrentSpec"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setCurrentSpec"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<NewSpec_SetCurrentSpecMutation, NewSpec_SetCurrentSpecMutationVariables>;
export const Runner_AllDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Runner_All"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"app"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activeProject"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"currentSpec"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CurrentSpec_Runner"}}]}}]}}]}}]}},...CurrentSpec_RunnerFragmentDoc.definitions]} as unknown as DocumentNode<Runner_AllQuery, Runner_AllQueryVariables>;
export const SpecsList_SetCurrentSpecDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SpecsList_SetCurrentSpec"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setCurrentSpec"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<SpecsList_SetCurrentSpecMutation, SpecsList_SetCurrentSpecMutationVariables>;