import type { Request, Response } from "express";

import { log } from "~/lib/logger";
import { generateErrorResponse } from "~/utils/generateResponse";
import { AppError } from "~/core/applicationError";

export const tryCatchRequestHandler = (expressEndpointFn: Function) => {
  return (req: Request, res: Response) => {
    expressEndpointFn(req, res).catch((error: Error) => {
      if (error instanceof AppError) {
        log.error("Error from `ApplicationError` instance", error);

        return res
          .status(error.statusCode)
          .json(
            generateErrorResponse(
              error.message,
              error.status,
              process.env.NODE_ENV === "development" ? error.stack : undefined
            )
          );
      }

      log.error("Generic error request handler", error);

      return res
        .status(500)
        .json(generateErrorResponse("Something error", "fail"));
    });
  };
};
