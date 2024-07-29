export const userOperationReturnParamsV06 = [
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
    type: "bigint",
    description: "The amount of gas to allocate the main execution call",
  },
  {
    key: "verificationGasLimit",
    type: "bigint",
    description: "The amount of gas to allocate for the verification step",
  },
  {
    key: "preVerificationGas",
    type: "bigint",
    description:
      "The amount of gas to pay for to compensate the bundler for pre-verification execution and calldata",
  },
  {
    key: "maxFeePerGas",
    type: "bigint",
    description: "Maximum fee per gas (similar to EIP-1559 max_fee_per_gas)",
  },
  {
    key: "maxPriorityFeePerGas",
    type: "bigint",
    description:
      "Maximum priority fee per gas (similar to EIP-1559 max_priority_fee_per_gas)",
  },
  {
    key: "paymasterAndData",
    type: "string",
    description:
      "Address of paymaster sponsoring the transaction, followed by extra data to send to the paymaster (empty for self-sponsored transaction). Revolves to '0x' if not using a paymaster, and a paymasterDummyData when estimating gas",
  },
  {
    key: "signature",
    type: "string",
    description:
      "The signature for the userOperation. It is the data passed into the account along with the nonce during the verification step. Resolves to '0x' when the user did not provide their signature yet",
  },
];


export const userOperationParamsV07 = [
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
    key: "factory",
    type: "string",
    description: "account factory, only for new accounts",
  },
  {
    key: "factoryData",
    type: "string",
    description: "data for account factory (only if account factory exists)",
  },
  {
    key: "callData",
    type: "string",
    description:
      "The data to pass to the sender during the main execution call",
  },
  {
    key: "callGasLimit",
    type: "bigint",
    description: "The amount of gas to allocate the main execution call",
  },
  {
    key: "verificationGasLimit",
    type: "bigint",
    description: "The amount of gas to allocate for the verification step",
  },
  {
    key: "preVerificationGas",
    type: "bigint",
    description: "Extra gas to pay the bunder",
  },
  {
    key: "maxFeePerGas",
    type: "bigint",
    description: "Maximum fee per gas (similar to EIP-1559 max_fee_per_gas)",
  },
  {
    key: "maxPriorityFeePerGas",
    type: "bigint",
    description:
      "Maximum priority fee per gas (similar to EIP-1559 max_priority_fee_per_gas)",
  },
  {
    key: "paymaster",
    type: "string",
    description:
      "Address of paymaster contract, (or empty, if account pays for itself)",
  },
  {
    key: "paymasterVerificationGasLimit",
    type: "string",
    description:
      "The amount of gas to allocate for the paymaster post-operation code",
  },
  {
    key: "paymasterPostOpGasLimit",
    type: "string",
    description:
      "The amount of gas to allocate for the paymaster post-operation code",
  },
  {
    key: "paymasterData",
    type: "string",
    description: "Data for paymaster (only if paymaster exists)",
  },
  {
    key: "signature",
    type: "string",
    description: "Data passed into the account to verify authorization",
  },
];
