import { Request, Response } from "express";
import { nftMarket } from "../data";
import * as nfts from "../services/nfts.services";

export const getNfts = (req: Request, res: Response) => {
  const nfts = nftMarket.getNfts();

  res.json({ nfts }).status(200);
};

export const getListedNfts = async (req: Request, res: Response) => {
  await nfts.getListedNfts();
};
