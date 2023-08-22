export const createNewAccountParam = [
  {
    key: "owners",
    type: "string[]",
    description:
      "Pass the owner(s) address(es) of the account. It can be a single owner account or a multi-owner accounts (multi-sig)",
  },
  {
    key: "threshold (optional)",
    type: "BigNumberish",
    description: "Pass the threshold of the account. That's the minimum number of owners that needs to approve a transaction. Default to 1",
  },
  {
    key: "c2nonce (optional)",
    type: "BigNumberish",
    description: "Default to 0",
  },
  {
    key: "fallbackHandler (optional)",
    type: "string",
    description:
      "fallbackHandler Handler for fallback calls to this contract. Default to the ZeroAddress",
  },
];

export const createNewAccountReturn = [
  {
    key: "[sender,initCode]",
    type: "[string,BytesLike]",
    description:
      "Returns an array that includes the sender (account address) and the factory generator function callData for the initCode",
  },
];

export const createEthCallDataParam = [
  {
    key: "To Address",
    type: "string",
    description: "Receiving address",
  },
  {
    key: "Value",
    type: "BigNumberish",
    description: "Amount value. In Wei",
  },
];

export const createEthCallDataReturn = [
  {
    key: "CallData",
    type: "BytesLike",
    description:
      "Call Data to execute a transfer of ETH or any native token (Matic)",
  },
];

export const createCallDataParam = [
  {
    key: "To Address",
    type: "string",
    description: "To address (Smart contract or account)",
  },
  {
    key: "Value",
    type: "BigNumberish",
    description: "Value of ETH being transfered in this transaction",
  },
  {
    key: "Data",
    type: "BytesLike",
    description: "Data",
  },
  {
    key: "Operation",
    type: "Operation: enum",
    description: "0 for a Call, and 1 for a Delegate Call",
  },
  {
    key: "Paymaster Address",
    type: "string",
    description: "The paymaster address if using one",
  },
  {
    key: "ERC-20 Token Address",
    type: "string",
    description: "Token address of the ERC-20 if using a token paymaster",
  },
  {
    key: "Approve Amount",
    type: "BigNumberish",
    description:
      "approveAmount for the token paymaster - To pay for gas using erc-20 token",
  },
];

export const createCallDataReturn = [
  {
    key: "callData",
    type: "string",
    description: "Call Data",
  },
];
