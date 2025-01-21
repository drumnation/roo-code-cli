# Roo Cline Extension Development Tasks

## !REMEMBER TO KEEP THE CODE AS MODULAR AND SEPARATE FROM THE ORIGINAL FORK AS POSSIBLE!

## Phase 1: WebSocket Server Implementation

### 1.1. Environment Setup

- [x] **Create `websocket-server` directory:**
    - Created a new folder named `websocket-server` at the root level of the Roo Cline extension.
    - Completed on Tuesday, January 21, 2025 at 12:22:44 PM
- [x] **Initialize `package.json`:**
    - Created package.json with build, watch, and test scripts
    - Added ws and winston dependencies
    - Added TypeScript development dependencies
    - Completed on Tuesday, January 21, 2025 at 12:22:44 PM
- [x] **Install Dependencies:**
    - Installed ws and winston for WebSocket and logging functionality
    - Installed TypeScript and type definitions
    - Completed on Tuesday, January 21, 2025 at 12:22:44 PM
- [x] **Create `tsconfig.json`:**
    - Configured TypeScript compiler options for ES2020
    - Set up source maps and declaration files
    - Configured proper directory structure
    - Completed on Tuesday, January 21, 2025 at 12:22:44 PM
- [x] **Set up Development Tools:**
    - Migrated to pnpm for package management
    - Added tsx for direct TypeScript execution
    - Configured vitest for testing
    - Completed on Tuesday, January 21, 2025 at 12:37:02 PM

### 1.2. Core Implementation

- [x] **Create `logger.ts`:**
    - ✅ Created initial logger setup with Winston
    - ✅ Configured file and console transports
    - ✅ Added custom synchronous file transport
    - ✅ Added comprehensive test coverage
    - Completed on Tuesday, January 21, 2025 at 12:37:02 PM
- [x] **Create `websocketServer.ts`:**
    - ✅ Created `websocket-server/src/websocketServer.ts`
    - ✅ Implemented the `WebsocketServer` class with required methods
    - ✅ Added VS Code configuration integration
    - ✅ Integrated logger for comprehensive event logging
    - ✅ Added the following logging patterns:
        - ✅ Connection events (connect/disconnect)
        - ✅ Message events (received/sent)
        - ✅ Error events
        - ✅ Server lifecycle events (start/stop)
    - ✅ Added comprehensive test coverage
    - Completed on Tuesday, January 21, 2025 at 12:56:04 PM

### 1.2.1 WebSocket Server Enhancements

- [x] **Add Message Type Validation:**
    - ✅ Created message type definitions
    - ✅ Implemented validation middleware
    - ✅ Added test coverage for validation
    - Completed on Tuesday, January 21, 2025 at 01:08:51 PM
- [ ] **Add Secure WebSocket Support:**
    - Implement WSS configuration
    - Add certificate handling
    - Update tests for secure connections
    - Estimated time: 3 hours
- [ ] **Implement Rate Limiting:**
    - Add client message rate limiting
    - Create rate limit configuration
    - Add test coverage for rate limiting
    - Estimated time: 2 hours
- [ ] **Add Connection Pooling:**
    - Implement connection pool
    - Add pool configuration options
    - Create tests for connection management
    - Estimated time: 4 hours

### 1.3. Extension Integration

- [ ] **Update Main `package.json`:**
    - Add a `postinstall` script to run `npm install` in the `websocket-server` directory.
    - Include the `websocket-server/dist` and `websocket-server/package.json` in the `files` array.
- [ ] **Modify `extension.ts`:**
    - Import the `WebsocketServer` class from the `websocket-server` module.
    - Create an instance of `WebsocketServer` in the `activate()` function, passing the `context`.
    - Call the `start()` method on the `WebsocketServer` instance.
    - Call the `stop()` method in the `deactivate()` function.

### 1.4. Configuration

- [ ] **Add `websocketPort` Setting:**
    - In the main `package.json`, add the `rooCline.websocketPort` setting under `contributes.configuration.properties`.
    - Specify the type as `number`, provide a description, and set an optional default value.

## Phase 2: Test File Generator Implementation

### 2.1. Environment Setup

- [ ] **Create `test-generator` directory:**
    - Create a new folder named `test-generator` at the root level of the Roo Cline extension.
- [ ] **Initialize `package.json`:**
    - Navigate to the `test-generator` directory.
    - Run `npm init -y` to create a `package.json` file.
