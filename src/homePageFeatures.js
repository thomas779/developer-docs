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
          description: "Safe modules for wallet providers to offer features to their end-users like Passkeys, account recovery and recurring transfers",
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
          description: 'Connect to the lighting-fast Voltaire Bundler to send ERC-4337 AA UserOperation.',
          to: './wallet/bundler/rpc-methods',
        },
      ],
    }
  ]