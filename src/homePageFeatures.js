export default [
    {
      title: 'Smart Accounts',
      rows: [
        {
          title: 'Guides',
          description: 'Step by step guides on how to create, customize and offer smart wallets for your users',
          to: './wallet/atelier-intro'
        },
        {
          title: 'Abstraction Kit',
          description: "A Typescript Library to easily build and send ERC-4337 UserOperations",
          to: './wallet/abstractionkit/introduction',
        },
        {
          title: 'Paymaster',
          description: 'Connect to an extensive network of third-party gas sponsors, with the most customizable gas policies.',
          to: './wallet/paymaster/rpc-methods',
        },
      ],
    },
    {
      title: 'Dapps',
      rows: [
        {
          title: 'Batch Transactions',
          description: 'Learn how to send a batch of transactions to a smart contract wallet',
          to: './dapps/guides/batch-transactions',
        },
      ],
    }
  ]