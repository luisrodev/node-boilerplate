import config from "~/config";

import app from "~/app";
import { log } from "~/lib/logger";

app.listen(config.PORT, () => {
  log.info(`Server running on env: ${config.env}`);
  log.info(`Server listen on port: ${config.PORT}`);
});
