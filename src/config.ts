import { config as loadEnv } from "dotenv";
import merge from "lodash.merge";

loadEnv();

type Environment = "development" | "production" | "test";

const env: Environment = (process.env.NODE_ENV as Environment) || "development";

const config = {
  all: {
    env,
    isDevelopment: env === "development",
    TZ: process.env.TZ,
    PORT: parseInt(process.env.PORT || "3001"),
    logger: {
      level: process.env.LOG_LEVEL || "info",
      TZ: process.env.LOG_TZ || "UTC",
    },
  },
  development: getDevelopmentConfig(),
  production: getProductionConfig(),
  test: {},
};

function getDevelopmentConfig() {
  return {};
}

function getProductionConfig() {
  return {};
}

const mergedConfig = merge(config.all, config[env]);
export default mergedConfig;
