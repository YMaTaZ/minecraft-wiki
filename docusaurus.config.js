// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Minecraft Wiki',
  tagline: '原版 Minecraft Java 各版本资料整理',
  favicon: 'img/favicon.ico',

  // 环境感知 URL 与 baseUrl
  url: 'https://ymataz.github.io',
  baseUrl: '/minecraft-wiki/',

  organizationName: 'ymataz',
  projectName: 'minecraft-wiki',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-Hans'],
    localeConfigs: {
      en: { label: 'English' },
      'zh-Hans': { label: '简体中文' },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/YMaTaZ/minecraft-wiki/tree/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
      disableSwitch: false,
    },
    navbar: {
  title: 'Minecraft Wiki',
  logo: {
    alt: 'Minecraft Wiki Logo',
    src: 'img/logo.svg',
  },
  items: [
    {
      to: '/docs/1.12/intro',
      label: 'Docs',
      position: 'left',
    },
    {
      type: 'localeDropdown',
      position: 'right',
    },
    {
      href: 'https://github.com/YMaTaZ/minecraft-wiki',
      label: 'GitHub',
      position: 'right',
    },
  ],
},

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Start Reading',
              to: '/docs/1.12/intro',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/YMaTaZ/minecraft-wiki',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Minecraft Wiki.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
