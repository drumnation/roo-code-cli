# Project Overview

## Project Name

**Roo Code CLI**

## Description

Roo Code is an AI-powered autonomous coding agent that integrates directly into your editor. It's designed to enhance the software development process by offering capabilities such as natural language communication, direct file manipulation within the workspace, terminal command execution, browser automation, and integration with any OpenAI-compatible or custom API/model. Roo Code can adapt its "personality" and functionalities through Custom Modes, making it a versatile tool for various roles like a coding partner, system architect, QA engineer, product manager, or UI/UX designer.

**This project is a fork of the original Roo Cline project. The primary goal of this fork is to add terminal access to Roo Code for the purposes of agent-to-agent communication.**

## Key Features

- **Adaptive Autonomy**: Roo Code can operate with manual approval, autonomously, or in a hybrid mode, allowing users to control its actions.
- **API and Model Support**: Compatible with various APIs and models, including OpenRouter, Anthropic, Glama, OpenAI, Google Gemini, AWS Bedrock, Azure, GCP Vertex, and local models like LM Studio/Ollama.
- **Custom Modes**: Allows users to define Roo Code's persona, instructions, and permissions, with built-in modes like Code, Architect, and Ask, and the ability to create custom modes.
- **File & Editor Operations**: Can create and edit files, react to linting or compile-time errors, and track changes via the editor's timeline.
- **Command Line Integration**: Executes terminal commands, monitors output, and adapts to errors, with options for manual or auto-approval.
- **Browser Automation**: Opens browser sessions to launch web apps, interact with UI elements, and capture screenshots, useful for end-to-end testing.
- **Model Context Protocol (MCP)**: Enables extending Roo Code with new tools autonomously.
- **Context Mentions**: Allows embedding files, folders, workspace errors/warnings, URLs, and Git commits/diffs into the conversation for focused assistance.

## Installation

Roo Code is available on the VSCode Marketplace and Open-VSX. Users can install it directly from the editor's Extensions panel or by manually installing the .vsix file.

## Local Setup & Development

The project can be set up locally by cloning the repository, installing dependencies with `npm run install:all`, and building the extension with `npm run build`. Debugging can be done by pressing `F5` in VSCode to open a new session with Roo Code loaded.

## Versioning and Publishing

The project uses `changesets` for versioning and publishing, with release notes available in `CHANGELOG.md`.

## API

Roo Code exposes an API for use by other extensions, allowing for functionalities like setting custom instructions, starting new tasks, sending messages, and simulating button presses in the chat interface.

## Contributing

Community contributions are welcome. Developers can contribute by checking open issues or feature requests, forking the repository, submitting pull requests, and joining the Reddit community for discussions.

## License

The project is licensed under Apache 2.0.

## Disclaimer

Roo Veterinary, Inc. provides Roo Code "AS IS" and "AS AVAILABLE," without warranties regarding the code, models, or tools provided. Users assume all risks associated with its use.

## WebSocket Communication Layer (Added Tuesday, January 21, 2025 at 12:22:44 PM)

### Overview
The WebSocket server component provides real-time bidirectional communication between the VS Code extension and external clients. This enables features like live updates, remote control, and event streaming.

### Technical Stack
- **WebSocket Protocol**: Using `ws` package (v8.16.0)
- **Logging**: Winston logger (v3.11.0)
- **Language**: TypeScript (v5.3.3)

### Architecture Decisions
1. **Modular Design**: 
   - Separated WebSocket functionality into its own module
   - Independent package structure for better maintainability
   - Clear separation of concerns between logging and server logic

2. **Logging Strategy**:
   - File-based logging for errors and combined logs
   - Development console logging with colorization
   - Structured JSON logging for better parsing
   - Timestamp inclusion for debugging

3. **Type Safety**:
   - Strict TypeScript configuration
   - Generated type definitions
   - Source maps for debugging

### Security Considerations
- WebSocket port configurable through VS Code settings
- Error logging separated from general logs
- Development/Production environment detection

## Last Updated: Tuesday, January 21, 2025 at 03:00:37 PM

### 🔄 Recent Updates

1. Test Framework Migration:
   - Migrated websocket-server tests to @vscode/test-electron
   - Improved test reliability and integration with VSCode
   - Added proper test isolation and cleanup
   - Enhanced mock implementations

### 🏗️ Technical Stack Updates

- Added Dependencies:
  - @vscode/test-electron ^2.3.8 (dev)
  - mocha ^11.0.1 (dev)
  - @types/mocha ^10.0.10 (dev)

### 🎨 Architectural Decisions

1. Test Framework Selection:
   - Chose @vscode/test-electron for better VSCode integration
   - Improved test reliability and maintainability
   - Better support for VSCode extension testing patterns
   - Consistent with VSCode extension development best practices

2. Test Architecture:
   - Proper mock implementations with event handling
   - Better test isolation and cleanup
   - Improved error handling and validation
   - State tracking for better test assertions

### ⚡ Performance Considerations

1. Test Performance:
   - Improved test startup time
   - Better resource cleanup between tests
   - Reduced test flakiness
   - More reliable test execution

2. Areas for Improvement:
   - Add test coverage reporting
   - Implement performance benchmarks
   - Add connection pooling
   - Handle port conflicts gracefully

### 🔒 Security Implications

- No direct security implications from test framework migration
- Improved error handling and validation in tests
- Better isolation between test cases
- Proper cleanup of test resources
