import provider from "../../ethers.config";
import {
  NFTListenOnEvent,
  NFTPriceUpdatedEvent,
  NFTPurchasedEvent,
  NFTUnlistedEvent,
} from "../../typechain-types/contracts/NFTMarket";
import { nftMarket } from "../data";
import { arrToKeccak } from "../utils/hash";
import marketplace from "./NFTMarket";

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
