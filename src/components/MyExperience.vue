<template>
  <div class="px-1 lg:px-40 md:px-30 mt-20 mb-20">
    <header class="flex items-center space-x-4">
      <p class="text-blue-500">O2</p>
      <p
        class="text-xl lg:text-5xl md:text-4xl font-extrabold font-mono text-gray-600"
        style="font-weight: bolder"
      >
        Experience
      </p>
      <p class="w-35 lg:w-70 md:w-60 h-px bg-gray-700"></p>
    </header>
    <p class="my-4 text-justify lg:max-w-335">
      Over the years, I’ve had the opportunity to work with dynamic teams across fintech,
      e-commerce, sports, logistics, and more. Each role has sharpened my technical skills,
      problem-solving abilities, and understanding of how technology drives business success. From
      crafting seamless frontend experiences to optimizing developer ecosystems, I’ve contributed to
      impactful projects that bridge user needs with technical excellence. Here’s a glimpse into my
      journey so far: 🌟
    </p>
    <Vue3Marquee :clone="true" :pause-on-hover="true">
      <div class="card p-2" v-for="img in imgArray" :key="img">
        <a :href="img.url" target="_blank" rel="noopener noreferrer">
          <img
            :src="img.img"
            class="h-30 w-50 object-contain rounded-lg grayscale hover:grayscale-0 transition duration-300"
          />
          <p class="text-center text-sm font-semibold">{{ img.title }}</p>
        </a>
      </div>
    </Vue3Marquee>
  </div>
</template>

<script setup>
import { Vue3Marquee } from 'vue3-marquee'
const imgArray = [
  {
    url: 'https://remita.net/',
    img: '/experience/remita-logo.jpg',
    title: 'Remita',
  },
  {
    url: 'https://cygnusspin.com/',
    img: '/experience/cygnusspin.png',
    title: 'Cygnusspin',
  },
  {
    url: 'https://croxxtalent.com/',
    img: '/experience/croxxtalent_logo.png',
    title: 'Croxxtalent',
  },
  {
    url: 'https://scelloo.com/',
    img: '/experience/scelloo_cover.jpeg',
    title: 'Scelloo',
  },
  {
    url: 'https://sellersmart.ng/',
    img: '/experience/sellersmart.png',
    title: 'SellersMart',
  },
]
</script>
