export const paymasterMetadataParameters = [
  {
    key: "name",
    type: "string",
    description: "Paymaster Name",
  },
  {
    key: "description",
    type: "string",
    description: "A short description for the paymaster service",
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
      "Dummy value to use for estimating userop gas before sponsorship",
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
    type: "number",
    description: "Decimals of token",
  },
  {
    key: "fee",
    type: "bigint",
    description: "Gas fee in unit of of the token",
  },
  {
    key: "exchangeRate",
    type: "bigint",
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

export const pm_sponsorUserOperationWithGasReturnParams = [
  {
    key: "paymasterAndData",
    type: "string",
    description:
      "Paymaster address and data required to pass paymaster contract validation",
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

export const pm_sponsorUserOperationWithoutGasReturnParam = [
  {
    key: "paymasterAndData",
    type: "string",
    description:
      "Paymaster address and data required to pass paymaster contract validation",
  },
];

export const pm_supportedEntryPointReturnParam = [
  {
    key: "entrypoint",
    type: "string",
    description:
      "EntryPoint Address that the paymaster is supporting",
  },
];

export const jsonRpcErrorType = [
  {
    key: "code",
    type: "number",
    description: "JSON RPC error code",
  },
  {
    key: "message",
    type: "string",
    description: "JSON RPC error message description",
  },
];

export const bundlerJsonRpcErrorType = [
  {
    key: "code",
    type: "number",
    description: "Bundler RPC error code",
  },
  {
    key: "message",
    type: "string",
    description: "Bundler RPC error message description",
  },
];

export const sendUseroperationResponseType = [
  {
    key: "userOperationHash",
    type: "string",
    description:
      "The hash over the userOp (except signature), entryPoint and chainId",
  },
  {
    key: "bundler",
    type: "Bundler",
    description: "The Bundler class",
  },
  {
    key: "entrypointAddress",
    type: "string",
    description: "The entrypoint address where the useroperation got executed",
  },
  {
    key: "included()",
    type: "Promise<UserOperationReceiptResult | BundlerJsonRpcError>",
    description:
      "Waits for the user operation to be included onchain and returns the user operation receipt on success, or the bundler error on failture",
  },
];

export const candidePaymasterContext = [
  {
    key: "token",
    type: "string",
    description: "ERC20 token address. (optional)",
  },
];

export const addressToStateParameters = [
  {
    key: 'balance',
    type: 'bigint | undefined',
    description: 'The balance of the address.',
  },
  {
    key: 'nonce',
    type: 'bigint | undefined',
    description: 'The nonce of the address.',
  },
  {
    key: 'code',
    type: 'string | undefined',
    description: 'The code associated with the address.',
  },
  {
    key: 'state',
    type: 'Dictionary<string> | undefined',
    description: 'The state associated with the address.',
  },
  {
    key: 'stateDiff',
    type: 'Dictionary<string> | undefined',
    description: 'The state difference associated with the address.',
  },
];

export const stateOverrideSetParameters = [
  {
    key: 'key',
    type: 'string',
    description: 'The key for the state override set.',
  },
  {
    key: 'value',
    type: 'AddressToState',
    description: 'The AddressToState value for the state override set.',
  },
];
