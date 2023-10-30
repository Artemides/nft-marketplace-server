import { NFTListenOnEvent } from "../../../typechain-types/contracts/NFTMarket";
import { NFTMarket } from "../../data/nfts";

const mockNft: NFTListenOnEvent.InputTuple = ["0xaddress", 1, 1];
const mockNft2: NFTListenOnEvent.InputTuple = ["0xaddress", 2, 1];

describe("nft data storage", () => {
  let market: NFTMarket;
  beforeEach(() => {
    market = new NFTMarket();
  });
  afterEach(() => {
    market = new NFTMarket();
  });

  it("should start with zero nft items", () => {
    const nfts = market.getNfts();
    expect(nfts).toMatchObject({});
  });

  it("should add a new nft", () => {
    market.addNft(mockNft);
    const nfts = market.countNfts();
    expect(nfts).toBe(1);
  });

  it("should replace if add same nft", () => {
    market.addNft(mockNft);
    market.addNft(mockNft);
    const nfts = market.countNfts();
    expect(nfts).toBe(1);
  });
  it("should add two new nfts", () => {
    market.addNft(mockNft);
    market.addNft(mockNft2);
    const nfts = market.countNfts();
    expect(nfts).toBe(2);
  });

  it("should remove an nft", () => {
    const created = market.addNft(mockNft);

    market.removeNft(created);

    const nfts = market.countNfts();
    expect(nfts).toBe(0);
  });
  it("does not report when removing a non exisiting item", () => {
    market.removeNft("address");

    const nfts = market.countNfts();
    expect(nfts).toBe(0);
  });
});
