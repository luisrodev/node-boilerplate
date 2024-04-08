import { config } from "dotenv";
import express from "express";
config();
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/health", (req, res) => {
  return res.status(200).send("Server OK");
});

app.listen(process.env.PORT, () => {
  console.log(
    `Server running on env: ${process.env.NODE_ENV} listen on port: ${process.env.PORT}`
  );
});
