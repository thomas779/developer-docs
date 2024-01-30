// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Candide',
  tagline: 'Building software for ERC-4337 Account Abstraction',
  url: 'https://docs.candide.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: true,

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
          // editUrl: 'https://github.com/candidelabs/dev-docs/edit/master/website',
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
        blogDescription: 'Candide Engineering Blog',
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
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      image: 'img/posters/atelier-meta.png',
      announcementBar: {
        id: 'private_beta_paymaster',
        content:
          'AbstractionKit now supports the Safe Account. Join our chat for dev support <button><a target="_blank" rel="noopener noreferrer" href="https://discord.gg/wxxP4ZhtbB">Join Discord</a></button>',
        backgroundColor: '#f0f6ff',
        textColor: '#000000',
        isCloseable: false,
      },
      metadata: [{
        name:
          'twitter:card',
        content:
          'summary_large_image',
      },
      {
        name: 'keywords', 
        content:
          'account abstraction, erc-4337, bundler, paymaster, smart contract wallet, gas sponsorship',
      },
      ],
      navbar: {
        title: 'Atelier',
        logo: {
          alt: 'Candide logo',
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
            to: 'https://dashboard.candide.dev',
            position: 'right',
            label: 'Dashboard',
          },
          {
            to: '/account-abstraction/intro',
            position: 'right',
            label: 'Learn AA',
          },
          {
            to: '/blog',
            position: 'right',
            label: 'Blog',
          },
        ],
      },
      algolia: {
        appId: 'IYPB8VHL3T',
        apiKey: 'f33da551293ed37d9539e857a94d18eb',
        indexName: 'candide',
        insights: true,
        contextualSearch: false,
        trailingSlash: true,
        // // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: 'external\\.com|domain\\.com',
  
        // // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        // replaceSearchResultPathname: {
        //   from: '/docs/', // or as RegExp: /\/docs\//
        //   to: '/',
        // },
  
        // // Optional: Algolia search parameters
        // searchParameters: {},
  
        // // Optional: path for search page that enabled by default (`false` to disable it)
        // searchPagePath: 'search',
  
        // //... other Algolia params
      },
      footer: {
        links: [
          {
            "title": "Github",
            "items": [
              {
                "label": "AbstractionKit",
                "href": "https://github.com/candidelabs/abstractionkit"
              },
              {
                "label": "Voltaire Bundler",
                "href": "https://github.com/candidelabs/voltaire"
              },
              {
                "label": "Account Recovery Contract",
                "href": "https://github.com/candidelabs/CandideWalletContracts/blob/main/contracts/modules/social_recovery/SocialRecoveryModule.sol"
              },
              {
                "label": "Mobile App",
                "href": "https://github.com/candidelabs/candide-mobile-app"
              },
            ],
          },
          {
            "title": "Support",
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
                "label": "team@candidelabs.com",
                "href": "mailto:team@candidelabs.com"
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
