import { stateOverrideSetParameters } from "../requestRpcData";
import {
  userOperationReturnParamsV06,
  userOperationParamsV07,
} from "./userOperation";

export const signerType = [
  {
    key: "Signer[]",
    type: "ECDSAPublicAddress | WebauthnPublicKey",
    description:
      "Signer type which can be either an ECDSA public address or a Webauthn public key",
  },
];
export const ecdsaSignatureType = [
  {
    key: "ECDSASignature",
    type: "string",
    description: "ECDSA signature represented as a string",
  },
];
export const webauthnSignatureDataType = [
  {
    key: "authenticatorData",
    type: "ArrayBuffer",
    description:
      "Binary data returned by the authenticator during the Webauthn process",
  },
  {
    key: "clientDataFields",
    type: "string",
    description: "Fields associated with the client's Webauthn request data",
  },
  {
    key: "rs",
    type: "[bigint, bigint]",
    description:
      "Array of two bigints representing the 'r' and 's' values of the signature",
  },
];

export const initCodeOverrides = [
  {
    key: "threshold?",
    type: "number",
    description:
      "Signature threshold, defines how many signatures are required. Default is 1.",
  },
  {
    key: "c2Nonce?",
    type: "bigint",
    description:
      "Create2 nonce used to generate different sender addresses from the same owners. Default is 0.",
  },
  {
    key: "entrypointAddress?",
    type: "string",
    description: "Address of the entry point for transactions or contracts.",
  },
  {
    key: "safe4337ModuleAddress?",
    type: "string",
    description: "Address of the Safe 4337 module.",
  },
  {
    key: "safeModuleSetupddress?",
    type: "string",
    description: "Address used for setting up the Safe module.",
  },
  {
    key: "safeAccountSingleton?",
    type: "SafeAccountSingleton",
    description:
      'Safe contract singleton address. Default is "0x29fcB43b46531BcA003ddC8FCB67FFE91900C762".',
  },
  {
    key: "safeAccountFactoryAddress?",
    type: "string",
    description:
      'Address of the Safe Factory. Default is "0x4e1DCf7AD4e460CfD30791CCC4F9c8a4f820ec67".',
  },
  {
    key: "multisendContractAddress?",
    type: "string",
    description:
      'Address of the Safe 4337 multisend contract. Default is "0xa581c4A4DB7175302464fF3C06380BC3270b4037".',
  },
  {
    key: "webAuthnSharedSigner?",
    type: "string",
    description: "Shared signer used for WebAuthn-based authentication.",
  },
  {
    key: "eip7212WebAuthnPrecompileVerifierForSharedSigner?",
    type: "string",
    description:
      "Verifier contract for WebAuthn precompile, related to the shared signer.",
  },
  {
    key: "eip7212WebAuthnContractVerifierForSharedSigner?",
    type: "string",
    description:
      "Contract verifier for WebAuthn-based shared signer, compliant with EIP-7212.",
  },
];

export const createInitCodeParamV2 = [
  {
    key: "owners",
    type: signerType,
    description:
      "Pass the owner(s) address(es) of the account. It can be a single owner account, a multi-sig, or a WebAuthn",
  },
  {
    key: "initCodeOverrides?",
    type: initCodeOverrides,
    description: "Override values to change the initialization default values",
  },
];

export const createInitCodeReturnV2 = [
  {
    key: "initCode",
    type: "string",
    description:
      "The initCode of the account, only needed if the account is not yet on-chain and needs to be created",
  },
];

export const createAccountAddressAndInitCodeParamV2 = [
  {
    key: "owners",
    type: signerType,
    description:
      "Pass the owner(s) address(es) of the account. It can be a single owner account, a multi-sig, or a WebAuthn",
  },
  {
    key: "initCodeOverrides?",
    type: initCodeOverrides,
    description: "Override values to change the initialization default values",
  },
];

export const createAccountAddressAndInitCodeReturnV2 = [
  {
    key: "account address",
    type: "string",
    description: "The Safe Account Address",
  },
  {
    key: "initcode",
    type: "string",
    description: "The initCode field in the userOperation",
  },
];

export const createFactoryAddressAndDataParamV3 = [
  {
    key: "owners",
    type: signerType,
    description:
      "Pass the owner(s) address(es) of the account. It can be a single owner account, a multi-sig, or a WebAuthn",
  },
  {
    key: "initCodeOverrides?",
    type: initCodeOverrides,
    description: "Override values to change the initialization default values",
  },
];

