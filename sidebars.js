/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure

  // But you can create a sidebar manually
  aaSideBar: [
    'account-abstraction/intro'
  ],
  dappsSideBar: [
    'dapps/getting-started',
    {
      type: 'category',
      collapsed: false,
      label: 'Guides',
      items: [
        'dapps/guides/sponsor-gas',
        'dapps/guides/batch-transactions',
        'dapps/guides/verify-signatures',
      ],
    },
  ],
  walletSideBar: [
    'wallet/atelier-intro',
    {
      type: 'category',
      label: 'Guides',
      collapsible: false,
      className: 'category-not-collapsible',
      items: [
        'wallet/guides/getting-started',
        'wallet/guides/send-gasless-tx',
        'wallet/guides/pay-gas-in-erc20',
        'wallet/guides/authentication',
        'wallet/guides/multisig',
        'wallet/guides/signing',
      ],
    },
    {
      type: 'category',
      label: 'Plugins',
      collapsible: false,
      className: 'category-not-collapsible',
      items: [
        'wallet/plugins/passkeys',
        'wallet/plugins/recovery-with-guardians'
      ],
    },
    {
      type: 'category',
      label: 'SDK Reference',
      collapsible: false,
      className: 'category-not-collapsible',
      items: [
        'wallet/abstractionkit/introduction',
        'wallet/abstractionkit/safe-account',
        'wallet/abstractionkit/bundler',
        'wallet/abstractionkit/paymaster',
        'wallet/abstractionkit/utilities',
      ],
    },
    {
      type: 'category',
      label: 'Paymaster',
      className: 'category-not-collapsible',
      collapsible: false,
      items: [
        'wallet/paymaster/tokens-supported',
        'wallet/paymaster/rpc-methods',
      ],
    },
    {
      type: 'category',
      label: 'Bundler',
      className: 'category-not-collapsible',
      collapsible: false,
      collapsed: false,
      items: [
        'wallet/bundler/rpc-endpoints',
        'wallet/bundler/rpc-methods',
      ],
    },
    {
      type: 'category',
      collapsible: false,
      className: 'category-not-collapsible',
      label: 'Technical Reference',
      items: [
        'wallet/technical-reference/chain-nuances',
        'wallet/technical-reference/deployments', 
        {
          type: 'category',
          label: 'Error Codes',
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'Bundler',
              collapsed: true,
              items: [
                'wallet/technical-reference/bundler-error-codes',
                'wallet/technical-reference/-32500-transaction-rejected-by-entrypoint-simulation',
                'wallet/technical-reference/-32501-transaction-rejected-by-paymaster',
                'wallet/technical-reference/-32502-transaction-rejected-by-opcode-validation',
                'wallet/technical-reference/-32503-useroperation-out-of-time-range',
                'wallet/technical-reference/-32504-paymaster-or-aggregator-throttled-or-banned',
                'wallet/technical-reference/-32505-stake-or-delay-too-low',
                'wallet/technical-reference/-32506-unsupported-aggregator',
                'wallet/technical-reference/-32507-invalid-siganture',
                'wallet/technical-reference/-32521-transaction-reverted',
                'wallet/technical-reference/-32602-invalid-useroperation',

              ],
            },
            {
              type: 'category',
              label: 'Entrypoint',
              collapsed: true,
              items: [
                'wallet/technical-reference/entrypoint-error-codes',
                'wallet/technical-reference/aa10-sender-already-constructed',
                'wallet/technical-reference/aa13-initCode-failed-or-oog',
                'wallet/technical-reference/aa14-initcode-must-return-sender',
                'wallet/technical-reference/aa15-initcode-must-create-sender',
                'wallet/technical-reference/aa20-account-not-deployed',
                'wallet/technical-reference/aa22-expired-or-not-due',
                'wallet/technical-reference/aa21-didnt-pay-prefund',
                'wallet/technical-reference/aa23-reverted-or-oog',
                'wallet/technical-reference/aa24-signature-error',
                'wallet/technical-reference/aa25-invalid-account-nonce',
                'wallet/technical-reference/aa30-paymaster-not-deployed',
                'wallet/technical-reference/aa31-paymaster-deposit-too-low',
                'wallet/technical-reference/aa32-paymaster-expired-or-not-due',
                'wallet/technical-reference/aa33-reverted-or-oog',
                'wallet/technical-reference/aa34-signature-error',
                'wallet/technical-reference/aa40-over-verificationgaslimit',
                'wallet/technical-reference/aa41-too-little-verificationgas',
                'wallet/technical-reference/aa50-postop-reverted',
                'wallet/technical-reference/aa51-prefund-below-actualgascost',
              ],
            },
          ],
        },
      ]
    },
    {
      type: 'category',
      label: 'Bundler (self-host)',
      collapsed: true,
      items: [
        'wallet/bundler/erc-4337-intro',
        'wallet/bundler/installation',
      ],
    },
  ]
};

module.exports = sidebars;
