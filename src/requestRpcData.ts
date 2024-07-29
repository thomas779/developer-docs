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

export const addressToStateParameters = [
  {
    key: "balance",
    type: "bigint | undefined",
    description: "The balance of the address.",
  },
  {
    key: "nonce",
    type: "bigint | undefined",
    description: "The nonce of the address.",
  },
  {
    key: "code",
    type: "string | undefined",
    description: "The code associated with the address.",
  },
  {
    key: "state",
    type: "Dictionary<string> | undefined",
    description: "The state associated with the address.",
  },
  {
    key: "stateDiff",
    type: "Dictionary<string> | undefined",
    description: "The state difference associated with the address.",
  },
];

export const stateOverrideSetParameters = [
  {
    key: "key",
    type: "string",
    description: "The key for the state override set.",
  },
  {
    key: "value",
    type: "AddressToState",
    description: "The AddressToState value for the state override set.",
  },
];
