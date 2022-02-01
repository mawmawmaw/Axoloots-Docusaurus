// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const config = {
  title: 'Axoloots',
  tagline: '',
  url: 'https://docs.axoloots.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'mawmawmaw', // Usually your GitHub org/user name.
  projectName: 'Axoloots-Docusaurus', // Usually your repo name.

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/mawmawmaw/Axoloots-Docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/mawmawmaw/Axoloots-Docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-8ZQYCBTG9K',
        anonymizeIP: true,
      },
    ],
  ],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
  },
  themeConfig:
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'Axoloots Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo-white.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentación',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentación',
            items: [
              {
                label: 'Introducción a los Axoloots',
                to: '/docs/intro',
              },
              {
                label: 'Introducción a los Wetlands',
                to: '/docs/introduction-to-wetlands',
              },
              {
                label: 'Técnica de Regeneración',
                to: '/docs/regeneration-technique',
              },
              {
                label: 'Alcance del Proyecto de Regeneración',
                to: '/docs/scope-of-regeneration-project',
              },
              {
                label: 'Valor del Modelo de Atribución',
                to: '/docs/value-attribution-model',
              },
              {
                label: 'Referencias',
                to: '/docs/references',
              }
            ],
          },
          {
            title: 'Comunidad',
            items: [
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'Otros',
            items: [
              {
                label: 'XC Labs',
                href: 'https://xc-labs.com',
              },
              {
                label: 'Symbiotik',
                href: 'https://symbiotik.co',
              }
            ],
          },
        ],
        copyright: `Todos los derechos reservados © ${new Date().getFullYear()} Axoloots.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
