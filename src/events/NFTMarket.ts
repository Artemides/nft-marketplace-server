import { ethers } from "ethers";
import { abi as MarketplaceABI } from "../../artifacts/contracts/Marketplace/Marketplace.json";
import provider from "../../ethers.config";

const MARKETPLACE_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const marketplace = new ethers.Contract(
  MARKETPLACE_ADDRESS,
  MarketplaceABI,
  provider
);

export default marketplace;
