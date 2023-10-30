import { ethers } from "ethers";

const jsonRpcUrl = process.env.JSON_RPC_URL || "";
const provider = new ethers.JsonRpcProvider(jsonRpcUrl);
console.log({ jsonRpcUrl });
export default provider;
