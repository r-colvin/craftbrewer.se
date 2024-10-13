// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Bryggeri Expressen',
  tagline: '... all aboard the brewery express',
  favicon: 'https://web.brewfather.app/svg/beer.svg',

  // Set the production url of your site here
  url: 'https://bryggeriexpressen.se',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/r-colvin/bryggeriexpressen.se',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      navbar: {
        title: 'Bryggeri Expressen',
        logo: {
          alt: 'Bryggeri Expressen-Logo',
          src: 'https://web.brewfather.app/svg/beer.svg',
        },
        items: [
          {
            href: 'https://github.com/r-colvin/bryggeriexpressen.ser',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
     /*tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },*/
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
