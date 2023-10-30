import { ethers } from "ethers";
import provider from "../../ethers.config";
import { abi as MarketplaceABI } from "../../artifacts/contracts/Marketplace/Marketplace.json";
import { Abi } from "abitype";
import { NFTListenOnEvent } from "../../typechain-types/contracts/NFTMarket";
import { nftMarket } from "../data";

const MARKETPLACE_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const eventName = "NFTListenOn";
const marketplace = new ethers.Contract(
  MARKETPLACE_ADDRESS,
  MarketplaceABI,
  provider
);

marketplace.on(eventName, (...args: NFTListenOnEvent.InputTuple) => {
  nftMarket.addNft(args);
});

console.log("listenning for evets.");

process.stdin.resume();
