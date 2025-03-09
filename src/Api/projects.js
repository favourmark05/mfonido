import thePixploreImg from '@/assets/images/thepixplore.png';


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
]
},
{
  image: thePixploreImg,
  url:'https://thepixplore.netlify.app/',
  title: 'Developer Page',
  description: '',
  technology: [
    'Angular',
    'Node.js',
    'Notion'
  ]
  },
  {
    image: thePixploreImg || './assets/images/thepixplore.png',
    url:'https://thepixplore.netlify.app/',
    title: 'Blog Page',
    description: '',
    technology: [
      'Angular',
      'Node.js',
      'Notion'
    ]
    }]
