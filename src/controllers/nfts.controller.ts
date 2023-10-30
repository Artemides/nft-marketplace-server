import { Request, Response } from "express";
import { nftMarket } from "../data";
import { NFTListenOnEvent } from "../../typechain-types/contracts/NFTMarket";
import { ethers } from "ethers";

export const getNfts = (req: Request, res: Response) => {
  const nfts = nftMarket.getNfts();

  res.json({ nfts }).status(200);
};
