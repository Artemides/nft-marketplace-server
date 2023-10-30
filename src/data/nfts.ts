import { ethers } from "ethers";
import { NFTListenOnEvent } from "../../typechain-types/contracts/NFTMarket";
import { arrToKeccak } from "../utils/hash";

export class NFTMarket {
  private nfts: { [key: string]: NFTListenOnEvent.InputTuple } = {};

  getNfts() {
    return this.nfts;
  }

  countNfts() {
    const items = Object.keys(this.nfts);
    return items.length;
  }

  addNft(nft: NFTListenOnEvent.InputTuple): string {
    const nftHash = arrToKeccak(nft);
    this.nfts[nftHash] = nft;

    return nftHash;
  }

  removeNft(nft: NFTListenOnEvent.InputTuple): string {
    const nftHash = arrToKeccak(nft);
    delete this.nfts[nftHash];

    console.log({ ss: this.nfts });
    return nftHash;
  }
}
