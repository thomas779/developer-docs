---
title: RPC methods
description: A reference to the supported RPC methods by Voltiare ERC-4337 Bundler
image: "/img/erc4337-bundler.png"
---
# Bundler RPC methods

Voltaire Bundler exposes standard JSON-RPC API

:::info
Get started by getting bundler endpoints for your developement [here](./3-rpc-endpoints.mdx)
:::

## eth_ namespace

### Send User Operation

`eth_sendUserOperation` asks the bundler to sign and submit a User Operation

#### Request
```json
{
  "jsonrpc": "2.0",
  "id": 0,
  "method": "eth_sendUserOperation",
  "params": [
    {
      sender,
      nonce,
      initCode,
      callData,
      callGasLimit,
      verificationGasLimit,
      preVerificationGas,
      maxFeePerGas,
      maxPriorityFeePerGas,
      paymasterAndData,
      signature,
    },
    entrypointAddress,
  ]
}
```
#### Response
It returns the hash of the User Operation. In case of an error, it returns the error message.
```json
{
  "jsonrpc": "2.0",
  "id": 0,
  "result": "0x..." // UserOpHash
}
```

### Estimate User Operation Gas
`eth_estimateUserOperationGas` generates and returns an estimate of how much gas is necessary to allow the transaction to complete, given a `UserOperation`.

#### Request
```json
{
  "jsonrpc": "2.0",
  "id": 0,
  "method": "eth_estimateUserOperationGas",
  "params": [
    {
      sender,
      nonce,
      initCode,
      callData,
      callGasLimit,
      verificationGasLimit,
      preVerificationGas,
      maxFeePerGas,
      maxPriorityFeePerGas,
      paymasterAndData,
      signature,
    },
    entrypointAddress,
  ]
}
```

#### Response
It returns estimates for a UserOperation Gas parameters for `preVerificationGas`, `verificationGas`, and `callGasLimit`
```json
{
    "jsonrpc": "2.0",
    "id": 0,
    "result": {
        callGasLimit
        preVerificationGas,
        verificationGas,
    },
}
```

### Get User Operation by hash

`eth_getUserOperationByHash` returns a UserOperation by its hash returned from `eth_sendUserOperation`

#### Request
```json
{
  "jsonrpc": "2.0",
  "id": 0,
  "method": "eth_getUserOperationByHash",
  "params": [userOpHash, entrypointAddress]
}
```

#### Response
The method returns the full UserOperation object as well as the entrypoint address, the block number, the block hash, and transaction Hash.

### Get User Operation Receipt

`eth_getUserOperationReceipt` returns the receipt of a UserOperation by its hash returned from `eth_sendUserOperation`

#### Request
```json
{
  "jsonrpc": "2.0",
  "id": 0,
  "method": "eth_getUserOperationReceipt",
  "params": [userOpHash, entrypointAddress]
}
```

#### Response
```json
{
    "jsonrpc": "2.0",
    "id": 0,
    "result": {
        userOpHash,
        sender,
        nonce,
        paymaster,
        actualGasCost, // actual (gas price * gas used) of the user operation
        actualGasUsed, // actual gas used of the user operation
        success, // user operation revert status
        reason, // If reverted, user operation revert reason
        logs,
        receipt, // The TransactionReceipt object. Note that the returned TransactionReceipt is for the entire bundle, not only for this UserOperation
    }
}
```

### Get Chain ID

`eth_chainId` returns the chain ID of the current network

#### Request
```json
{
  "jsonrpc": "2.0",
  "id": 0,
  "method": "eth_chainId",
  "params": []
}
```

#### Response
```json
{
  "jsonrpc": "2.0",
  "id": 0,
  "result": "0x1", // Chain ID
}
```

### Get Supported EntryPoints

`eth_supportedEntryPoints` returns an array of the entryPoint addresses supported by the bundler

#### Request
```json
{
  "jsonrpc": "2.0",
  "id": 0,
  "method": "eth_supportedEntryPoints",
  "params": []
}
```

#### Response
```json
{
  "jsonrpc": "2.0",
  "id": 0,
  "result": ["0x00...", "0x01..."],
}
```











