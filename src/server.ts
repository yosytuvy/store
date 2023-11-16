import express from "express";
const app = express();

import morgan from "./helpers/loggers/morgan_logger";
import router from "./router/router";
import mongoose from "mongoose";
import cors from "cors"
app.use(morgan);
app.use(cors());
app.use(express.json());
app.use(express.text());
app.use("/api", router);

const connectToDatabase = async () => {
  try {
    await mongoose.connect("mongodb+srv://yosy:aA12345@cluster0.qtzfd2c.mongodb.net/store");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

const PORT = 8181;

connectToDatabase();

app.listen(PORT, () => console.log(`server run on http://localhost:${PORT}`));
