# Directory Structure

## Last Updated: Tuesday, January 21, 2025 at 03:00:37 PM

## Project Metrics

**Files**: 161
**Total Lines**: 24900

## File Types

- .js: 39 files, 4484 lines
- .ts: 119 files, 19991 lines
- .tsx: 3 files, 425 lines

## Project Tree

```
├── CHANGELOG.md    # Changelog of project updates
├── LICENSE    # Project license
├── README.md    # Project description and usage instructions
├── audio    # Contains audio files used in the project
│   ├── celebration.wav
│   ├── notification.wav
│   └── progress_loop.wav
├── cline_docs    # Cline documentation
│   └── settings.md
├── ellipsis.yaml    # Configuration for the esbuild bundler
├── esbuild.js    # Configuration for the esbuild bundler
├── jest.config.js    # Configuration for the Jest testing framework
├── out    # Output directory for the compiled project
│   └── src    # Source code for the project
│       ├── __mocks__
│       │   ├── McpHub.js
│       │   └── McpHub.js.map
│       ├── api
│       │   ├── index.js
│       │   └── index.js.map
│       ├── core
│       │   ├── Cline.js
│       │   ├── Cline.js.map
│       │   ├── mode-validator.js
│       │   └── mode-validator.js.map
│       ├── exports
│       │   ├── index.js
│       │   └── index.js.map
│       ├── extension.js
│       ├── extension.js.map
│       ├── shared
│       │   ├── ExtensionMessage.js
│       │   ├── ExtensionMessage.js.map
│       │   ├── HistoryItem.js
│       │   ├── HistoryItem.js.map
│       │   ├── WebviewMessage.js
│       │   ├── WebviewMessage.js.map
│       │   ├── api.js
│       │   ├── api.js.map
│       │   ├── array.js
│       │   ├── array.js.map
│       │   ├── checkExistApiConfig.js
│       │   ├── checkExistApiConfig.js.map
│       │   ├── combineApiRequests.js
│       │   ├── combineApiRequests.js.map
│       │   ├── combineCommandSequences.js
│       │   ├── combineCommandSequences.js.map
│       │   ├── context-mentions.js
│       │   ├── context-mentions.js.map
│       │   ├── getApiMetrics.js
│       │   ├── getApiMetrics.js.map
│       │   ├── mcp.js
│       │   ├── mcp.js.map
│       │   ├── modes.js
│       │   ├── modes.js.map
│       │   ├── tool-groups.js
│       │   ├── tool-groups.js.map
│       │   ├── vsCodeSelectorUtils.js
│       │   └── vsCodeSelectorUtils.js.map
│       ├── test
│       │   ├── extension.test.js
│       │   └── extension.test.js.map
│       └── utils
│           ├── cost.js
│           ├── cost.js.map
│           ├── enhance-prompt.js
│           ├── enhance-prompt.js.map
│           ├── fs.js
│           ├── fs.js.map
│           ├── git.js
│           ├── git.js.map
│           ├── path.js
│           ├── path.js.map
│           ├── sound.js
│           └── sound.js.map
├── package-lock.json    # Package manager lock file
├── package.json    # Package manager manifest file
├── pnpm-lock.yaml    # Package manager lock file
├── src    # Source code for the project
│   ├── __mocks__
│   │   ├── McpHub.ts
│   │   ├── default-shell.js
│   │   ├── delay.js
│   │   ├── fs
│   │   │   └── promises.ts
│   │   ├── globby.js
│   │   ├── os-name.js
│   │   ├── p-wait-for.js
│   │   ├── serialize-error.js
│   │   ├── strip-ansi.js
│   │   └── vscode.js
│   ├── api
│   │   ├── index.ts
│   │   ├── providers
│   │   │   ├── anthropic.ts
│   │   │   ├── bedrock.ts
│   │   │   ├── deepseek.ts
│   │   │   ├── gemini.ts
│   │   │   ├── glama.ts
│   │   │   ├── lmstudio.ts
│   │   │   ├── mistral.ts
│   │   │   ├── ollama.ts
│   │   │   ├── openai-native.ts
│   │   │   ├── openai.ts
│   │   │   ├── openrouter.ts
│   │   │   ├── vertex.ts
│   │   │   └── vscode-lm.ts
│   │   └── transform
│   │       ├── bedrock-converse-format.ts
│   │       ├── gemini-format.ts
│   │       ├── mistral-format.ts
│   │       ├── o1-format.ts
│   │       ├── openai-format.ts
│   │       ├── stream.ts
│   │       └── vscode-lm-format.ts
│   ├── core
│   │   ├── Cline.ts
│   │   ├── __tests__
│   │   │   ├── Cline.test.ts
│   │   │   └── mode-validator.test.ts
│   │   ├── assistant-message
│   │   │   ├── index.ts
│   │   │   └── parse-assistant-message.ts
│   │   ├── config
│   │   │   ├── ConfigManager.ts
│   │   │   ├── CustomModesManager.ts
│   │   │   └── CustomModesSchema.ts
│   │   ├── diff
│   │   │   ├── DiffStrategy.ts
│   │   │   └── types.ts
│   │   ├── mentions
│   │   │   └── index.ts
│   │   ├── mode-validator.ts
│   │   ├── prompts
│   │   │   ├── responses.ts
│   │   │   └── system.ts
│   │   ├── sliding-window
│   │   │   └── index.ts
│   │   └── webview
│   │       ├── ClineProvider.ts
│   │       ├── getNonce.ts
│   │       └── getUri.ts
│   ├── exports
│   │   ├── README.md    # Project description and usage instructions
│   │   ├── cline.d.ts
│   │   └── index.ts
│   ├── extension.ts
│   ├── integrations
│   │   ├── diagnostics
│   │   │   ├── DiagnosticsMonitor.ts
│   │   │   └── index.ts
│   │   ├── editor
│   │   │   ├── DecorationController.ts
│   │   │   ├── DiffViewProvider.ts
│   │   │   └── detect-omission.ts
│   │   ├── misc
│   │   │   ├── export-markdown.ts
│   │   │   ├── extract-text.ts
│   │   │   ├── open-file.ts
│   │   │   └── process-images.ts
│   │   ├── terminal
│   │   │   ├── TerminalManager.ts
│   │   │   ├── TerminalProcess.ts
│   │   │   └── TerminalRegistry.ts
│   │   ├── theme
│   │   │   └── getTheme.ts
│   │   └── workspace
│   │       ├── WorkspaceTracker.ts
│   │       └── get-python-env.ts
│   ├── services
│   │   ├── browser
│   │   │   ├── BrowserSession.ts
│   │   │   └── UrlContentFetcher.ts
│   │   ├── glob
│   │   │   └── list-files.ts
│   │   ├── mcp
│   │   │   └── McpHub.ts
│   │   ├── ripgrep
│   │   │   └── index.ts
│   │   └── tree-sitter
│   │       ├── index.ts
│   │       └── languageParser.ts
│   ├── shared
│   │   ├── ExtensionMessage.ts
│   │   ├── HistoryItem.ts
│   │   ├── WebviewMessage.ts
│   │   ├── __tests__
│   │   │   ├── checkExistApiConfig.test.ts
│   │   │   └── vsCodeSelectorUtils.test.ts
│   │   ├── api.ts
│   │   ├── array.ts
│   │   ├── checkExistApiConfig.ts
│   │   ├── combineApiRequests.ts
│   │   ├── combineCommandSequences.ts
│   │   ├── context-mentions.ts
│   │   ├── getApiMetrics.ts
│   │   ├── mcp.ts
│   │   ├── modes.ts
│   │   ├── tool-groups.ts
│   │   └── vsCodeSelectorUtils.ts
│   ├── test
│   │   ├── extension.test.ts
│   │   └── tsconfig.json    # TypeScript configuration file
│   └── utils
│       ├── __tests__
│       │   ├── cost.test.ts
│       │   ├── enhance-prompt.test.ts
│       │   ├── git.test.ts
│       │   └── path.test.ts
│       ├── cost.ts
│       ├── enhance-prompt.ts
│       ├── fs.ts
│       ├── git.ts
│       ├── path.ts
│       └── sound.ts
├── tsconfig.json    # TypeScript configuration file
├── websocket-server    # Websocket server for the project
│   ├── package.json    # Package manager manifest file
│   ├── pnpm-lock.yaml    # Package manager lock file
│   ├── src    # Source code for the project
│   │   ├── __mocks__
│   │   │   └── vscode.ts
│   │   ├── logger.test.ts
│   │   ├── logger.ts
│   │   ├── test
│   │   │   └── setup.ts
│   │   ├── types
│   │   │   └── messages.ts
│   │   ├── validators
│   │   │   ├── messageValidator.test.ts
│   │   │   └── messageValidator.ts
│   │   ├── websocketServer.test.ts
│   │   └── websocketServer.ts
│   ├── test    # Test files and configuration
│   │   ├── runTest.ts    # Test runner for VSCode extension tests
│   │   └── suite
│   │       ├── index.ts    # Test suite configuration
│   │       └── websocketServer.test.ts    # WebSocket server tests
│   ├── tsconfig.json    # TypeScript configuration file
│   └── vitest.config.ts
└── webview-ui    # Webview for the project
    ├── config-overrides.js
    ├── package.json    # Package manager manifest file
    ├── public
    │   ├── index.html
    │   ├── manifest.json
    │   └── robots.txt
    ├── scripts
    │   └── build-react-no-split.js
    ├── src    # Source code for the project
    │   ├── App.tsx
    │   ├── context
    │   │   └── ExtensionStateContext.tsx
    │   ├── index.css
    │   ├── index.tsx
    │   ├── react-app-env.d.ts
    │   ├── reportWebVitals.ts
    │   ├── services
    │   │   └── GitService.ts
    │   ├── setupTests.ts
    │   └── utils
    │       ├── command-validation.ts
    │       ├── context-mentions.ts
    │       ├── format.ts
    │       ├── getLanguageFromPath.ts
    │       ├── highlight.ts
    │       ├── mcp.ts
    │       ├── textMateToHljs.ts
    │       ├── validate.ts
    │       └── vscode.ts
    └── tsconfig.json    # TypeScript configuration file
```

