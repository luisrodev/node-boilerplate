import type { Request, Response } from "express";
import express from "express";
import cors from "cors";

import { tryCatchRequestHandler } from "~/core/tryCatch";
import { generateResponse } from "~/utils/generateResponse";
import { AppError } from "~/core/applicationError";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/health", (req, res) => {
  return res.status(200).send("Server OK");
});

app.get(
  "/yes",
  tryCatchRequestHandler(async (req: Request, res: Response) => {
    return res.status(200).json(generateResponse("All fine"));
  })
);

app.get(
  "/err",
  tryCatchRequestHandler(async (req: Request, res: Response) => {
    // throw new Error("Some error occurs");
    throw new AppError("Some strange error occurs", 400);
  })
);

export default app;
