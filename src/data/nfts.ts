import { ethers } from "ethers";
import {
  NFTListenOnEvent,
  NFTPriceUpdatedEvent,
} from "../../typechain-types/contracts/NFTMarket";
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
    const nftHash = arrToKeccak(nft.splice(0, nft.length - 1));
    this.nfts[nftHash] = parseNft(nft);
    console.log(`NFT: ${nftHash} listed on Marketplace`);
    return nftHash;
  }

  removeNft(nftHash: string): string {
    delete this.nfts[nftHash];
    console.log(`NFT: ${nftHash} Unlisted from Marketplace`);

    return nftHash;
  }

  updateNft(updatedNft: NFTPriceUpdatedEvent.InputTuple): string | undefined {
    const nftHash = arrToKeccak(updatedNft.splice(0, 2));
    const currentNft = this.nfts[nftHash];
    if (!currentNft) {
      console.log(`# NFT ${nftHash} does not exists`);
      return;
    }

    const [, , , newPrice] = updatedNft;

    currentNft.price = newPrice.toString();
    this.nfts[nftHash] = currentNft;
    console.log(`NFT: ${nftHash} updated on Marketplace`);

    return nftHash;
  }
}