export const createFactoryAddressAndDataReturnV3 = [
  {
    key: "factory address",
    type: "string",
    description: "The Safe factory address",
  },
  {
    key: "factory data",
    type: "string",
    description: "The factory data",
  },
];

export const createInitializerCallDataParamV2 = [
  {
    key: "owners",
    type: signerType,
    description:
      "Pass the owner(s) address(es) of the account. It can be a single owner account, a multi-sig, or a WebAuthn",
  },
  {
    key: "overrides?",
    type: [
      {
        key: "safe4337ModuleAddress?",
        type: "string",
        description: "Address of the Safe 4337 module.",
      },
      {
        key: "safeModuleSetupddress?",
        type: "string",
        description: "Address used for setting up the Safe module.",
      },
      {
        key: "safeAccountSingleton?",
        type: "SafeAccountSingleton",
        description:
          'Safe contract singleton address. Default is "0x29fcB43b46531BcA003ddC8FCB67FFE91900C762".',
      },
      {
        key: "safeAccountFactoryAddress?",
        type: "string",
        description:
          'Address of the Safe Factory. Default is "0x4e1DCf7AD4e460CfD30791CCC4F9c8a4f820ec67".',
      },
      {
        key: "multisendContractAddress?",
        type: "string",
        description:
          'Address of the Safe 4337 multisend contract. Default is "0xa581c4A4DB7175302464fF3C06380BC3270b4037".',
      },
      {
        key: "webAuthnSharedSigner?",
        type: "string",
        description: "Shared signer used for WebAuthn-based authentication.",
      },
      {
        key: "eip7212WebAuthnPrecompileVerifierForSharedSigner?",
        type: "string",
        description:
          "Verifier contract for WebAuthn precompile, related to the shared signer.",
      },
      {
        key: "eip7212WebAuthnContractVerifierForSharedSigner?",
        type: "string",
        description:
          "Contract verifier for WebAuthn-based shared signer, compliant with EIP-7212.",
      },
    ],
    description: "Override values to change the initialization default values",
  },
];

export const createInitializerCallDataParamV3 = createInitializerCallDataParamV2;

export const createInitializerCallDataReturnV2 = [
  {
    key: "calldata",
    type: "string",
    description: "The initializer calldata",
  },
];

export const createInitializerCallDataReturnV3 = createInitializerCallDataParamV2;


export const smartAccountParameters = [
  {
    key: "accountAddress",
    type: "string",
    description: "The address of the smart account.",
  },
  {
    key: "proxyByteCode",
    type: "string",
    description: "The bytecode of the proxy.",
  },
  {
    key: "initializerFunctionSelector",
    type: "string",
    description: "The selector for the initializer function.",
  },
  {
    key: "initializerFunctionInputAbi",
    type: "string[]",
    description: "The ABI for the initializer function input.",
  },
  {
    key: "executorFunctionSelector",
    type: "string",
    description: "The selector for the executor function.",
  },
  {
    key: "executorFunctionInputAbi",
    type: "string[]",
    description: "The ABI for the executor function input.",
  },
];

export const createAccountAddressParam = [
  {
    key: "owners",
    type: signerType,
    description:
      "Pass the owner(s) address(es) of the account. It can be a single owner account, a multi-sig, or a WebAuthn",
  },
  {
    key: "initCodeOverrides",
    type: initCodeOverrides,
    description: "Override values to change the initialization default values",
  },
];

