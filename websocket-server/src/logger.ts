import * as winston from "winston"
import * as path from "path"
import * as fs from "fs"
import Transport from "winston-transport"

class SyncFileTransport extends Transport {
	private filename: string

	constructor(options: Transport.TransportStreamOptions & { filename: string }) {
		super(options)
		this.filename = options.filename

		// Ensure directory exists
		const dir = path.dirname(this.filename)
		if (!fs.existsSync(dir)) {
			fs.mkdirSync(dir, { recursive: true })
		}
	}

	log(info: any, callback: () => void) {
		const line = `${info.level}: ${info.message} ${JSON.stringify(info, ["timestamp"])}\n`
		fs.appendFileSync(this.filename, line)
		callback()
	}
}

export const createLogger = (logsDir: string = path.join(process.cwd(), "logs")) => {
	const logger = winston.createLogger({
		level: "info",
		format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
		transports: [
			new SyncFileTransport({
				filename: path.join(logsDir, "websocket.log"),
				level: "info",
			}),
		],
	})

	// If we're not in production, log to the console as well
	if (process.env.NODE_ENV !== "production") {
		logger.add(
			new winston.transports.Console({
				format: winston.format.combine(winston.format.colorize(), winston.format.simple()),
			}),
		)
	}

	return logger
}

export default createLogger()
