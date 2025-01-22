import * as assert from 'assert';
import { createLogger } from "../../src/logger";
import * as fs from "fs";
import * as path from "path";
import * as os from "os";

describe("logger", () => {
  let testDir: string;
  let logsDir: string;
  let logFile: string;
  let logger: ReturnType<typeof createLogger>;

  beforeEach(() => {
    // Create a unique temporary directory for each test
    testDir = fs.mkdtempSync(path.join(os.tmpdir(), "websocket-test-"));
    logsDir = path.join(testDir, "logs");
    logFile = path.join(logsDir, "websocket.log");
    logger = createLogger(logsDir);
  });

  afterEach(() => {
    // Clean up the temporary directory after each test
    if (fs.existsSync(testDir)) {
      fs.rmSync(testDir, { recursive: true });
    }
  });

  it("should create log directory if it does not exist", () => {
    logger.info("test message");
    assert.ok(fs.existsSync(logsDir), "Log directory should exist");
  });

  it("should write log messages to file", () => {
    const testMessage = "test log message";
    logger.info(testMessage);

    const logContent = fs.readFileSync(logFile, "utf-8");
    assert.ok(logContent.includes(testMessage), "Log file should contain the test message");
  });

  it("should log different levels", () => {
    logger.info("info message");
    logger.warn("warn message");
    logger.error("error message");

    const logContent = fs.readFileSync(logFile, "utf-8");
    assert.ok(logContent.includes("info message"), "Log should contain info message");
    assert.ok(logContent.includes("warn message"), "Log should contain warn message");
    assert.ok(logContent.includes("error message"), "Log should contain error message");
  });
}); 