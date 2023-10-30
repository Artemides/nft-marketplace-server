import { NFTListenOnEvent } from "../../typechain-types/contracts/NFTMarket";
import { MarketNFT } from "../types/market";

export const parseNft = (data: NFTListenOnEvent.InputTuple): MarketNFT => {
  return {
    nftAddress: data[0].toString(),
    tokenId: parseInt(data[1].toString()),
    price: data[2].toString(),
  };
};
