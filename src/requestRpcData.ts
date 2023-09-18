export const paymasterMetadataParameters = [
  {
    key: "name",
    type: "string",
    description: "Paymaster Name",
  },
  {
    key: "description",
    type: "string",
    description: "A short description for the paymsater service",
  },
  {
    key: "icons",
    type: "string[]",
    description: "icons associated with the paymaster service",
  },
  {
    key: "address",
    type: "string",
    description: "Paymaster Contract Address",
  },
  {
    key: "sponsoredEventTopic",
    type: "string",
    description: "Emmited topic event if a paymaster is being used",
  },
  {
    key: "dummyPaymasterAndData",
    type: "string",
    description:
      "Dummy value to use for estimating user operation before sponsorship",
  },
];

export const tokensParamaters = [
  {
    key: "symbol",
    type: "string",
    description: "Token Symbol",
  },
  {
    key: "address",
    type: "string",
    description: "Token contract address",
  },
  {
    key: "decimal",
    type: "string",
    description: "Decimals of token",
  },
  {
    key: "fee",
    type: "string",
    description: "Gas fee in unit of of the token",
  },
  {
    key: "exchangeRate",
    type: "string",
    description: "Exchange rate of token",
  },
];

export const userOperationParamaters = [
  {
    key: "sender",
    type: "string",
    description: "The account making the operation",
  },
  {
    key: "nonce",
    type: "string",
    description: "Anti-replay parameter (see “Semi-abstracted Nonce Support” )",
  },
  {
    key: "initCode",
    type: "string",
    description:
      "The initCode of the account (needed if and only if the account is not yet on-chain and needs to be created)",
  },
  {
    key: "callData",
    type: "string",
    description:
      "The data to pass to the sender during the main execution call",
  },
  {
    key: "callGasLimit",
    type: "string",
    description: "The amount of gas to allocate the main execution call",
  },
  {
    key: "verificationGasLimit",
    type: "string",
    description: "The amount of gas to allocate for the verification step",
  },
  {
    key: "preVerificationGas",
    type: "string",
    description:
      "The amount of gas to pay for to compensate the bundler for pre-verification execution and calldata",
  },
  {
    key: "maxFeePerGas",
    type: "string",
    description: "Maximum fee per gas (similar to EIP-1559 max_fee_per_gas)",
  },
  {
    key: "maxPriorityFeePerGas",
    type: "string",
    description:
      "Maximum priority fee per gas (similar to EIP-1559 max_priority_fee_per_gas)",
  },
  {
    key: "paymasterAndData",
    type: "string",
    description:
      "this field is ignore. Add a dummy data '0x', or skip including it",
  },
  {
    key: "signature",
    type: "string",
    description:
      "this field is ignore. Add a dummy data '0x', or skip including it",
  },
];

export const pm_sponsorUserOperationReturnParams = [
  {
    key: "paymasterAndData",
    type: "string",
    description:
      "Paymaster address and data required to pass paymaster contract validation",
  },
  {
    key: "callGasLimit",
    type: "string",
    description: "The amount of gas to allocate the main execution call",
  },
  {
    key: "verificationGasLimit",
    type: "string",
    description: "The amount of gas to allocate for the verification step",
  },
  {
    key: "preVerificationGas",
    type: "string",
    description:
      "The amount of gas to pay for to compensate the bundler for pre-verification execution and calldata",
  },
  {
    key: "maxFeePerGas",
    type: "string",
    description: "Maximum fee per gas (similar to EIP-1559 max_fee_per_gas)",
  },
  {
    key: "maxPriorityFeePerGas",
    type: "string",
    description:
      "Maximum priority fee per gas (similar to EIP-1559 max_priority_fee_per_gas)",
  },
];