### 📝 Recent Changes

1. Added VSCode Extension Test Configuration:
   - `test/runTest.ts`: Main test runner for VSCode extension tests
   - `test/suite/index.ts`: Test suite configuration using Mocha
   - `test/suite/websocketServer.test.ts`: WebSocket server tests

2. Test Framework Migration:
   - Moved from vitest to @vscode/test-electron
   - Added proper test isolation and cleanup
   - Improved mock implementations

## Functions

### esbuild.js

- main

### out/src/api/index.js

- buildApiHandler

### out/src/core/mode-validator.js

- validateToolUse

### out/src/exports/index.js

- createClineAPI

### out/src/extension.js

- activate
- deactivate

### out/src/shared/array.js

- findLast
- findLastIndex

### out/src/shared/checkExistApiConfig.js

- checkExistKey

### out/src/shared/combineApiRequests.js

- combineApiRequests

### out/src/shared/combineCommandSequences.js

- combineCommandSequences

### out/src/shared/context-mentions.js

- formatGitSuggestion

### out/src/shared/getApiMetrics.js

- getApiMetrics

### out/src/shared/modes.js

- getAllModes
- getModeBySlug
- getModeConfig
- getRoleDefinition
- getToolsForMode
- isCustomMode
- isToolAllowedForMode

