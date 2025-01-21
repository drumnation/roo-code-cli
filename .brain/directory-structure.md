# Directory Structure

Last updated: Tuesday, January 21, 2025 at 12:37:02 PM

## Root Level

```
roo-code-cli/
├── src/                    # Main extension source code
├── websocket-server/       # Isolated WebSocket server implementation
│   ├── src/
│   │   ├── logger.ts      # Custom Winston logger with sync file transport
│   │   └── logger.test.ts # Test suite for logger functionality
│   ├── package.json       # WebSocket server dependencies and scripts
│   ├── tsconfig.json      # TypeScript configuration
│   └── vitest.config.ts   # Vitest test runner configuration
└── webview-ui/            # Frontend UI implementation
```

## WebSocket Server Structure

The `websocket-server` directory is kept isolated from the main extension to:

1. Maintain clear separation of concerns
2. Allow independent versioning and testing
3. Prevent upstream dependency conflicts
4. Enable potential future extraction as a separate package

### Key Files

- `logger.ts`: Implements a robust logging system using Winston
    - Custom SyncFileTransport for reliable file operations
    - Environment-aware console logging
    - Configurable log directory location
    - Comprehensive test coverage

### Development Tools

- pnpm for package management
- tsx for direct TypeScript execution
- vitest for testing with TypeScript support
- ESLint for code quality

## Project Metrics

**Files**: 149
**Total Lines**: 23702

## File Types

- .js: 39 files, 4484 lines
- .ts: 107 files, 18793 lines
- .tsx: 3 files, 425 lines

## Project Tree

```
├── CHANGELOG.md    # Changelog for the project
├── LICENSE    # The project's open-source license
├── README.md    # Project description and usage instructions
├── audio    # Contains audio clips for notifications and alerts
│   ├── celebration.wav
│   ├── notification.wav
│   └── progress_loop.wav
├── cline_docs    # Documentation for the Cline extension
│   └── settings.md
├── ellipsis.yaml    # YAML configuration file for the project
├── esbuild.js    # Build script for the extension
├── jest.config.js    # Configuration file for the Jest testing framework
├── out    # Output directory for compiled code
│   └── src    # Source code for the extension
│       ├── __mocks__    # Mock files for testing
│       │   ├── McpHub.js
│       │   └── McpHub.js.map
│       ├── api    # API implementation for interacting with language models
│       │   ├── index.js
│       │   └── index.js.map
│       ├── core    # Core logic for the extension
│       │   ├── Cline.js
│       │   ├── Cline.js.map
│       │   ├── mode-validator.js
│       │   └── mode-validator.js.map
│       ├── exports    # Public API for the extension
│       │   ├── index.js
│       │   └── index.js.map
│       ├── extension.js    # Main entry point for the extension
│       ├── extension.js.map
│       ├── shared    # Shared utilities between the extension and webview
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
│       ├── test    # Unit tests for the extension
│       │   ├── extension.test.js
│       │   └── extension.test.js.map
│       └── utils    # Utility functions for the extension
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
├── package.json    # Project manifest file
├── pnpm-workspace.yaml    # Configuration file for the pnpm package manager
├── src    # Source code for the extension
│   ├── __mocks__    # Mock files for testing
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
│   ├── api    # API implementation for interacting with language models
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
│   ├── core    # Core logic for the extension
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
│   ├── exports    # Public API for the extension
│   │   ├── README.md    # Project description and usage instructions
│   │   ├── cline.d.ts
│   │   └── index.ts
│   ├── extension.ts    # Main entry point for the extension
│   ├── integrations    # Integration code with various IDE features
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
│   ├── services    # Background services for the extension
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
│   ├── shared    # Shared utilities between the extension and webview
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
│   ├── test    # Unit tests for the extension
│   │   ├── extension.test.ts
│   │   └── tsconfig.json    # Configuration file for the TypeScript compiler
│   └── utils    # Utility functions for the extension
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
├── tsconfig.json    # Configuration file for the TypeScript compiler
├── websocket-server    # Server-side code for handling websocket connections
│   ├── package-lock.json    # Package lock file for the project
│   ├── package.json    # Project manifest file
│   ├── src    # Source code for the extension
│   │   └── logger.ts
│   └── tsconfig.json    # Configuration file for the TypeScript compiler
└── webview-ui    # React webview for the extension
    ├── config-overrides.js
    ├── package.json    # Project manifest file
    ├── public
    │   ├── index.html
    │   ├── manifest.json
    │   └── robots.txt
    ├── scripts
    │   └── build-react-no-split.js
    ├── src    # Source code for the extension
    │   ├── App.tsx
    │   ├── context
    │   │   └── ExtensionStateContext.tsx
    │   ├── index.css
    │   ├── index.tsx
    │   ├── react-app-env.d.ts
    │   ├── reportWebVitals.ts
    │   ├── services    # Background services for the extension
    │   │   └── GitService.ts
    │   ├── setupTests.ts
    │   └── utils    # Utility functions for the extension
    │       ├── command-validation.ts
    │       ├── context-mentions.ts
    │       ├── format.ts
    │       ├── getLanguageFromPath.ts
    │       ├── highlight.ts
    │       ├── mcp.ts
    │       ├── textMateToHljs.ts
    │       ├── validate.ts
    │       └── vscode.ts
    └── tsconfig.json    # Configuration file for the TypeScript compiler
```

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

### src/**mocks**/delay.js

- delay

### src/**mocks**/globby.js

- globby

### src/**mocks**/os-name.js

- osName

### src/**mocks**/p-wait-for.js

- pWaitFor

### src/**mocks**/serialize-error.js

- deserializeError
- serializeError

### src/**mocks**/strip-ansi.js

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
