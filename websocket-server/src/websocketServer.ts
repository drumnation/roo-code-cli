import { WebSocket, WebSocketServer as WSServer } from "ws"
import * as vscode from "vscode"
import logger from "./logger"
import { DefaultMessageValidator } from "./validators/messageValidator"
import { MessageValidationError, ClientMessage, ServerMessage } from "./types/messages"

export class WebSocketServer {
	private static mockServerInstance: WSServer | null = null
	private wss: WSServer | null = null
	private port: number
	private validator: DefaultMessageValidator

	static __getMockServer(): WSServer | null {
		return this.mockServerInstance
	}

	private context: vscode.ExtensionContext

	constructor(context: vscode.ExtensionContext) {
		this.context = context
		// Get port from workspace state, default to 3000
		this.port = context.workspaceState.get<number>("websocketPort") || 3000
		this.validator = new DefaultMessageValidator()
	}

	public start(): void {
		try {
			this.wss = new WSServer({ port: this.port })
			WebSocketServer.mockServerInstance = this.wss
			logger.info(`WebSocket server started on port ${this.port}`)

			this.wss.on("connection", (ws: WebSocket) => {
				logger.info("New client connected")

				ws.on("message", (message: Buffer) => {
					this.handleClientMessage(ws, message)
				})

				ws.on("close", () => {
					logger.info("Client disconnected")
				})

				ws.on("error", (error: Error) => {
					logger.error(`WebSocket error: ${error.message}`)
				})
			})

			this.wss.on("error", (error: Error) => {
				logger.error(`Server error: ${error.message}`)
			})
		} catch (error) {
			logger.error(`Failed to start WebSocket server: ${error instanceof Error ? error.message : String(error)}`)
			throw error
		}
	}

	public stop(): void {
		if (this.wss) {
			this.wss.close(() => {
				logger.info("WebSocket server stopped")
			})
			this.wss = null
		} else {
			logger.warn("Attempted to stop server that was not running")
		}
	}

	private handleClientMessage(ws: WebSocket, message: Buffer): void {
		try {
			const messageStr = message.toString()
			logger.info(`Received message: ${messageStr}`)

			// Parse and validate the message
			const parsedMessage = JSON.parse(messageStr)
			
			// Validate as client message
			this.validator.validateClientMessage(parsedMessage)
			const clientMessage = parsedMessage as ClientMessage

			// Process the validated message
			let response: ServerMessage
			switch (clientMessage.type) {
				case 'command':
					response = {
						type: 'response',
						payload: { status: 'command received' },
						requestId: clientMessage.requestId
					}
					break
				case 'query':
					response = {
						type: 'response',
						payload: { status: 'query received' },
						requestId: clientMessage.requestId
					}
					break
				case 'notification':
					response = {
						type: 'response',
						payload: { status: 'notification received' },
						requestId: clientMessage.requestId
					}
					break
				default:
					throw new MessageValidationError(`Unhandled message type: ${clientMessage.type}`)
			}

			// Validate response before sending
			this.validator.validateServerMessage(response)
			ws.send(JSON.stringify(response))
			logger.info(`Sent response: ${JSON.stringify(response)}`)
		} catch (error) {
			logger.error(`Error handling message: ${error instanceof Error ? error.message : String(error)}`)

			// Send error response to client
			const errorResponse: ServerMessage = {
				type: 'error',
				payload: { error: 'Failed to process message' },
				error: {
					code: error instanceof MessageValidationError ? 'VALIDATION_ERROR' : 'INTERNAL_ERROR',
					message: error instanceof Error ? error.message : String(error)
				}
			}

			// Validate error response before sending
			this.validator.validateServerMessage(errorResponse)
			ws.send(JSON.stringify(errorResponse))
		}
	}
}
