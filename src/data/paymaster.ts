// Paymaster V2
export const pm_supportedEntryPointReturnParam = [
  {
    key: "entrypoint",
    type: "string",
    description: "EntryPoint Address that the paymaster is supporting",
  },
];

export const pm_sponsorUserOperationReturnParamsV06V02 = [
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

export const tokensParamatersV2 = [
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
    key: "exchangeRate",
    type: "string",
    description: "Exchange rate of token",
  },
  {
    key: "fee",
    type: "bigint",
    description: "Gas fee in unit of of the token",
  },
];

// Paymaster V3

// Common

export const candidePaymasterContext = [
  {
    key: "token",
    type: "string",
    description: "ERC20 token address. (optional)",
  },
];

export const tokensParamatersV3 = [
  {
    key: "name",
    type: "string",
    description: "Name of the ERC-20 Token",
  },
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
    key: "exchangeRate",
    type: "string",
    description: "Exchange rate of token",
  },
];

export const pm_supportedEntryPointsReturnParams = [
  {
    key: "entrypoints",
    type: "string[]",
    description: "The EntryPoint Addresses that the paymaster is supporting",
  },
];

// Entrypoint Version 0.6

export const paymasterMetadataReturnParametersV06 = [
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

export const pm_sponsorUserOperationReturnParamsV06 = [
  {
    key: "paymasterAndData",
    type: "string",
    description:
      "Paymaster address and data required to pass paymaster contract validation",
  },
  {
    key: "callGasLimit",
    type: "string?",
    description:
      "The amount of gas to allocate the main execution call. Optional return.",
  },
  {
    key: "verificationGasLimit",
    type: "string?",
    description:
      "The amount of gas to allocate for the verification step. Optional return.",
  },
  {
    key: "preVerificationGas",
    type: "string?",
    description:
      "The amount of gas to pay for to compensate the bundler for pre-verification execution and calldata. Optional return.",
  },
  {
    key: "maxFeePerGas",
    type: "string?",
    description:
      "Maximum fee per gas (similar to EIP-1559 max_fee_per_gas). Optional Return.",
  },
  {
    key: "maxPriorityFeePerGas",
    type: "string?",
    description:
      "Maximum priority fee per gas (similar to EIP-1559 max_priority_fee_per_gas). Optional Return",
  },
  {
    key: "sponsorMetadata",
    description: "Information about the Gas Policy Sponsor",
    type: [
      {
        key: "name",
        type: "string",
        description: "Name of Sponsor who is sponsoring the Gas Policy",
      },
      {
        key: "description",
        type: "string",
        description: "A short description of the sponsor",
      },
      {
        key: "url",
        type: "string",
        description: "Website of the Sponsor",
      },
      {
        key: "icons",
        type: "string[]",
        description:
          "Logo or Icon that the Sponsor is using to promote their Gas Policy",
      },
    ],
  },
];

// Entrypoint Version 0.7

export const paymasterMetadataReturnParametersV07 = [
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
    description: "Icons associated with the paymaster service",
  },
  {
    key: "address",
    type: "string",
    description: "Paymaster Contract Address",
  },
  {
    key: "sponsoredEventTopic",
    type: "string",
    description: "Emitted topic event if a paymaster is being used",
  },
  {
    key: "dummyPaymasterAndData",
    type: [
      {
        key: "paymaster",
        type: "string",
        description: "Address of paymaster contract",
      },
      { 
        key: "paymasterData",
        type: "string",
        description: "Data for paymaster",
      },
      {
        key: "paymasterVerificationGasLimit",
        type: "string",
        description: "The amount of gas to allocate for the paymaster validation code",
      },
      {
        key: "paymasterPostOpGasLimit",
        type: "string",
        description: "The amount of gas to allocate for the paymaster post-operation code",
      }
    ],
    description: "Dummy values to use for estimating user operation gas before sponsorship",
  },
];

export const pm_sponsorUserOperationReturnParamsV07 = [
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
    description: "Extra gas to pay the bunder",
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
