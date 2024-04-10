import winston, { createLogger, format } from "winston";
const { combine, json, printf, colorize, timestamp } = winston.format;
import { DateTime } from "luxon";

type LoggerMessage = string;

const timestampCustom = format((info, opts) => {
  if (opts.tz) {
    info.timestamp = DateTime.local()
      .setZone(opts.tz)
      .toFormat("yyyy-MM-dd hh:mm:ss.SSS ZZ");
  }
  return info;
});

const developmentFormat = combine(
  colorize({ all: true }),
  timestampCustom({ tz: process.env.LOG_TZ }),
  printf((info) => `[${info.timestamp}] [${info.level}]: ${info.message}`)
);

const productionFormat = combine(timestamp(), json());

const logger = createLogger({
  level: process.env.LOG_LEVEL ?? "info",
  format:
    process.env.NODE_ENV === "development"
      ? developmentFormat
      : productionFormat,
  transports: [new winston.transports.Console()],
});

export const log = (message: LoggerMessage) => logger.info(message);
export const logError = (message: LoggerMessage) => logger.error(message);
