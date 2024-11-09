export default [
    {
      title: 'AbstractionKit',
      rows: [
        {
          title: 'Guides',
          description: 'Step by step guides on how to create, customize and offer Smart Wallets for your users',
          to: './wallet/atelier-intro'
        },
        {
          title: 'Plugins',
          description: "Safe modules including Passkeys, Account Recovery and Allowances",
          to: './wallet/plugins/passkeys/',
        },
      ],
    },
    {
      title: 'Infra API',
      rows: [
        {
          title: 'Paymaster',
          description: 'Connect to an extensive network of third-party gas sponsors, with the most customizable gas policies.',
          to: './wallet/paymaster/rpc-methods',
        },
        {
          title: 'Bundler',
          description: 'Connect to the Unified Bundler Mempool to send ERC-4337 AA UserOperations',
          to: './wallet/bundler/rpc-methods',
        },
      ],
    }
  ]