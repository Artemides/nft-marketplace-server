import { NFTListenOnEvent } from "../../typechain-types/contracts/NFTMarket";

export type MarketNFT = {
  nftAddress: string;
  tokenId: number;
  price: string;
};
