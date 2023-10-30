import { Request, Response } from "express";
import { nftMarket } from "../data";

export const getNfts = (req: Request, res: Response) => {
  const nfts = nftMarket.getNfts();
  res.json({ nfts }).status(200);
};
