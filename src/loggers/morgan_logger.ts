import morgan from "morgan";
import express from "express";
const app = express();


app.use( morgan("common"));

export default app;