/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  Marketplace,
  MarketplaceInterface,
} from "../../contracts/Marketplace";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "Marketplace__NftAlreadyListed",
    type: "error",
  },
  {
    inputs: [],
    name: "Marketplace__NftUnAuthorized",
    type: "error",
  },
  {
    inputs: [],
    name: "Marketplace__NftUnlisted",
    type: "error",
  },
  {
    inputs: [],
    name: "Marketplace__NotNftOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "Marketplace__PriceMustBeAboveZero",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "Marketplace__SelfNftPurchaseNotAllowed",
    type: "error",
  },
  {
    inputs: [],
    name: "Marketplace__UnsufficientFunds",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "requiredPrice",
        type: "uint256",
      },
    ],
    name: "Marketplace__UnsufficientPrice",
    type: "error",
  },
  {
    inputs: [],
    name: "Marketplace__WithdrawalError",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "NftListedOn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newPrice",
        type: "uint256",
      },
    ],
    name: "NftPriceUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "NftPurchased",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "NftUnlisted",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "seller",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "buyNft",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getNft",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
        ],
        internalType: "struct Marketplace.NftItem",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "listNft",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "unlistNft",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "newPrice",
        type: "uint256",
      },
    ],
    name: "updateNftPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawBalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060016000819055506117ae806100286000396000f3fe6080604052600436106100705760003560e01c80635fd8c7101161004e5780635fd8c710146100f7578063634d0d501461010e57806370a0823114610137578063c922b17c1461017457610070565b80631c6932b6146100755780634ddf4f8f146100b257806354e6448e146100ce575b600080fd5b34801561008157600080fd5b5061009c600480360381019061009791906113e1565b61019d565b6040516100a9919061146e565b60405180910390f35b6100cc60048036038101906100c791906113e1565b610268565b005b3480156100da57600080fd5b506100f560048036038101906100f091906113e1565b610763565b005b34801561010357600080fd5b5061010c610a28565b005b34801561011a57600080fd5b5061013560048036038101906101309190611489565b610ba2565b005b34801561014357600080fd5b5061015e600480360381019061015991906114dc565b610e41565b60405161016b9190611518565b60405180910390f35b34801561018057600080fd5b5061019b60048036038101906101969190611489565b610e8a565b005b6101a5611318565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000838152602001908152602001600020604051806040016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681525050905092915050565b81816000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000838152602001908152602001600020604051806040016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152505090506000816000015111610367576040517f23c6434a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8484336000600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000848152602001908152602001600020604051806040016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152505090508173ffffffffffffffffffffffffffffffffffffffff16816020015173ffffffffffffffffffffffffffffffffffffffff16036104a557838382602001516040517f582a35db00000000000000000000000000000000000000000000000000000000815260040161049c93929190611542565b60405180910390fd5b6000600160008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008a8152602001908152602001600020604051806040016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815250509050348160000151146105b457898982600001516040517fa70566b80000000000000000000000000000000000000000000000000000000081526004016105ab93929190611579565b60405180910390fd5b3460026000836020015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461060791906115df565b92505081905550600160008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008a81526020019081526020016000206000808201600090556001820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905550508973ffffffffffffffffffffffffffffffffffffffff166342842e0e8260200151338c6040518463ffffffff1660e01b81526004016106d193929190611613565b600060405180830381600087803b1580156106eb57600080fd5b505af11580156106ff573d6000803e3d6000fd5b505050508973ffffffffffffffffffffffffffffffffffffffff167f7ce94e86eb25438639e252c1c285f9cade0bffa29864576f04c726016670a8588a836000015160405161074f92919061164a565b60405180910390a250505050505050505050565b818133600083905060008173ffffffffffffffffffffffffffffffffffffffff16636352211e856040518263ffffffff1660e01b81526004016107a69190611518565b602060405180830381865afa1580156107c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107e79190611688565b90508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461084e576040517f8dad9bbf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86866000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000838152602001908152602001600020604051806040016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815250509050600081600001511161094d576040517f23c6434a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600160008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008a81526020019081526020016000206000808201600090556001820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905550508973ffffffffffffffffffffffffffffffffffffffff167e38f3e47004950b890d9df255df5e1b6921cf589f4b44b2259df500959366648a604051610a149190611518565b60405180910390a250505050505050505050565b610a306112bf565b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905060008111610aae576040517fde9a119c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060003373ffffffffffffffffffffffffffffffffffffffff1682604051610b19906116e6565b60006040518083038185875af1925050503d8060008114610b56576040519150601f19603f3d011682016040523d82523d6000602084013e610b5b565b606091505b5050905080610b96576040517fdb3cd3d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050610ba061130e565b565b828233600083905060008173ffffffffffffffffffffffffffffffffffffffff16636352211e856040518263ffffffff1660e01b8152600401610be59190611518565b602060405180830381865afa158015610c02573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c269190611688565b90508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610c8d576040517f8dad9bbf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87876000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000838152602001908152602001600020604051806040016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152505090506000816000015111610d8c576040517f23c6434a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b88600160008d73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008c8152602001908152602001600020600001819055508a73ffffffffffffffffffffffffffffffffffffffff167f89b523c9b50141013ca880ba24a6d3655ba93bdae1df11a92b4dfbb84f8b14508b8b604051610e2c92919061164a565b60405180910390a25050505050505050505050565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b828233600083905060008173ffffffffffffffffffffffffffffffffffffffff16636352211e856040518263ffffffff1660e01b8152600401610ecd9190611518565b602060405180830381865afa158015610eea573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f0e9190611688565b90508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610f75576040517f8dad9bbf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87876000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000838152602001908152602001600020604051806040016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815250509050600081600001511115611075576040517fa9fb5de000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600089116110af576040517f2bc9480800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008b90503073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1663081812fc8d6040518263ffffffff1660e01b81526004016111049190611518565b602060405180830381865afa158015611121573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111459190611688565b73ffffffffffffffffffffffffffffffffffffffff1614611192576040517f47893d0300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60405180604001604052808b81526020013373ffffffffffffffffffffffffffffffffffffffff16815250600160008e73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008d81526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050508b73ffffffffffffffffffffffffffffffffffffffff167f9e024a26a0af043fec3240bdaf07fb9d31cb9ef921ecf1570848c77a049e8d848c8c6040516112a992919061164a565b60405180910390a2505050505050505050505050565b600260005403611304576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112fb90611758565b60405180910390fd5b6002600081905550565b6001600081905550565b604051806040016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006113788261134d565b9050919050565b6113888161136d565b811461139357600080fd5b50565b6000813590506113a58161137f565b92915050565b6000819050919050565b6113be816113ab565b81146113c957600080fd5b50565b6000813590506113db816113b5565b92915050565b600080604083850312156113f8576113f7611348565b5b600061140685828601611396565b9250506020611417858286016113cc565b9150509250929050565b61142a816113ab565b82525050565b6114398161136d565b82525050565b6040820160008201516114556000850182611421565b5060208201516114686020850182611430565b50505050565b6000604082019050611483600083018461143f565b92915050565b6000806000606084860312156114a2576114a1611348565b5b60006114b086828701611396565b93505060206114c1868287016113cc565b92505060406114d2868287016113cc565b9150509250925092565b6000602082840312156114f2576114f1611348565b5b600061150084828501611396565b91505092915050565b611512816113ab565b82525050565b600060208201905061152d6000830184611509565b92915050565b61153c8161136d565b82525050565b60006060820190506115576000830186611533565b6115646020830185611509565b6115716040830184611533565b949350505050565b600060608201905061158e6000830186611533565b61159b6020830185611509565b6115a86040830184611509565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006115ea826113ab565b91506115f5836113ab565b925082820190508082111561160d5761160c6115b0565b5b92915050565b60006060820190506116286000830186611533565b6116356020830185611533565b6116426040830184611509565b949350505050565b600060408201905061165f6000830185611509565b61166c6020830184611509565b9392505050565b6000815190506116828161137f565b92915050565b60006020828403121561169e5761169d611348565b5b60006116ac84828501611673565b91505092915050565b600081905092915050565b50565b60006116d06000836116b5565b91506116db826116c0565b600082019050919050565b60006116f1826116c3565b9150819050919050565b600082825260208201905092915050565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b6000611742601f836116fb565b915061174d8261170c565b602082019050919050565b6000602082019050818103600083015261177181611735565b905091905056fea2646970667358221220ae18e3e0815f724a5acd530340e02cb5cbeb89b0e6aa1b55d638abd3cb707be664736f6c63430008120033";

type MarketplaceConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MarketplaceConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Marketplace__factory extends ContractFactory {
  constructor(...args: MarketplaceConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      Marketplace & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Marketplace__factory {
    return super.connect(runner) as Marketplace__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MarketplaceInterface {
    return new Interface(_abi) as MarketplaceInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Marketplace {
    return new Contract(address, _abi, runner) as unknown as Marketplace;
  }
}