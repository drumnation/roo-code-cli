import { MessageValidator, Message, ClientMessage, ServerMessage, MessageValidationError } from '../types/messages';

export class DefaultMessageValidator implements MessageValidator {
  validate(message: unknown): message is Message {
    if (!this.isObject(message)) {
      throw new MessageValidationError('Message must be an object');
    }

    if (!('type' in message)) {
      throw new MessageValidationError('Message must have a type');
    }

    const clientTypes = ['command', 'query', 'notification'];
    const serverTypes = ['response', 'error', 'event'];
    const messageType = message.type as string;

    if (clientTypes.includes(messageType)) {
      return this.validateClientMessage(message);
    } else if (serverTypes.includes(messageType)) {
      return this.validateServerMessage(message);
    }

    throw new MessageValidationError(`Invalid message type: ${messageType}`);
  }

  validateClientMessage(message: unknown): message is ClientMessage {
    if (!this.isObject(message)) {
      throw new MessageValidationError('Client message must be an object');
    }

    if (!('type' in message)) {
      throw new MessageValidationError('Client message must have a type');
    }

    const messageType = message.type as string;
    if (!['command', 'query', 'notification'].includes(messageType)) {
      throw new MessageValidationError('Invalid client message type');
    }

    if (!('payload' in message)) {
      throw new MessageValidationError('Client message must have a payload');
    }

    // Optional fields validation
    if ('requestId' in message && typeof message.requestId !== 'string') {
      throw new MessageValidationError('requestId must be a string');
    }

    if ('timestamp' in message && typeof message.timestamp !== 'string') {
      throw new MessageValidationError('timestamp must be a string');
    }

    return true;
  }

  validateServerMessage(message: unknown): message is ServerMessage {
    if (!this.isObject(message)) {
      throw new MessageValidationError('Server message must be an object');
    }

    if (!('type' in message)) {
      throw new MessageValidationError('Server message must have a type');
    }

    const messageType = message.type as string;
    if (!['response', 'error', 'event'].includes(messageType)) {
      throw new MessageValidationError('Invalid server message type');
    }

    if (!('payload' in message)) {
      throw new MessageValidationError('Server message must have a payload');
    }

    // Optional fields validation
    if ('requestId' in message && typeof message.requestId !== 'string') {
      throw new MessageValidationError('requestId must be a string');
    }

    if ('timestamp' in message && typeof message.timestamp !== 'string') {
      throw new MessageValidationError('timestamp must be a string');
    }

    if ('error' in message) {
      if (!this.isObject(message.error)) {
        throw new MessageValidationError('error must be an object');
      }
      if (!('code' in message.error) || typeof message.error.code !== 'string') {
        throw new MessageValidationError('error.code must be a string');
      }
      if (!('message' in message.error) || typeof message.error.message !== 'string') {
        throw new MessageValidationError('error.message must be a string');
      }
    }

    return true;
  }

  private isObject(value: unknown): value is Record<string, unknown> {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
  }
} 