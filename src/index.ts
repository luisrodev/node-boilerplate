import { config } from "dotenv";
import express from "express";
config();
import cors from "cors";
import { log } from "~/lib/logger";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/health", (req, res) => {
  return res.status(200).send("Server OK");
});

app.listen(process.env.PORT, () => {
  log(`Server running on env: ${process.env.NODE_ENV}`);
  log(`Server listen on port: ${process.env.PORT}`);
});
