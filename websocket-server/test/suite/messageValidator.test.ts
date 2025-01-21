import * as assert from 'assert';
import { DefaultMessageValidator } from '../../src/validators/messageValidator';
import { MessageValidationError } from '../../src/types/messages';

describe('DefaultMessageValidator', () => {
  let validator: DefaultMessageValidator;

  beforeEach(() => {
    validator = new DefaultMessageValidator();
  });

  describe('validate', () => {
    it('should validate a valid client message', () => {
      const message = {
        type: 'command',
        payload: { action: 'test' },
        requestId: '123',
        timestamp: '2024-01-21T12:00:00Z'
      };

      assert.doesNotThrow(() => validator.validate(message));
    });

    it('should validate a valid server message', () => {
      const message = {
        type: 'response',
        payload: { result: 'success' },
        requestId: '123',
        timestamp: '2024-01-21T12:00:00Z'
      };

      assert.doesNotThrow(() => validator.validate(message));
    });

    it('should throw for non-object message', () => {
      assert.throws(() => validator.validate('not an object'), MessageValidationError);
      assert.throws(() => validator.validate(null), MessageValidationError);
      assert.throws(() => validator.validate(undefined), MessageValidationError);
      assert.throws(() => validator.validate([]), MessageValidationError);
    });

    it('should throw for message without type', () => {
      assert.throws(() => validator.validate({}), MessageValidationError);
    });

    it('should throw for invalid message type', () => {
      assert.throws(() => validator.validate({ type: 'invalid' }), MessageValidationError);
    });
  });

  describe('validateClientMessage', () => {
    it('should validate a valid client message', () => {
      const message = {
        type: 'command',
        payload: { action: 'test' }
      };

      assert.doesNotThrow(() => validator.validateClientMessage(message));
    });

    it('should validate a client message with optional fields', () => {
      const message = {
        type: 'query',
        payload: { query: 'test' },
        requestId: '123',
        timestamp: '2024-01-21T12:00:00Z'
      };

      assert.doesNotThrow(() => validator.validateClientMessage(message));
    });

    it('should throw for invalid client message type', () => {
      const message = {
        type: 'invalid',
        payload: {}
      };

      assert.throws(() => validator.validateClientMessage(message), MessageValidationError);
    });

    it('should throw for missing payload', () => {
      const message = {
        type: 'command'
      };

      assert.throws(() => validator.validateClientMessage(message), MessageValidationError);
    });

    it('should throw for invalid requestId type', () => {
      const message = {
        type: 'command',
        payload: {},
        requestId: 123
      };

      assert.throws(() => validator.validateClientMessage(message), MessageValidationError);
    });
  });

  describe('validateServerMessage', () => {
    it('should validate a valid server message', () => {
      const message = {
        type: 'response',
        payload: { result: 'success' }
      };

      assert.doesNotThrow(() => validator.validateServerMessage(message));
    });

    it('should validate a server message with optional fields', () => {
      const message = {
        type: 'error',
        payload: { error: 'test error' },
        requestId: '123',
        timestamp: '2024-01-21T12:00:00Z',
        error: {
          code: 'ERR_001',
          message: 'Test error message'
        }
      };

      assert.doesNotThrow(() => validator.validateServerMessage(message));
    });

    it('should throw for invalid server message type', () => {
      const message = {
        type: 'invalid',
        payload: {}
      };

      assert.throws(() => validator.validateServerMessage(message), MessageValidationError);
    });

    it('should throw for missing payload', () => {
      const message = {
        type: 'response'
      };

      assert.throws(() => validator.validateServerMessage(message), MessageValidationError);
    });

    it('should throw for invalid error object', () => {
      const message = {
        type: 'error',
        payload: {},
        error: 'not an object'
      };

      assert.throws(() => validator.validateServerMessage(message), MessageValidationError);
    });

    it('should throw for invalid error code', () => {
      const message = {
        type: 'error',
        payload: {},
        error: {
          code: 123,
          message: 'Test error'
        }
      };

      assert.throws(() => validator.validateServerMessage(message), MessageValidationError);
    });

    it('should throw for invalid error message', () => {
      const message = {
        type: 'error',
        payload: {},
        error: {
          code: 'ERR_001',
          message: 123
        }
      };

      assert.throws(() => validator.validateServerMessage(message), MessageValidationError);
    });
  });
}); 