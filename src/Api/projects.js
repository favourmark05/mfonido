import thePixploreImg from '@/assets/images/thepixplore.png';
import developerImg from '@/assets/images/developer.png'
import blogImg from '@/assets/images/blogs.png'


export const projects = [{
image: thePixploreImg,
url:'https://thepixplore.netlify.app/',
title: 'PixPlore',
description: `Web app for visualizing personalized Spotify data. View your top artists, top tracks,
      recently played tracks, and detailed audio information about each track. Create and save
      new playlists of recommended tracks based on your existing playlists and more.`,
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
  description: `Web app for visualizing personalized Spotify data. View your top artists, top tracks,
            recently played tracks, and detailed audio information about each track. Create and save
            new playlists of recommended tracks based on your existing playlists and more.`,
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
    description: `Web app for visualizing personalized Spotify data. View your top artists, top tracks,
            recently played tracks, and detailed audio information about each track. Create and save
            new playlists of recommended tracks based on your existing playlists and more.`,
    technology: [
      'Angular',
      'Typescript',
      'Node.js',
      'Notion'
    ],
    company: 'Remita',
    year: 2024,
    linkText: 'blog.remita.net'
    }]