### out/src/shared/tool-groups.js

- getToolName
- getToolOptions

### out/src/shared/vsCodeSelectorUtils.js

- stringifyVsCodeLmModelSelector

### out/src/utils/cost.js

- calculateApiCost

### out/src/utils/enhance-prompt.js

- enhancePrompt

### out/src/utils/fs.js

- createDirectoriesForFile
- fileExistsAtPath

### out/src/utils/git.js

- checkGitInstalled
- checkGitRepo
- getCommitInfo
- getWorkingState
- searchCommits

### out/src/utils/path.js

- arePathsEqual
- getReadablePath
- normalizePath
- toPosixPath

### src/__mocks__/delay.js

- delay

### src/__mocks__/globby.js

- globby

### src/__mocks__/os-name.js

- osName

### src/__mocks__/p-wait-for.js

- pWaitFor

### src/__mocks__/serialize-error.js

- deserializeError
- serializeError

### src/__mocks__/strip-ansi.js

- stripAnsi

### src/api/index.ts

- buildApiHandler

### src/api/transform/bedrock-converse-format.ts

- convertToAnthropicMessage
- convertToBedrockConverseMessages

### src/api/transform/gemini-format.ts

- convertAnthropicContentToGemini
- convertAnthropicMessageToGemini
- convertAnthropicToolToGemini
- convertGeminiResponseToAnthropic
- unescapeGeminiContent

### src/api/transform/mistral-format.ts

- convertToMistralMessages

### src/api/transform/o1-format.ts

- convertO1ResponseToAnthropicMessage
- convertToO1Messages
- parseAIResponse
- parseToolCall
- parseToolCalls
- validateToolInput

### src/api/transform/openai-format.ts

- convertToAnthropicMessage
- convertToOpenAiMessages

