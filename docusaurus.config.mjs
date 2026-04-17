// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes as prismThemes } from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const { remarkPlugin: remarkGlossaryTerms } = require('docusaurus-plugin-glossary');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CraftBrewer',
  tagline: '... all aboard the brewery express',
  favicon: 'https://web.brewfather.app/svg/beer.svg',

  // Set the production url of your site here
  url: 'https://craftbrewer.se',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        indexDocs: true,
        docsRouteBasePath: '/',
      },
    ],
  ],

  plugins: [
    [
      'docusaurus-plugin-glossary',
      {
        glossaryPath: 'glossary/glossary.json',
        routePath: '/glossary',
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/r-colvin/craftbrewer.se',
          remarkPlugins: [
            [remarkGlossaryTerms, { glossaryPath: 'glossary/glossary.json', routePath: '/glossary', siteDir: __dirname }],
            remarkMath,
          ],
          rehypePlugins: [rehypeKatex],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'CraftBrewer',
        logo: {
          alt: 'CraftBrewer-Logo',
          src: 'https://github.com/user-attachments/assets/f8a7efd1-2721-49a4-af63-6b8c65eaf705',
        },
        items: [
          {
            href: 'https://github.com/r-colvin/craftbrewer.se',
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
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
};

export default config;
