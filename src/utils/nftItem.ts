import { DeferredTopicFilter, EventLog } from "ethers";
import { NFTListenOnEvent } from "../../typechain-types/contracts/NFTMarket";
import marketplace from "../events/NFTMarket";
import { MarketNFT } from "../types/market";

export const parseNft = (data: NFTListenOnEvent.InputTuple): MarketNFT => {
  return {
    nftAddress: data[0].toString(),
    tokenId: parseInt(data[1].toString()),
    price: data[2].toString(),
  };
};

export const getEventLogs = async <T>(eventFilter: DeferredTopicFilter) => {
  const fromBlock = 0;
  const toBlock = "latest";
  const nftlogs = await marketplace.queryFilter(
    eventFilter,
    fromBlock,
    toBlock
  );
  const eventTopics = nftlogs.map((log) => {
    const event = log as EventLog;
    const topics = event.args as unknown;
    return topics as T;
  });
  return eventTopics;
};
