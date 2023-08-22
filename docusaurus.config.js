// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CANDIDE Labs',
  tagline: 'Building software for ERC-4337 Account Abstraction',
  url: 'https://docs.candide.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Candide Labs', // Usually your GitHub org/user name.
  projectName: 'dev-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/candidelabs/candide-docs/edit/master/website',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'blog',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'blog',
        showReadingTime: true,
        postsPerPage: 3,
        blogTitle: 'Engineering Blog',
        blogDescription: 'CANDIDE Engineering Blog',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: 'blog',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      image: 'img/logo/candide-logo-dark-wordmark.svg',
      announcementBar: {
        id: 'private_beta_paymaster',
        content:
          'We are rolling out a private beta for Candide Paymaster API. Save your spot. <button><a target="_blank" rel="noopener noreferrer" href="https://cal.com/candidelabs/30mins">Book meeting now</a></button>',
        backgroundColor: '#f0f6ff',
        textColor: '#091E42',
        isCloseable: false,
      },
      metadata: [{
        name:
          'twitter:card',
        content:
          'summary_large_image'
      },
      {
        name: 'keywords', 
        content:
          'account abstraction, erc-4337, bundler, paymaster, smart contract wallet, gas sponsorship',
      },
      ],
      navbar: {
        title: 'CANDIDE',
        logo: {
          alt: 'CANDIDE logo',
          src: 'img/logo-dark.png',
        },
        items: [
          {
            to: '/wallet/atelier-intro',
            position: 'left',
            label: 'Smart Wallets',
          },
          {
            to: '/dapps/getting-started',
            position: 'left',
            label: 'Dapps',
          },
          {
            to: '/blog',
            position: 'right',
            label: 'Blog',
          },
        ],
      },
      footer: {
        links: [
          {
            "title": "Github",
            "items": [
              {
                "label": "Smart Contract Accounts",
                "href": "https://github.com/candidelabs/CandideWalletContracts"
              },
              {
                "label": "Voltaire Bundler",
                "href": "https://github.com/candidelabs/voltaire"
              },
              {
                "label": "Mobile App",
                "href": "https://github.com/candidelabs/candide-mobile-app"
              },
            ],
          },
          {
            "title": "Contact",
            "items": [
              {
                "label": "Discord",
                "href": "https://discord.gg/Q8B6WJ2MvT"
              },
              {
                "label": "Twitter",
                "href": "https://twitter.com/candidelabs"
              },
              {
                "label": "hello@candidewallet.com",
                "href": "mailto:hello@candidewallet.com"
              },
            ]
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['solidity'],
      },
    }),
};

module.exports = config;
