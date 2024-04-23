const createEnableModuleParams = [
  {
    key: "accountAddress",
    type: "string",
    description: "The target account address.",
  },
];

const createConfirmRecoveryParams = [
  {
    key: "accountAddress",
    type: "string",
    description: "The target account address.",
  },
  {
    key: "newOwners",
    type: "string[]",
    description: "The new owners' addresses.",
  },
  {
    key: "newThreshold",
    type: "number",
    description: "The new threshold for the safe.",
  },
  {
    key: "execute",
    type: "boolean",
    description: "Whether to auto-start execution of recovery.",
  },
];

const createdMultiConfirmRecoveryParams = [
  {
    key: "accountAddress",
    type: "string",
    description: "The target account address.",
  },
  {
    key: "newOwners",
    type: "string[]",
    description: "The new owners' addresses.",
  },
  {
    key: "newThreshold",
    type: "number",
    description: "The new threshold for the safe.",
  },
  {
    key: "signatures",
    type: "string[]",
    description: "The guardians' signatures.",
  },
  {
    key: "execute",
    type: "boolean",
    description: "Whether to auto-start execution of recovery.",
  },
];

const createExecuteRecoveryParams = [
  {
    key: "accountAddress",
    type: "string",
    description: "The target account address.",
  },
  {
    key: "newOwners",
    type: "string[]",
    description: "The new owners' addresses.",
  },
  {
    key: "newThreshold",
    type: "number",
    description: "The new threshold for the safe.",
  },
];

const createFinalizeRecoveryParams = [
  {
    key: "accountAddress",
    type: "string",
    description: "The target account address.",
  },
];

const createCancelRecoveryParams = [
  {
    key: "accountAddress",
    type: "string",
    description: "The target account address.",
  },
];

const createAddGuardianWithThresholdParams = [
  {
    key: "accountAddress",
    type: "string",
    description: "The target account address.",
  },
  {
    key: "guardianAddress",
    type: "string",
    description: "The guardian to add.",
  },
  {
    key: "threshold",
    type: "bigint",
    description: "The new threshold that will be set after addition.",
  },
];

const createRevokeGuardianWithThresholdParams = [
  {
    key: "accountAddress",
    type: "string",
    description: "The target account address.",
  },
  {
    key: "prevGuardianAddress",
    type: "string",
    description:
      "The previous guardian linking to the guardian in the linked list.",
  },
  {
    key: "guardianAddress",
    type: "string",
    description: "The guardian to revoke.",
  },
  {
    key: "threshold",
    type: "bigint",
    description:
      "The new threshold that will be set after execution of revokation.",
  },
];

const createChangeThresholdParams = [
  {
    key: "accountAddress",
    type: "string",
    description: "The target account address.",
  },
  {
    key: "threshold",
    type: "bigint",
    description:
      "The new threshold that will be set after execution of revokation.",
  },
];

const getRecoveryHashParams = [
  {
    key: "rpcUrl",
    type: "string",
    description: "The URL of the Ethereum RPC endpoint.",
  },
  {
    key: "accountAddress",
    type: "string",
    description: "The target account address.",
  },
  {
    key: "newOwners",
    type: "string[]",
    description: "The new owners' addresses.",
  },
  {
    key: "newThreshold",
    type: "number",
    description: "The new threshold for the safe.",
  },
  {
    key: "nonce",
    type: "bigint",
    description: "",
  },
];

const getRecoveryRequestParams = [
  {
    key: "rpcUrl",
    type: "string",
    description: "The URL of the Ethereum RPC endpoint.",
  },
  {
    key: "accountAddress",
    type: "string",
    description: "The target account address.",
  },
];

const getRecoveryApprovalsParams = [
  {
    key: "rpcUrl",
    type: "string",
    description: "The URL of the Ethereum RPC endpoint.",
  },
  {
    key: "accountAddress",
    type: "string",
    description: "The target account address.",
  },
  {
    key: "newOwners",
    type: "string[]",
    description: "The new owners' addresses.",
  },
  {
    key: "newThreshold",
    type: "number",
    description: "The new threshold for the safe.",
  },
];

const hasGuardianApprovedParams = [
  {
    key: "rpcUrl",
    type: "string",
    description: "The URL of the Ethereum RPC endpoint.",
  },
  {
    key: "accountAddress",
    type: "string",
    description: "The target account address.",
  },
  {
    key: "guardian",
    type: "string",
    description: "The guardian.",
  },
  {
    key: "newOwners",
    type: "string[]",
    description: "The new owners' addresses.",
  },
  {
    key: "newThreshold",
    type: "number",
    description: "The new threshold for the safe.",
  },
];

const isGuardianParams = [
  {
    key: "rpcUrl",
    type: "string",
    description: "The URL of the Ethereum RPC endpoint.",
  },
  {
    key: "accountAddress",
    type: "string",
    description: "The target account address.",
  },
  {
    key: "guardian",
    type: "string",
    description: "The address to check.",
  },
];

const guardiansCountParams = [
  {
    key: "rpcUrl",
    type: "string",
    description: "The URL of the Ethereum RPC endpoint.",
  },
  {
    key: "accountAddress",
    type: "string",
    description: "The target account address.",
  },
];

const thresholdParams = [
  {
    key: "rpcUrl",
    type: "string",
    description: "The URL of the Ethereum RPC endpoint.",
  },
  {
    key: "accountAddress",
    type: "string",
    description: "The target account address.",
  },
];

const getGuardiansParams = [
  {
    key: "rpcUrl",
    type: "string",
    description: "The URL of the Ethereum RPC endpoint.",
  },
  {
    key: "accountAddress",
    type: "string",
    description: "The target account address.",
  },
];

const nonceParams = [
  {
    key: "rpcUrl",
    type: "string",
    description: "The URL of the Ethereum RPC endpoint.",
  },
  {
    key: "accountAddress",
    type: "string",
    description: "The target account address.",
  },
];

const RecoveryRequestParams = [
  {
    key: "guardiansApprovalCount",
    type: "bigint",
    description: "The number of guardian approvals.",
  },
  {
    key: "newThreshold",
    type: "bigint",
    description: "The new threshold for the safe.",
  },
  {
    key: "executeAfter",
    type: "number",
    description: "Timestamp indicating when the execution can happen.",
  },
  {
    key: "newOwners",
    type: "string[]",
    description: "Array of new owners' addresses.",
  },
];

const sendEthCallRequestParams = [
  {
    key: "rpcUrl",
    type: "string",
    description: "The URL of the Ethereum RPC endpoint.",
  },
  {
    key: "ethCallTransaction",
    type: "EthCallTransaction",
    description: "The Ethereum call transaction object.",
  },
  {
    key: "blockNumber",
    type: "string | bigint",
    description: "The block number or 'latest' for the transaction.",
  },
];

export {
  createEnableModuleParams,
  createConfirmRecoveryParams,
  createdMultiConfirmRecoveryParams,
  createExecuteRecoveryParams,
  createFinalizeRecoveryParams,
  createCancelRecoveryParams,
  createAddGuardianWithThresholdParams,
  createRevokeGuardianWithThresholdParams,
  createChangeThresholdParams,
  getRecoveryHashParams,
  getRecoveryRequestParams,
  getRecoveryApprovalsParams,
  hasGuardianApprovedParams,
  isGuardianParams,
  guardiansCountParams,
  thresholdParams,
  getGuardiansParams,
  nonceParams,
  RecoveryRequestParams,
  sendEthCallRequestParams,
};