- [ ] **Install Dependencies:**
    - Run `npm install vscode`
    - Run `npm install --save-dev @types/jest @types/node @types/vscode jest ts-jest typescript`.
- [ ] **Create `tsconfig.json`:**
    - Create a `tsconfig.json` file in the `test-generator` directory.
    - Configure the compiler options as specified in the plan.

### 2.2. Core Implementation

- [ ] **Create `testGenerator.ts`:**
    - Create `test-generator/src/testGenerator.ts`.
    - Implement the `generateTestFile()` function.
    - Handle creating the `__tests__` directory.
    - Generate the test file content based on the template.
    - Write the test file to the correct location.
- [ ] **Create `testGenerator.test.ts`:**
    - Create `test-generator/src/testGenerator.test.ts`.
    - Write unit tests for the `generateTestFile()` function.
    - Cover different scenarios (e.g., source file with exports, source file without exports).
    - Use assertions to verify the generated file's content and location.

### 2.3. Extension Integration

- [ ] **Update Main `package.json`:**
    - Add a `postinstall` script to run `npm install` in the `test-generator` directory (in addition to `websocket-server`).
    - Include the `test-generator/dist` and `test-generator/package.json` in the `files` array.
    - Add a command under `contributes.commands` for `rooCline.generateTestFile`.
- [ ] **Modify `extension.ts`:**
    - Import the `generateTestFile` function from the `test-generator` module.
    - Register the `rooCline.generateTestFile` command in the `activate()` function.
    - Handle the command execution by calling `generateTestFile()` with the selected file's URI.
    - Display success or error messages using `vscode.window.showInformationMessage` or `vscode.window.showErrorMessage`.

## Phase 3: Testing and Refinement

### 3.1. Manual Testing

- [ ] **WebSocket Server:**
    - Set the `rooCline.websocketPort` setting in VS Code.
    - Activate the extension.
    - Verify that the WebSocket server starts on the specified port.
    - Test connecting to the server using a WebSocket client.
    - Send and receive messages to test the communication.
- [ ] **Test File Generator:**
    - Create a sample `.ts` file in the `test-workspace` directory.
    - Right-click on the file and select "Roo Cline: Generate Test File".
    - Verify that the test file is generated in the `__tests__` directory with the correct content.

### 3.2. Automated Testing

- [ ] **Run Unit Tests:**
    - Navigate to the `websocket-server` directory and run `npm run test`.
    - Navigate to the `test-generator` directory and run `npm run test`.
    - Ensure all tests pass.

### 3.3. Refinement

- [ ] **Address Test Failures:**
    - Fix any issues identified during testing.
    - Re-run tests to verify the fixes.
- [ ] **Code Review:**
    - Review the code for both the WebSocket server and the test file generator.
    - Ensure code quality, readability, and maintainability.
    - Address any potential issues or improvements.
- [ ] **Documentation:**
    - Update the extension's README with instructions on how to use the new features.
    - Add any necessary inline documentation to the code.

## -------------

## Detailed Plan

## -------------

Okay, I understand. Let's use a TDD approach to develop a new feature for the Roo Cline extension using Cursor Agent.

**1. Define the Feature Scope**

**Feature:** Implement a command to automatically generate a basic test file for a given TypeScript source file.

**Functionality:**

- The user selects a `.ts` file in the VS Code Explorer.
- The user triggers a command (e.g., "Roo Cline: Generate Test File").
- The extension creates a corresponding `.test.ts` file in a `__tests__` directory adjacent to the source file.
- The generated test file will:
    - Import the main module from the source file.
    - Include a basic `describe` block for the main module.
    - Include a placeholder `it` test case.

**Expected Inputs:**

- Path to the selected TypeScript source file.

**Expected Outputs:**

- A new `.test.ts` file created in the `__tests__` directory.
- The content of the test file will follow a basic template.

**User Interactions:**

- Select a `.ts` file in the VS Code Explorer.
- Right-click and select "Roo Cline: Generate Test File" from the context menu, or use a keyboard shortcut.

**2. Write Test Cases**

We'll create a new directory `test-generator` alongside the `websocket-server` directory to maintain strict modularity.

**Directory Structure:**

```
roo-cline-extension/
├── src/
│   └── ... (Original Roo Cline code)
├── websocket-server/
│   └── ... (WebSocket server code)
├── test-generator/
│   ├── src/
│   │   ├── testGenerator.ts
│   │   └── testGenerator.test.ts
│   ├── package.json
│   └── tsconfig.json
├── package.json
└── ...
```

