import thePixploreImg from '@/assets/images/thepixplore.png';
import developerImg from '@/assets/images/developer.png'
import blogImg from '@/assets/images/blogs.png'


export const projects = [{
image: thePixploreImg,
url:'https://thepixplore.netlify.app/',
title: 'PixPlore',
description: `A web app for searching and downloading high-quality images using the Unsplash API. Users can search for any image and explore a vast collection of stunning visuals. The app provides an intuitive interface to browse images, view details, and download the best available version with ease.`,
technology: [
  'vue3',
  'scss',
  'vite',
  'netlify',
  'pinia',
  'unsplash Api',
],
company: '-',
year: 2025,
linkText: 'thepixplore.netlify.app'
},
{
  image: developerImg,
  url:'https://developers.remita.net/',
  title: 'Developer Page',
  description: `A developer-focused web platform providing comprehensive documentation for Remita APIs. Developers can explore detailed guides, API references, authentication methods, request and response formats, and practical integration examples. The platform offers interactive code snippets, best practices, and troubleshooting resources to streamline the integration of Remita’s payment solutions into various applications.`,
  technology: [
    'Angular',
    'Typescript',
    'Node.js',
    'Notion'
  ],
  company: 'Remita',
  year: 2024,
  linkText: 'developers.remita.net'
  },
  {
    image: blogImg || './assets/images/thepixplore.png',
    url:'https://blog.remita.net/',
    title: 'Blog Page',
    description: `A dedicated blog platform for Remita, featuring insightful articles on fintech trends, payment solutions, API integrations, and industry best practices. Developers, businesses, and financial experts can explore in-depth guides, case studies, and updates on Remita’s products and services. The blog also provides tutorials, use cases, and expert opinions to help users maximize the potential of Remita’s payment ecosystem.`,
    technology: [
      'Angular',
      'Typescript',
      'Node.js',
      'Notion'
    ],
    company: 'Remita',
    year: 2024,
    linkText: 'blog.remita.net'
    },
  {
    image: blogImg || './assets/images/thepixplore.png',
    url:'http://online.cygnusspin.com/',
    title: 'Online Bet Platform',
    description: `A dedicated blog platform for Remita, featuring insightful articles on fintech trends, payment solutions, API integrations, and industry best practices. Developers, businesses, and financial experts can explore in-depth guides, case studies, and updates on Remita’s products and services. The blog also provides tutorials, use cases, and expert opinions to help users maximize the potential of Remita’s payment ecosystem.`,
    technology: [
      'Nuxtjs',
      'Pinia',
      'PrimeVue',
      'PrimeFlex'
    ],
    company: 'Cygnusspin',
    year: 2023,
    linkText: 'online.cygnusspin.com'
    },
  {
    image: blogImg || './assets/images/thepixplore.png',
    url:'https://rumuomasichurchofchrist.org/',
    title: 'Rumuomasi Church website',
    description: `A dedicated blog platform for Remita, featuring insightful articles on fintech trends, payment solutions, API integrations, and industry best practices. Developers, businesses, and financial experts can explore in-depth guides, case studies, and updates on Remita’s products and services. The blog also provides tutorials, use cases, and expert opinions to help users maximize the potential of Remita’s payment ecosystem.`,
    technology: [
      'vuejs',
      'vuex',
      'Bootstrap',
      'FireBase'
    ],
    company: 'Rumuomasi Church',
    year: 2023,
    linkText: 'rumuomasichurchofchrist.org'
    },
  ]
