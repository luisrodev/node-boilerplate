import winston, { createLogger, format } from "winston";
import { DateTime } from "luxon";

import config from "~/config";

const { combine, json, printf, colorize, timestamp } = winston.format;

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
  timestampCustom({ tz: config.logger.TZ }),
  printf(({ level, message, timestamp, ...rest }) => {
    if (Object.entries(rest).length === 0) {
      return `[${timestamp}] [${level}]: ${message}`;
    }

    return `[${timestamp}] [${level}]: ${message} \n${JSON.stringify(
      {
        ...rest,
      },
      null,
      2
    )}`;
  })
);

const productionFormat = combine(timestamp(), json());

const logger = createLogger({
  level: config.logger.level ?? "info",
  format: config.isDevelopment ? developmentFormat : productionFormat,
  transports: [new winston.transports.Console()],
});

export const log = logger;
