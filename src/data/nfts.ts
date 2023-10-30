import { ethers } from "ethers";
import { NFTListenOnEvent } from "../../typechain-types/contracts/NFTMarket";
import { arrToKeccak } from "../utils/hash";
import { MarketNFT } from "../types/market";
import { parseNft } from "../utils/nftItem";

export class NFTMarket {
  private nfts: { [key: string]: MarketNFT } = {};

  getNfts() {
    return this.nfts;
  }

  countNfts() {
    const items = Object.keys(this.nfts);
    return items.length;
  }

  addNft(nft: NFTListenOnEvent.InputTuple): string {
    const nftHash = arrToKeccak(nft);

    this.nfts[nftHash] = parseNft(nft);

    return nftHash;
  }

  removeNft(nft: NFTListenOnEvent.InputTuple): string {
    const nftHash = arrToKeccak(nft);
    delete this.nfts[nftHash];

    return nftHash;
  }
}