### src/api/transform/vscode-lm-format.ts

- asObjectSafe
- convertToAnthropicMessage
- convertToAnthropicRole
- convertToVsCodeLmMessages

### src/core/assistant-message/parse-assistant-message.ts

- parseAssistantMessage

### src/core/config/CustomModesSchema.ts

- validateCustomMode

### src/core/diff/DiffStrategy.ts

- getDiffStrategy

### src/core/mentions/index.ts

- getFileOrFolderContent
- getWorkspaceProblems
- openMention
- parseMentions

### src/core/mode-validator.ts

- validateToolUse

### src/core/prompts/system.ts

- generatePrompt

### src/core/sliding-window/index.ts

- truncateHalfConversation

### src/core/webview/getNonce.ts

- getNonce

### src/core/webview/getUri.ts

- getUri

### src/exports/index.ts

- createClineAPI

### src/extension.ts

- activate
- deactivate

### src/integrations/diagnostics/index.ts

- diagnosticsToProblemsString
- getNewDiagnostics

### src/integrations/editor/detect-omission.ts

- detectCodeOmission

### src/integrations/misc/export-markdown.ts

- downloadTask
- findToolName
- formatContentBlockToMarkdown

### src/integrations/misc/extract-text.ts

- addLineNumbers
- everyLineHasLineNumbers
- extractTextFromDOCX
- extractTextFromFile
- extractTextFromIPYNB
- extractTextFromPDF
- stripLineNumbers
- truncateOutput

### src/integrations/misc/open-file.ts

- openFile
- openImage

### src/integrations/misc/process-images.ts

- getMimeType
- selectImages

### src/integrations/terminal/TerminalProcess.ts

- mergePromise

### src/integrations/theme/getTheme.ts

- getExtensionUri
- getTheme
- mergeJson
- parseThemeString

### src/integrations/workspace/get-python-env.ts

- getPythonEnvPath

### src/services/glob/list-files.ts

- globbyLevelByLevel
- listFiles

### src/services/ripgrep/index.ts

- execRipgrep
- formatResults
- getBinPath
- pathExists
- processData
- regexSearchFiles

### src/services/tree-sitter/index.ts

- parseFile
- parseSourceCodeForDefinitionsTopLevel
- separateFiles

### src/services/tree-sitter/languageParser.ts

- initializeParser
- loadLanguage
- loadRequiredLanguageParsers

### src/shared/checkExistApiConfig.ts

- checkExistKey

### src/shared/combineApiRequests.ts

- combineApiRequests

### src/shared/combineCommandSequences.ts

- combineCommandSequences

### src/shared/context-mentions.ts

- formatGitSuggestion

### src/shared/getApiMetrics.ts

- getApiMetrics

### src/shared/modes.ts

- getAllModes
- getModeBySlug
- getModeConfig
- getRoleDefinition
- getToolsForMode
- isCustomMode
- isToolAllowedForMode

### src/shared/tool-groups.ts

- getToolName
- getToolOptions

### src/shared/vsCodeSelectorUtils.ts

- stringifyVsCodeLmModelSelector

### src/utils/cost.ts

- calculateApiCost

### src/utils/enhance-prompt.ts

- enhancePrompt

### src/utils/fs.ts

- createDirectoriesForFile
- fileExistsAtPath

### src/utils/git.ts

- checkGitInstalled
- checkGitRepo
- getCommitInfo
- getWorkingState
- searchCommits

### src/utils/path.ts

- arePathsEqual
- getReadablePath
- normalizePath
- toPosixPath

### webview-ui/scripts/build-react-no-split.js

- getAllFiles

### webview-ui/src/utils/command-validation.ts

- isAllowedSingleCommand
- parseCommand
- validateCommand

### webview-ui/src/utils/context-mentions.ts

- getContextMenuOptions
- insertMention
- removeMention
- shouldShowContextMenu

### webview-ui/src/utils/format.ts

- formatLargeNumber

### webview-ui/src/utils/getLanguageFromPath.ts

- getLanguageFromPath

### webview-ui/src/utils/highlight.ts

- highlightFzfMatch

### webview-ui/src/utils/mcp.ts

- findMatchingResourceOrTemplate
- findMatchingTemplate

### webview-ui/src/utils/textMateToHljs.ts

- constructTheme
- convertTextMateToHljs
- fallbackTheme
- parseHexColor

### webview-ui/src/utils/validate.ts

- validateApiConfiguration
- validateModelId