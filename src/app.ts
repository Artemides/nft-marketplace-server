import express, { Application } from "express";
import "dotenv/config";
import "./events";

import nftRoute from "./routes/nfts.routes";

const PORT = process.env.PORT || 3000;

const app: Application = express();

app.use(express.json());
app.use("/", nftRoute);
app.listen(PORT, () => {
  console.log(`Listenning on Port ${PORT}`);
});
