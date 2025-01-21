import { describe, it, expect, beforeEach, afterEach } from "vitest"
import { createLogger } from "./logger"
import * as fs from "fs"
import * as path from "path"
import * as os from "os"

describe("logger", () => {
	let testDir: string
	let logsDir: string
	let logFile: string
	let logger: ReturnType<typeof createLogger>

	beforeEach(() => {
		// Create a unique temporary directory for each test
		testDir = fs.mkdtempSync(path.join(os.tmpdir(), "websocket-test-"))
		logsDir = path.join(testDir, "logs")
		logFile = path.join(logsDir, "websocket.log")
		logger = createLogger(logsDir)
	})

	afterEach(() => {
		// Clean up the temporary directory after each test
		if (fs.existsSync(testDir)) {
			fs.rmSync(testDir, { recursive: true })
		}
	})

	it("should create log directory if it does not exist", () => {
		logger.info("test message")
		expect(fs.existsSync(logsDir)).toBe(true)
	})

	it("should write log messages to file", () => {
		const testMessage = "test log message"
		logger.info(testMessage)

		const logContent = fs.readFileSync(logFile, "utf-8")
		expect(logContent).toContain(testMessage)
	})

	it("should log different levels", () => {
		logger.info("info message")
		logger.warn("warn message")
		logger.error("error message")

		const logContent = fs.readFileSync(logFile, "utf-8")
		expect(logContent).toContain("info message")
		expect(logContent).toContain("warn message")
		expect(logContent).toContain("error message")
	})
})
