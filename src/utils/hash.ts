import { ethers } from "ethers";

export function arrToKeccak(args: [...any]) {
  const asBytes = ethers.toUtf8Bytes(args.join("-"));
  return ethers.keccak256(asBytes);
}
