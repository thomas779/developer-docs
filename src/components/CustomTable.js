import React from "react";
import Table from "./Table";

export default function ChainTable({ items }) {
  return (
    <Table
      items={items}
      leftHeading="Network"
      rightHeading="Gas Faucet"
      centerHeading="Chain ID"
      renderLeftItem={(item) => (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start center",
          }}
        >
          <img
            src={item.logo}
            style={{
              width: "25px",
              marginRight: "10px",
            }}
          />
          <span>{item.network}</span>
        </div>
      )}
      renderRightItem={(item) => <span>{item.faucet}</span>}
      renterCenterItem={(item) => <span>{item.chainId}</span>}
    />
  );
}

export function BundlerEndPointTable({ items }) {
  return (
    <Table
      items={items}
      leftHeading="Network"
      rightHeading="RPC address"
      centerHeading="Chain ID"
      farRightHeading="Type"
      renderLeftItem={(item) => (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start center",
          }}
        >
          <img
            src={item.logo}
            style={{
              width: "25px",
              marginRight: "10px",
            }}
          />
          <span>{item.network}</span>
        </div>
      )}
      renderRightItem={(item) => <a>{item.address}</a>}
      renterCenterItem={(item) => <span>{item.chainId}</span>}
      renderFarRightItem={(item) => <span>{item.type}</span>}
    />
  );
}

export function RpcRequestTable({ items }) {
  return (
    <Table
      items={items}
      leftHeading="Key"
      centerHeading="Value Type"
      rightHeading="Description"
      renderLeftItem={(item) => (
        <code>
          <font color="#22c916"> {item.key}</font>
        </code>
      )}
      renterCenterItem={(item) => (
        <code>
          <font color="#e25894">
            {" "}
            {item.type}
          </font>
        </code>
      )}
      renderRightItem={(item) => <span>{item.description}</span>}
    />
  );
}

export function SdkParamsTable({ items }) {
  return (
    <Table
      items={items}
      leftHeading="Param Name"
      centerHeading="Param Type"
      rightHeading="Description"
      renderLeftItem={(item) => (
        <code>
          <font color="#22c916"> {item.key}</font>
        </code>
      )}
      renterCenterItem={(item) => (
        <code>
          <font color="#e25894">
            {" "}
            {item.type}
          </font>
        </code>
      )}
      renderRightItem={(item) => <span>{item.description}</span>}
    />
  );
}

export function PaymasterSupportedToken({ items }) {
  return (
    <Table
      items={items}
      leftHeading="Token"
      rightHeading="Address"
      renderLeftItem={(item) => (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start center",
          }}
        >
          <img
            src={item.logo}
            style={{
              width: "25px",
              marginRight: "10px",
            }}
          />
          <span>{item.token}</span>
        </div>
      )}
      renderRightItem={(item) => <a>{item.address}</a>}
    />
  );
}
