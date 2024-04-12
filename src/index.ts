import { config } from "dotenv";
config();

import app from "~/app";
import { log } from "~/lib/logger";

app.listen(process.env.PORT, () => {
  log.info(`Server running on env: ${process.env.NODE_ENV}`);
  log.info(`Server listen on port: ${process.env.PORT}`);
});
