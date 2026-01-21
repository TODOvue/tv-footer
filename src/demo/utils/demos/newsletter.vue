<template>
  <TvFooter :config="conf" @subscribe="handleSubscribe" />
</template>

<script setup>
import { TvFooter } from '@todovue/tv-footer'
import '@todovue/tv-footer/style.css'
import FacebookIcon from './utils/icons/facebook.png'
import GitHubWithIcon from "../icons/github-white.svg";
import TODOvue from "../icons/todovue.png";

const handleSubscribe = (email) => {
  console.log('Subscribe event received:', email);
  alert(`Subscribed with: ${email}`);
}

const conf = {
  newsletter: {
    title: 'Subscribe to our newsletter',
    description: 'Get the latest news and updates right to your inbox.',
    placeholder: 'Your email address',
    buttonText: 'Subscribe'
  },
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
      iconUrl: GitHubWithIcon // Icon library class (e.g. FontAwesome, UnoCSS) use /icon
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
</script>
