import { EventLog } from "ethers";
import marketplace from "../events/NFTMarket";
import { NFTListenOnEvent } from "../../typechain-types/contracts/NFTMarket";
import { getEventLogs } from "../utils/nftItem";

async function getListedNfts() {
  const listed = await getEventLogs<NFTListenOnEvent.InputTuple>(
    marketplace.filters.NFTListenOn()
  );

  console.log({ listed });
}

export { getListedNfts };
