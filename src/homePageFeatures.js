export default [
    {
      title: 'AbstractionKit SDK',
      rows: [
        {
          title: 'Guides',
          description: 'Step by step guides on how to create, customize and offer Smart Wallets for your users',
          to: './wallet/atelier-intro'
        },
        {
          title: 'Account Recovery',
          description: "A Safe Module to easily allow designated guardians to assist in the recovery process, without compromising on self-custody or security.",
          to: './wallet/plugins/recovery-with-guardians/',
        },
        {
          title: 'Passkeys',
          description: "A Safe module allowing wallet developers to offer Safe Smart Accounts secured using Passkeys",
          to: './wallet/abstractionkit/introduction',
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