**Test File (`test-generator/src/testGenerator.test.ts`):**

```typescript:test-generator/src/testGenerator.test.ts
import * as vscode from 'vscode';
import * as assert from 'assert';
import * as path from 'path';
import { generateTestFile } from './testGenerator';
import * as fs from 'fs';

describe('Test File Generator', () => {
  const testWorkspace = path.resolve(__dirname, '../../test-workspace');

  beforeEach(() => {
    // Create a clean test workspace before each test
    if (!fs.existsSync(testWorkspace)) {
      fs.mkdirSync(testWorkspace, { recursive: true });
    }
  });

  afterEach(() => {
    // Clean up the test workspace after each test
    fs.rmdirSync(testWorkspace, { recursive: true });
  });

  it('should generate a test file in the __tests__ directory', async () => {
    const sourceFilePath = path.join(testWorkspace, 'example.ts');
    const expectedTestFilePath = path.join(testWorkspace, '__tests__', 'example.test.ts');

    // Create a dummy source file
    fs.writeFileSync(sourceFilePath, 'export const myFunction = () => { return true; };');

    await generateTestFile(sourceFilePath);

    assert.strictEqual(fs.existsSync(expectedTestFilePath), true);
  });

  it('should generate a test file with the correct content', async () => {
    const sourceFilePath = path.join(testWorkspace, 'example.ts');
    const expectedTestFilePath = path.join(testWorkspace, '__tests__', 'example.test.ts');
    const sourceFileName = path.basename(sourceFilePath, '.ts');

    // Create a dummy source file
    fs.writeFileSync(sourceFilePath, 'export const myFunction = () => { return true; };');

    await generateTestFile(sourceFilePath);

    const generatedTestContent = fs.readFileSync(expectedTestFilePath, 'utf-8');
    const expectedTestContent = `
import { ${sourceFileName} } from '../${sourceFileName}';

describe('${sourceFileName}', () => {
  it('should have a placeholder test case', () => {
    // Add your test assertions here
    expect(true).toBe(true);
  });
});
`.trim();

    assert.strictEqual(generatedTestContent, expectedTestContent);
  });

  it('should handle source files without exports', async () => {
    const sourceFilePath = path.join(testWorkspace, 'noExports.ts');
    const expectedTestFilePath = path.join(testWorkspace, '__tests__', 'noExports.test.ts');

    // Create a dummy source file without exports
    fs.writeFileSync(sourceFilePath, 'const x = 10;');

    await generateTestFile(sourceFilePath);

    assert.strictEqual(fs.existsSync(expectedTestFilePath), true);
  });
});
```

**3. Implement the Features**

**`test-generator/src/testGenerator.ts`:**

```typescript:test-generator/src/testGenerator.ts
import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

export async function generateTestFile(sourceFilePath: string) {
  const sourceFileName = path.basename(sourceFilePath, '.ts');
  const testFileName = `${sourceFileName}.test.ts`;
  const testDir = path.join(path.dirname(sourceFilePath), '__tests__');
  const testFilePath = path.join(testDir, testFileName);

  // Create the __tests__ directory if it doesn't exist
  if (!fs.existsSync(testDir)) {
    fs.mkdirSync(testDir);
  }

  // Generate the test file content
  const testFileContent = `
import { ${sourceFileName} } from '../${sourceFileName}';

describe('${sourceFileName}', () => {
  it('should have a placeholder test case', () => {
    // Add your test assertions here
    expect(true).toBe(true);
  });
});
`.trim();

  // Write the test file
  fs.writeFileSync(testFilePath, testFileContent);

  // Open the test file in the editor (optional)
  const testFileUri = vscode.Uri.file(testFilePath);
  await vscode.workspace.openTextDocument(testFileUri);
  await vscode.window.showTextDocument(testFileUri);
}
```

**`test-generator/package.json`:**

```json:test-generator/package.json
{
  "name": "roo-cline-test-generator",
  "version": "1.0.0",
  "description": "Test file generator for Roo Cline extension",
  "main": "dist/testGenerator.js",
  "scripts": {
    "build": "tsc",
    "watch": "tsc -w",
    "test": "jest"
  },
  "dependencies": {
    "vscode": "^1.89.1"
  },
  "devDependencies": {
    "@types/jest": "^29.5.12",
    "@types/node": "^20.12.8",
    "@types/vscode": "^1.89.0",
    "jest": "^29.7.0",
    "ts-jest": "^29.1.2",
    "typescript": "^5.4.5"
  }
}
```

