---
title: Signature Validation
description: Implement the standard way for any contracts to verify whether a signature on a behalf of a given contract is valid. This is possible via the implementation of a isValidSignature (hash, signature) function on the signing contract, which can be called to validate a signature.
image: /img/logo/candide-logo-dark-wordmark.svg
keywords: [signature validation, smart wallets, contract signatures, EIP-1271]
---
# Signature Validation

Smart Wallets rely on [EIP-1271](https://eips.ethereum.org/EIPS/eip-1271) standard for signature validation.

The EIP-1271 is a single function on a contract defined as:

```
function isValidSignature(
  bytes32 _hash,
  bytes memory _signature
) public view returns (bytes4 magicValue)
```
The first `_dataHash` argument accepts the hash of the message digest, and the second argument `_signature` is the signed payload returned by the wallet upon signing.

### Ethersjs v6 Example
First check if the user wallet is an EOA or a smart contract wallet:

```js
import { Contract, JsonRpcProvider, Wallet, hashMessage } from "ethers";

const jsonRpcNodeProvider = process.env.JSON_RPC_NODE_PROVIDER;
const chainId = BigInt(process.env.CHAIN_ID as string);
const provider = new JsonRpcProvider(jsonRpcNodeProvider, chainId);

export async function isSmartContract(address: string, provider: any) {
  try {
    const code = await provider.getCode(address);
    return code !== '0x';
  } catch (error) {
    console.error(error);
    return false;
  }
}

const isSmartContractWallet = isSmartContract(walletAddress);
```

Second, if `true`, you can use the `isValidSignature` method to validate the signature. This example validates a EIP-712 type data message

```js
// Wallet returns the message you asked them to sign previously
const signature = "0x5966aaa07d494059d70b5a94bb5085721e8937033c1d73b6380786d55bc815a832bb14d11ddc406512a1a27ebcbd7b7c4f0ce686c654a20b8c060cd925a81ec51c";

const walletAddress = "0xb8741a449d50ed0dcfe395287f85be152884c8d9";
const abiSmartWallet = ['function isValidSignature(bytes32 _dataHash, bytes calldata _signature) external view returns (bytes4)'];

const userAccountContract = new Contract(walletAddress, abiSmartWallet, provider);
const hashMessage = hashMessage("Hello World");

const returnValue = await userAccountContract.isValidSignature(hashMessage, signature);
console.log(returnValue, "If success, it will return a magic value 0x1626ba7e");
```