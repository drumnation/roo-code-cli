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
