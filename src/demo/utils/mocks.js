import GitHubWithIcon from './icons/github-white.svg';
import FacebookIcon from './icons/facebook.png';
import TODOvue from './icons/todovue.png';

import Default from './demos/default.vue?raw';

const config = {
  brand: {
    logo: 'https://res.cloudinary.com/denj4fg7f/image/upload/v1766199952/logo_ohpadg.png', // Optional
    url: '/'
  },
  version: 'v2.4.0',
  navigation: [
    {
      title: 'Product',
      items: [
        { label: 'Features', url: '/#' },
        { label: 'Pricing', url: '/#' },
        { label: 'Showcase', url: '/#' }
      ]
    },
    {
      title: 'Resources',
      items: [
        { label: 'Documentation', url: '/#' },
        { label: 'API Reference', url: '/#' },
        { label: 'Community', url: '/#' }
      ]
    },
    {
      title: 'Company',
      items: [
        { label: 'About Us', url: '/#' },
        { label: 'Blog', url: '/#' },
        { label: 'Careers', url: '/#' }
      ]
    }
  ],
  social: [
    {
      label: 'GitHub',
      url: 'https://github.com/TODOvue',
      iconUrl: GitHubWithIcon // Icon library class (e.g. FontAwesome, UnoCSS)
    },
    {
      label: 'Facebook',
      url: 'https://facebook.com',
      iconUrl: FacebookIcon
    },
    {
      label: 'TODOvue',
      url: 'https://todovue.blog',
      iconUrl: TODOvue
    }
  ],
  legal: [
    { label: 'Privacy', url: '/#' },
    { label: 'Terms', url: '/#' },
    { label: 'Cookies', url: '/#' }
  ],
  copyright: '© {year} TvFooter. All rights reserved.'
}

export const demos = [
  {
    id: 1,
    title: "TvFooter Default",
    description: "Default TvFooter component",
    propsData: {
      config,
    },
    html: Default,
  },
];
