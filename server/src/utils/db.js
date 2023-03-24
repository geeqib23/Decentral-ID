import mongoose from "mongoose";
import { config } from "dotenv";

config({ path: ".env" });
export const connect = () => {
  return mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
