import * as assert from 'assert';
import * as vscode from 'vscode';
import { WebSocket } from 'ws';
import { WebSocketServer } from '../../src/websocketServer';
import { ClientMessage } from '../../src/types/messages';
import logger from '../../src/logger';

// Mock logger
const mockLogger = {
  info: function(message: string) { return message; },
  warn: function(message: string) { return message; },
  error: function(message: string, error?: Error) { return message; }
};

// Mock ws module
const mockWSServer = {
  _handlers: new Map<string, Function>(),
  on: function(event: string, handler: Function) {
    this._handlers.set(event, handler);
    return { event, handler };
  },
  close: function(callback?: () => void) {
    this._handlers.clear();
    callback?.();
  }
};

const mockWS = {
  on: function(event: string, handler: Function) { return { event, handler }; },
  send: function(data: string) { return data; }
};

// Track mock calls
let loggerCalls: { method: string, args: any[] }[] = [];
let wsServerCalls: { method: string, args: any[] }[] = [];
let wsClientCalls: { method: string, args: any[] }[] = [];

describe.skip('WebSocketServer', () => {
  let server: WebSocketServer;
  let mockContext: vscode.ExtensionContext;

  beforeEach(async () => {
    // Reset mock calls and server state
    loggerCalls = [];
    wsServerCalls = [];
    wsClientCalls = [];
    
    // Properly reset mock server state
    mockWSServer.close();
    
    if (server) {
      await server.stop();
      server = new WebSocketServer(mockContext);
    }

    // Set up mock logger
    mockLogger.info = function(message: string) {
      loggerCalls.push({ method: 'info', args: [message] });
      return message;
    };
    mockLogger.warn = function(message: string) {
      loggerCalls.push({ method: 'warn', args: [message] });
      return message;
    };
    mockLogger.error = function(message: string, error?: Error) {
      loggerCalls.push({ method: 'error', args: [message, error] });
      return message;
    };

    // Set up mock WebSocket server
    mockWSServer.on = function(event: string, handler: Function) {
      wsServerCalls.push({ method: 'on', args: [event, handler] });
      return { event, handler };
    };
    mockWSServer.close = function(callback?: () => void) {
      wsServerCalls.push({ method: 'close', args: [callback] });
      callback?.();
    };

    // Set up mock WebSocket client
    mockWS.on = function(event: string, handler: Function) {
      wsClientCalls.push({ method: 'on', args: [event, handler] });
      return { event, handler };
    };
    mockWS.send = function(data: string) {
      wsClientCalls.push({ method: 'send', args: [data] });
      return data;
    };

    // Create mock context
    mockContext = {
      subscriptions: [],
      extensionPath: '',
      storagePath: '',
      globalStoragePath: '',
      logPath: '',
      asAbsolutePath: (path: string) => path,
      workspaceState: {
        get: () => undefined,
        update: () => Promise.resolve(),
        keys: () => [],
        setKeysForSync: () => {}
      },
      globalState: {
        get: () => undefined,
        update: () => Promise.resolve(),
        keys: () => [],
        setKeysForSync: () => {}
      },
      extensionUri: vscode.Uri.file(''),
      environmentVariableCollection: {
        persistent: true,
        replace: () => {},
        append: () => {},
        prepend: () => {},
        get: () => undefined,
        forEach: () => {},
        delete: () => {},
        clear: () => {},
        getScoped: () => ({})
      },
      extensionMode: vscode.ExtensionMode.Test,
      storageUri: vscode.Uri.file(''),
      globalStorageUri: vscode.Uri.file(''),
      logUri: vscode.Uri.file(''),
      secrets: {
        get: () => Promise.resolve(''),
        store: () => Promise.resolve(),
        delete: () => Promise.resolve(),
        onDidChange: new vscode.EventEmitter<vscode.SecretStorageChangeEvent>().event
      },
      extension: {
        id: 'test-extension',
        extensionUri: vscode.Uri.file(''),
        extensionPath: '',
        isActive: true,
        packageJSON: {},
        exports: undefined,
        activate: () => Promise.resolve(),
        extensionKind: vscode.ExtensionKind.Workspace
      }
    } as unknown as vscode.ExtensionContext;

    // Create server instance
    server = new WebSocketServer(mockContext);
  });

  describe('start', () => {
    it('should start the WebSocket server and set up event handlers', () => {
      server.start();

      assert.ok(wsServerCalls.some(call =>
        call.method === 'on' &&
        call.args[0] === 'connection' &&
        typeof call.args[1] === 'function'
      ), 'Should set up connection handler function');
      assert.ok(loggerCalls.some(call => call.method === 'info' && call.args[0] === 'WebSocket server started on port 3000'), 'Should log server start');
    });

    it('should handle client connections', () => {
      server.start();

      // Get connection handler and call it
      const connectionHandler = mockWSServer._handlers.get('connection');
      if (!connectionHandler) {
        throw new Error('No connection handler registered');
      }
      connectionHandler(mockWS);

      assert.ok(wsClientCalls.some(call => call.method === 'on' && call.args[0] === 'message'), 'Should set up message handler');
      assert.ok(wsClientCalls.some(call => call.method === 'on' && call.args[0] === 'close'), 'Should set up close handler');
      assert.ok(wsClientCalls.some(call => call.method === 'on' && call.args[0] === 'error'), 'Should set up error handler');
      assert.ok(loggerCalls.some(call => call.method === 'info' && call.args[0] === 'New client connected'), 'Should log client connection');
    });
  });

  describe('message handling', () => {
    let messageHandler: Function;

    beforeEach(() => {
      server.start();

      // Get connection handler and call it
      const connectionCall = wsServerCalls.find(call => call.method === 'on' && call.args[0] === 'connection');
      const connectionHandler = connectionCall?.args[1] as Function;
      connectionHandler(mockWS);

      // Get message handler
      const messageCall = wsClientCalls.find(call => call.method === 'on' && call.args[0] === 'message');
      messageHandler = messageCall?.args[1] as Function;
      if (!messageHandler) {
        throw new Error('Message handler not found');
      }
    });

    it('should handle valid command message', () => {
      const message: ClientMessage = {
        type: 'command',
        payload: { action: 'test' },
        requestId: '123'
      };

      // Simulate proper WebSocket message format
      const rawMessage = JSON.stringify(message);
      messageHandler(rawMessage, { binary: false });

      const sendCall = wsClientCalls.find(call => call.method === 'send');
      const sentMessage = JSON.parse(sendCall?.args[0] as string);
      assert.strictEqual(sentMessage.type, 'response', 'Should send response type');
      assert.strictEqual(sentMessage.status, 'command received', 'Should send command received status');
      assert.strictEqual(sentMessage.requestId, '123', 'Should include request ID');
    });

    it('should handle invalid message format', () => {
      // Simulate invalid message with error callback
      messageHandler('invalid json', (err: Error) => {
        loggerCalls.push({ method: 'error', args: ['Message handling error', err] });
      });

      const sendCall = wsClientCalls.find(call => call.method === 'send');
      const sentMessage = JSON.parse(sendCall?.args[0] as string);
      assert.strictEqual(sentMessage.type, 'error', 'Should send error type');
      assert.strictEqual(sentMessage.code, 'INTERNAL_ERROR', 'Should send internal error code');
    });
  });

  describe('stop', () => {
    it('should stop the WebSocket server', () => {
      server.start();
      server.stop();

      assert.ok(wsServerCalls.some(call => call.method === 'close'), 'Should close the server');
      assert.ok(loggerCalls.some(call => call.method === 'info' && call.args[0] === 'WebSocket server stopped'), 'Should log server stop');
    });

    it('should handle stopping when server is not running', () => {
      server.stop();

      assert.ok(!wsServerCalls.some(call => call.method === 'close'), 'Should not close the server');
      assert.ok(loggerCalls.some(call => call.method === 'warn' && call.args[0] === 'Attempted to stop server that was not running'), 'Should log warning');
    });
  });
}); 