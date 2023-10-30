import { ethers } from "ethers";
import provider from "../../ethers.config";
import { abi as MarketplaceABI } from "../../artifacts/contracts/Marketplace/Marketplace.json";
import { Abi } from "abitype";
import {
  NFTListenOnEvent,
  NFTPriceUpdatedEvent,
  NFTPurchasedEvent,
  NFTUnlistedEvent,
} from "../../typechain-types/contracts/NFTMarket";
import { nftMarket } from "../data";
import { arrToKeccak } from "../utils/hash";

const MARKETPLACE_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const marketplace = new ethers.Contract(
  MARKETPLACE_ADDRESS,
  MarketplaceABI,
  provider
);

marketplace.on("NFTListenOn", (...args: NFTListenOnEvent.InputTuple) => {
  nftMarket.addNft(args);
});

marketplace.on("NFTUnlisted", (...args: NFTUnlistedEvent.InputTuple) => {
  const nftHash = arrToKeccak(args);
  nftMarket.removeNft(nftHash);
});

marketplace.on("NFTPurchased", (...args: NFTPurchasedEvent.InputTuple) => {
  const nftHash = arrToKeccak(args.splice(0, 2));
  nftMarket.removeNft(nftHash);
});

marketplace.on(
  "NFTPriceUpdated",
  (...args: NFTPriceUpdatedEvent.InputTuple) => {
    nftMarket.updateNft(args);
  }
);

console.log("listenning for evets.");

process.stdin.resume();
