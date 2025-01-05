import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'en-US',
  title: 'Doomsday Production',
  description: 'Advanced Black Hat Compilation & Automation Tools',
  themeConfig: {
    nav: [
      { text: 'Getting Started', link: '/Getting_Started' },
      { text: 'Bootcamp', link: '/bootcamp/overview', collapsed: true },
      { text: 'Membership', link: '/content/Membership', collapsed: true },
      { text: 'Guide Styles', link: '/guides/styles/cyber' },
    ],

    sidebar: [
      {
        text: '🎨 Bootcamp',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/bootcamp/overview' },
          { text: 'Tools Setup', link: '/bootcamp/tools' },
          { text: 'Carding', link: '/bootcamp/carding' },
          { text: 'Stealer Logs', link: '/bootcamp/stealer-logs' },
          { text: 'Config Collection', link: '/bootcamp/configs' },
          { text: 'Advanced', link: '/bootcamp/advanced' },
        ],
      },
      {
        text: '📝 Membership Info',
        collapsed: true,
        items: [
          { text: 'Membership', link: '/content/Membership' },
          { text: 'Limitations', link: '/content/Limitations' },
        ],
      },
      {
        text: '🎯 Basic Guides',
        collapsed: true,
        items: [
          { text: 'URL Anatomy', link: '/interactive/url-anatomy' },
          { text: 'Cookies', link: '/guides/cookies' },
        ],
      },
      {
        text: '🎭 Programs & Configs',
        collapsed: true,
        items: [
          { text: 'Bullet Softwares', link: '/programs/bullet-softwares' },
          {
            text: 'Browser Automation Studio',
            link: '/programs/browser-automation',
          },
          { text: 'BL Tools', link: '/programs/bl-tools' },
        ],
      },
      {
        text: '📚 Example Guides',
        collapsed: true,
        items: [
          {
            text: '🛒 Shopping',
            collapsed: true,
            items: [
              { text: 'Pop Market', link: '/guides/shopping/guide-1' },
              { text: 'LightInTheBox', link: '/guides/shopping/guide-2' },
              { text: 'ASPX', link: '/guides/shopping/guide-3' },
            ],
          },
          {
            text: '💳 E Gift Cards',
            collapsed: true,
            items: [
              { text: 'HelloFresh', link: '/guides/gift-cards/guide-1' },
              { text: 'Fanatics', link: '/guides/gift-cards/guide-2' },
              { text: 'MegaBonanza', link: '/guides/gift-cards/guide-3' },
            ],
          },
          {
            text: '💫 Tricks & Tips',
            collapsed: true,
            items: [
              { text: 'Token Dumping', link: '/guides/tricks/token-dumping' },
              { text: 'Dorking', link: '/guides/tricks/dorking' },
            ],
          },
        ],
      },
      {
        text: '🎨 Guide Styles',
        collapsed: true,
        items: [
          { text: 'Cyber Style', link: '/guides/styles/cyber' },
          { text: 'Neon Style', link: '/guides/styles/neon' },
          { text: 'Hologram Style', link: '/guides/styles/hologram' },
          { text: 'Glitch Style', link: '/guides/styles/glitch' },
          { text: 'Retro Style', link: '/guides/styles/retro' },
          { text: 'Minimal Style', link: '/guides/styles/minimal' },
          { text: 'Gradient Style', link: '/guides/styles/gradient' },
          { text: 'Futuristic Style', link: '/guides/styles/futuristic' },
        ],
      },
      {
        text: '🔐 Members Area',
        collapsed: true,
        items: [{ text: 'Database Search', link: '/admin/members' }],
      },
    ],
  },
  footer: {
    message: 'Advanced Black Hat Compilation & Automation Tools',
    copyright: '© 2024 Doomsday Production. All rights reserved.',
  },
});