export const createAccountAddressReturn = [
  {
    key: "Smart Account Address",
    type: "string",
    description: "Smart Account Address",
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

export const initializeNewAccountParam = [
  {
    key: "owners",
    type: signerType,
    description:
      "Pass the owner(s) address(es) of the account. It can be a single owner account, a multi-sig, or a WebAuthn",
  },
  {
    key: "initCodeOverrides?",
    type: initCodeOverrides,
    description: "Override values to change the initialization default values",
  },
];

export const initializeNewAccountReturnV2 = [
  {
    key: "SafeAccount class",
    type: "SafeAccountV0_2_0",
    description:
      "An instance of the Safe V2 Account and the initialization parameters",
  },
];

export const initializeNewAccountReturnV3 = [
  {
    key: "SafeAccount class",
    type: "SafeAccountV0_3_0",
    description:
      "An instance of the Safe V3 Account and the initialization parameters",
  },
];

export const getUserOperationEip712HashParamV2 = [
  {
    key: "userOperation",
    type: userOperationReturnParamsV06,
    description: "UserOperation to hash",
  },
  {
    key: "chainId",
    type: "bigint",
    description: "target chain id",
  },
  {
    key: "overrides?",
    type: [
      {
        key: "validAfter?",
        type: "bigint",
        description: "Timestamp the signature will be valid after",
      },
      {
        key: "validUntil?",
        type: "bigint",
        description: "Timestamp the signature will be valid until",
      },
      {
        key: "entrypointAddress?",
        type: "string",
        description: "Target entrypoint. Defaults to EP v0.6",
      },
      {
        key: "safe4337ModuleAddress?",
        type: "string",
        description: "Defaults to official 4337 safe module address",
      },
    ],
    description: "Overrides for the default values",
  },
];

export const getUserOperationEip712HashReturnV2 = [
  {
    key: "userOperation",
    type: "string",
    description: "userOperation hash",
  },
];

export const getUserOperationEip712HashParamV3 = [
  {
    key: "userOperation",
    type: userOperationParamsV07,
    description: "UserOperation to hash",
  },
  {
    key: "chainId",
    type: "bigint",
    description: "target chain id",
  },
  {
    key: "overrides?",
    type: [
      {
        key: "validAfter?",
        type: "bigint",
        description: "Timestamp the signature will be valid after",
      },
      {
        key: "validUntil?",
        type: "bigint",
        description: "Timestamp the signature will be valid until",
      },
      {
        key: "entrypointAddress?",
        type: "string",
        description: "Target entrypoint. Defaults to EP v0.6",
      },
      {
        key: "safe4337ModuleAddress?",
        type: "string",
        description: "Defaults to official 4337 safe module address",
      },
    ],
    description: "Overrides for the default values",
  },
];

export const getUserOperationEip712HashReturnV3 = [
  {
    key: "userOperation",
    type: "string",
    description: "userOperation hash",
  },
];

export const metaTransactionType = [
  {
    key: "to",
    type: "string",
    description: "To address",
  },
  {
    key: "value",
    type: "BigNumberish",
    description: "value transfered if making a transfer",
  },
  {
    key: "data",
    type: "BytesLike",
    description: "callData",
  },
  {
    key: "operation",
    type: "Operation: enum",
    description: "Default to 0 for a Call. 1 for a Delegate Call. Optional",
  },
];

export const createAccountCallDataSingleTransactionReturn = [
  {
    key: "callData",
    type: "string",
    description:
      "CallData to be includes in the user operation to send a single transaction",
  },
];

export const createAccountCallDataBatchTransactionsReturn = [
  {
    key: "callData",
    type: "string",
    description:
      "CallData to be includes in the user operation to send a single transaction",
  },
];

export const createCallDataSingleTransactionWithPaymasterReturn = [
  {
    key: "callData",
    type: "BytesLike",
    description:
      "Calldata to be included in the user operation to send a single transaction with a Token Paymaster",
  },
];

export const createCallDataBatchTransactionWithPaymasterReturn = [
  {
    key: "callData",
    type: "BytesLike",
    description:
      "Calldata to be included in the user operation to send a batch of transactions with the Token Paymaster",
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

export const signerSignaturePair = [
  {
    key: "Signer[]",
    type: "ECDSAPublicAddress | WebauthnPublicKey",
    description:
      "Signer type which can be either an ECDSA public address or a Webauthn public key",
  },
  {
    key: "signature",
    type: "string",
    description: "signature",
  },
  {
    key: "isContractSignature",
    type: "boolean",
    description: "isContractSignature",
  },
];

export const stateOverrideSetType = [
  {
    key: "[address: string]",
    type: [
      {
        key: "balance",
        type: "bigint",
        description: "Override the balance of the address",
      },
      {
        key: "nonce",
        type: "bigint",
        description: "Override the nonce of the address",
      },
      {
        key: "code",
        type: "string",
        description: "Override the code of the address",
      },
      {
        key: "state",
        type: "Dictionary<string>",
        description: "Override the storage slots of the address",
      },
      {
        key: "stateDiff",
        type: "Dictionary<string>",
        description:
          "Apply state differences to the storage slots of the address",
      },
    ],
    description: "Overrides for a specific address",
  },
];

export const signerTypePairType = [
  {
    key: "SignerSignaturePair[]",
    type: signerSignaturePair,
    description: "Signature Pair",
  },
];

export const createBaseUserOperationOverrides = [
  {
    key: "nonce",
    type: "string",
    description: "Anti-replay parameter (see “Semi-abstracted Nonce Support” )",
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
    key: "callGasLimitPercentageMultiplier",
    type: "number",
    description:
      "Set the callGasLimitPercentageMultiplier instead of estimating gas using the bundler",
  },
  {
    key: "verificationGasLimitPercentageMultiplier",
    type: "number",
    description:
      "Set the verificationGasLimitPercentageMultiplier instead of estimating gas using the bundler",
  },
  {
    key: "preVerificationGasPercentageMultiplier",
    type: "number",
    description:
      "Set the preVerificationGasPercentageMultiplier instead of estimating gas using the bundler",
  },
  {
    key: "maxFeePerGasPercentageMultiplier",
    type: "number",
    description:
      "Set the maxFeePerGasPercentageMultiplier instead of querying the current gas price from the RPC node",
  },
  {
    key: "maxPriorityFeePerGasPercentageMultiplier",
    type: "number",
    description:
      "Set the maxPriorityFeePerGasPercentageMultiplier instead of querying the current gas price from the RPC node",
  },
  {
    key: "stateOverrideSetType",
    type: stateOverrideSetType,
    description: "Pass state overrides",
  },
  {
    key: "dummySignatures",
    type: signerTypePairType,
    description: "Provide dummy signatures for the operation",
  },
  {
    key: "webAuthnSharedSigner",
    type: "string",
    description: "Specify the WebAuthn shared signer",
  },
  {
    key: "webAuthnSignerFactory",
    type: "string",
    description: "Specify the WebAuthn signer factory",
  },
  {
    key: "webAuthnSignerSingleton",
    type: "string",
    description: "Specify the WebAuthn signer singleton",
  },
  {
    key: "eip7212WebAuthnPrecompileVerifier",
    type: "string",
    description: "Specify the EIP-7212 WebAuthn precompile verifier",
  },
  {
    key: "eip7212WebAuthnContractVerifier",
    type: "string",
    description: "Specify the EIP-7212 WebAuthn contract verifier",
  },
  {
    key: "safeModuleExecutorFunctionSelector",
    type: "SafeModuleExecutorFunctionSelector",
    description: "Specify the function selector for the safe module executor",
  },
  {
    key: "multisendContractAddress",
    type: "string",
    description: "Specify the multisend contract address",
  },
];

export const createUserOperationV6Overrides =
  createBaseUserOperationOverrides.concat({
    key: "initCode",
    type: "string",
    description:
      "The initCode of the account, only needed if the account is not yet on-chain and needs to be created",
  });

export const createUserOperationV7Overrides =
  createBaseUserOperationOverrides.concat(
    {
      key: "factory",
      type: "string",
      description:
        "Set the factory address instead of using the calculated value",
    },
    {
      key: "factoryData",
      type: "string",
      description: "Set the factory data instead of using the calculated value",
    }
  );

export const signUserOperationParam = [
  {
    key: "userOperation",
    type: "UserOperationV6 | UserOperationV7",
    description: "userOperation to sign",
  },
  {
    key: "privateKeys",
    type: "string[]",
    description: "private keys of owners/signers",
  },
  {
    key: "chainId",
    type: "bigint",
    description: "target chain id",
  },
  {
    key: "overrides?",
    type: [
      {
        key: "validAfter?",
        type: "bigint",
        description: "Timestamp the signature will be valid after",
      },
      {
        key: "validUntil?",
        type: "bigint",
        description: "Timestamp the signature will be valid until",
      },
    ],
    description: "overrides for the default values",
  },
];

export const signUserOperationReturn = [
  {
    key: "Signature field",
    type: "string",
    description:
      "UserOperation Signature with the data passed into the account along with the nonce during the verification step",
  },
];

export const sendUserOperationParam = [
  {
    key: "userOperation",
    type: "UserOperationV6 | UserOperationV7",
    description: "userOperation to send",
  },
  {
    key: "bundlerRpc",
    type: "string",
    description: "bundler rpc to send userOperation",
  },
];

export const sendUserOperationReturn = [
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

export const userOperationReceiptType = [
  {
    key: "blockHash",
    type: "string",
    description: "The hash of the block in which the transaction was included.",
  },
  {
    key: "blockNumber",
    type: "bigint",
    description:
      "The number of the block in which the transaction was included.",
  },
  {
    key: "from",
    type: "string",
    description: "The address that initiated the transaction.",
  },
  {
    key: "cumulativeGasUsed",
    type: "bigint",
    description:
      "The total amount of gas used in the block up to and including this transaction.",
  },
  {
    key: "gasUsed",
    type: "bigint",
    description: "The amount of gas used by this transaction.",
  },
  {
    key: "logs",
    type: "string",
    description: "Logs generated by the transaction.",
  },
  {
    key: "logsBloom",
    type: "string",
    description: "The bloom filter for the logs generated by the transaction.",
  },
  {
    key: "transactionHash",
    type: "string",
    description: "The unique hash of the transaction.",
  },
  {
    key: "transactionIndex",
    type: "bigint",
    description: "The index of the transaction within the block.",
  },
  {
    key: "effectiveGasPrice",
    type: "bigint",
    description:
      "The effective gas price for the transaction. This field is optional and may not be present in all receipts.",
  },
];

export const userOperationReceiptResultType = [
  {
    key: "userOpHash",
    type: "string",
    description: "The hash of the user operation.",
  },
  {
    key: "entryPoint",
    type: "string",
    description:
      "The address of the entry point contract that processed the operation.",
  },
  {
    key: "sender",
    type: "string",
    description: "The address of the sender of the user operation.",
  },
  {
    key: "nonce",
    type: "bigint",
    description: "The nonce of the user operation.",
  },
  {
    key: "paymaster",
    type: "string",
    description:
      "The address of the paymaster that paid for the gas of the user operation.",
  },
  {
    key: "actualGasCost",
    type: "bigint",
    description:
      "The actual gas cost incurred for executing the user operation.",
  },
  {
    key: "actualGasUsed",
    type: "bigint",
    description: "The actual amount of gas used for the user operation.",
  },
  {
    key: "success",
    type: "boolean",
    description: "Indicates whether the user operation was successful.",
  },
  {
    key: "logs",
    type: "string",
    description:
      "The logs produced during the execution of the user operation.",
  },
  {
    key: "receipt",
    type: userOperationReceiptType,
    description: "The detailed receipt of the user operation.",
  },
];

export const estimateUserOperationGasParam = [
  {
    key: "userOperation",
    type: "UserOperationV6 | UserOperationV7",
    description: "userOperation to send",
  },
  {
    key: "bundlerRpc",
    type: "string",
    description: "bundler rpc to send userOperation",
  },
  {
    key: "overrides?",
    type: [
      {
        key: "stateOverrideSet?",
        type: stateOverrideSetType,
        description: "Timestamp the signature will be valid after",
      },
      {
        key: "dummySignatures?",
        type: signerTypePairType,
        description: "Provide dummy signatures for the operation",
      },
    ],
    description: "overrides for the default values",
  },
];

export const safeModuleExecutorFunctionSelectorType = [
  {
    key: "executeUserOpWithErrorString",
    type: "0x541d63c8",
    description: "The MetaTransaction to create calldata for",
  },
  {
    key: "executeUserOp",
    type: "0x7bb37428",
    description: "The MetaTransaction to create calldata for",
  },
];

export const createAccountCallDataSingleTransactionParam = [
  {
    key: "metaTransaction",
    type: metaTransactionType,
    description: "The MetaTransaction to create calldata for",
  },
  {
    key: "safeModuleExecutorFunctionSelector",
    type: safeModuleExecutorFunctionSelectorType,
    description:
      "Safe has two executor functions executeUserOpWithErrorString and executeUserOp",
  },
];

export const createAccountCallDataBatchTransactionsParam = [
  {
    key: "metaTransaction[]",
    type: metaTransactionType,
    description: "The MetaTransaction to create calldata for",
  },
  {
    key: "safeModuleExecutorFunctionSelector",
    type: safeModuleExecutorFunctionSelectorType,
    description:
      "Safe has two executor functions executeUserOpWithErrorString and executeUserOp",
  },
];

export const formatEip712SignaturesToUseroperationSignatureParam = [
  {
    key: "signersAddresses",
    type: "string[]",
    description: "Provide dummy signatures for the operation",
  },
  {
    key: "signatures",
    type: "string[]",
    description: "Provide dummy signatures for the operation",
  },
  {
    key: "overrides?",
    type: [
      {
        key: "validAfter?",
        type: "bigint",
        description: "Timestamp the signature will be valid after",
      },
      {
        key: "validUntil?",
        type: "bigint",
        description: "Timestamp the signature will be valid until",
      },
    ],
    description: "overrides for the default values",
  },
];

export const formatEip712SignaturesToUseroperationSignatureReturn = [
  {
    key: "signature",
    type: "string",
    description: "The EIP-712 Signature",
  },
];
