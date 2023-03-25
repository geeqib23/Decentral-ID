import express from "express";
import pkg from "body-parser";
import morgan from "morgan";
import cors from "cors";
import { connect } from "./utils/db.js";
import { config } from "dotenv";

import loginRouter from "../routes/login.js";

const app = express();
const { json, urlencoded } = pkg;
const PORT = process.env.PORT || 3030;

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(morgan("dev"));
app.use(cors());
app.options("*", cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/user", loginRouter);

app.listen(PORT, async () => {
  config({ path: ".env" });
  console.log("server is running on port 3030 http://localhost:3030");
  console.log(process.env.DB_URL);
  await connect()
    .then(() => console.log("DB Connected"))
    .catch((err) => console.log(`DB Disconnected ${err.message}`));
});
