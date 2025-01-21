export interface BaseMessage {
  type: string;
  timestamp?: string;
}

export interface ClientMessage extends BaseMessage {
  type: 'command' | 'query' | 'notification';
  payload: unknown;
  requestId?: string;
}

export interface ServerMessage extends BaseMessage {
  type: 'response' | 'error' | 'event';
  payload: unknown;
  requestId?: string;
  error?: {
    code: string;
    message: string;
  };
}

export type Message = ClientMessage | ServerMessage;

export interface MessageValidator {
  validate(message: unknown): message is Message;
  validateClientMessage(message: unknown): message is ClientMessage;
  validateServerMessage(message: unknown): message is ServerMessage;
}

// Message validation errors
export class MessageValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'MessageValidationError';
  }
} 