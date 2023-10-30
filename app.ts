import express, { Application } from "express";
import "dotenv/config";
import "./events";

const PORT = process.env.PORT || 3000;

const app: Application = express();

app.listen(PORT, () => {
  console.log(`Listenning on Port ${PORT}`);
});
