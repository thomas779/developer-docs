import React from "react";
import Table from "./Table";

export function BundlerEndPointTable({ items }) {
  return (
    <Table
      items={items}
      leftHeading="Network"
      rightHeading="RPC"
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
      renderRightItem={(item) => <a>{item.address}</a>}
      renderCenterItem={(item) => <span>{item.chainId}</span>}
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