**`test-generator/tsconfig.json`:**

```json:test-generator/tsconfig.json
{
  "compilerOptions": {
    "target": "es2020",
    "module": "commonjs",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules", "**/*.test.ts"]
}
```

**4. Code Structure**

The code for the test generator is completely isolated in the `test-generator` directory. It has its own `package.json`, `tsconfig.json`, source code, and tests.

**5. Test-Driven Development (TDD)**

We wrote the test cases in `testGenerator.test.ts` before implementing the feature in `testGenerator.ts`.

**Integration with Roo Cline Extension**

1. **Add a postinstall script to the main `package.json`:**

```json:package.json
{
  // ...
  "scripts": {
    // ... other scripts
    "postinstall": "cd websocket-server && npm install && cd ../test-generator && npm install"
  },
  // ...
}
```

1. **Modify `src/extension.ts` to register the command:**

```typescript:src/extension.ts
import * as vscode from 'vscode';
import { WebsocketServer } from '../websocket-server/src/websocketServer';
import { generateTestFile } from '../test-generator/src/testGenerator';

let websocketServer: WebsocketServer | null = null;

export function activate(context: vscode.ExtensionContext) {
  // ... existing Roo Cline initialization code ...

  // Start WebSocket server if configured
  websocketServer = new WebsocketServer(context);
  websocketServer.start();

  // Register the test file generation command
  let disposable = vscode.commands.registerCommand('rooCline.generateTestFile', async (uri: vscode.Uri) => {
    if (!uri || !uri.fsPath.endsWith('.ts')) {
      vscode.window.showErrorMessage('Please select a TypeScript file.');
      return;
    }

    try {
      await generateTestFile(uri.fsPath);
      vscode.window.showInformationMessage('Test file generated successfully.');
    } catch (error) {
      vscode.window.showErrorMessage(`Failed to generate test file: ${error}`);
    }
  });

  context.subscriptions.push(disposable);

  // ... rest of the Roo Cline initialization code ...
}

export function deactivate() {
  // ... existing Roo Cline cleanup code ...

  // Stop WebSocket server
  if (websocketServer) {
    websocketServer.stop();
  }
}
```

1. **Update `package.json` (main) to include the `test-generator` folder:**

```json:package.json
{
  // ...
  "files": [
    "src",
    "websocket-server/dist",
    "websocket-server/package.json",
    "test-generator/dist",
    "test-generator/package.json"
  ],
  "contributes": {
    "commands": [
      {
        "command": "rooCline.generateTestFile",
        "title": "Roo Cline: Generate Test File"
      }
    ]
  },
  // ...
}
```

**Running the Tests and Feature**

1. Run `npm install` in the root directory and in the `test-generator` directory.
2. Run `npm run build` inside the `test-generator` directory.
3. Open the Roo Cline extension in VS Code.
4. Create a `test-workspace` directory next to the `src` directory for testing purposes.
5. Inside `test-workspace`, create a simple `.ts` file (e.g., `example.ts`).
6. Right-click on `example.ts` in the Explorer and select "Roo Cline: Generate Test File".
7. A new `__tests__` directory should be created with `example.test.ts` inside.

**To run the tests:**

1. Go to the `test-generator` directory.
2. Run `npm test`.

This comprehensive example demonstrates how to develop a new feature using Cursor Agent and TDD, keeping the code modular and isolated. Let me know if you have any other questions.

## Tuesday, January 21, 2025 at 03:00:37 PM

### ✅ Completed Tasks

- [x] Migrate websocket-server tests from vitest to @vscode/test-electron
- [x] Implement proper WebSocket mocking
- [x] Add test cleanup and isolation
- [x] Improve error handling in tests

### 🆕 New Tasks

1. Test Infrastructure Improvements:
   - [ ] Add test coverage reporting
   - [ ] Set up continuous integration for tests
   - [ ] Add performance benchmarks for WebSocket server
   - [ ] Create test documentation guide

2. WebSocket Server Enhancements:
   - [ ] Handle port conflicts gracefully
   - [ ] Add configurable port retry logic
   - [ ] Implement connection pooling
   - [ ] Add rate limiting for client messages

### 📋 Task Dependencies

1. Test Coverage (High Priority):
   - Requires: Test migration completion ✅
   - Blocks: CI setup

2. CI Setup (Medium Priority):
   - Requires: Test coverage setup
   - Dependencies: None

3. Performance Testing (Low Priority):
   - Requires: Test infrastructure
   - Dependencies: Connection pooling
