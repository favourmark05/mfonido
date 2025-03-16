<template>
  <div class="px-1 lg:px-40 md:px-30 mt-20 mb-20">
    <heading class="flex items-center space-x-4">
      <p class="text-blue-500">O2</p>
      <p
        class="text-xl lg:text-5xl md:text-4xl font-extrabold font-mono text-gray-600"
        style="font-weight: bolder"
      >
        Experience
      </p>
      <p class="w-35 lg:w-70 md:w-60 h-px bg-gray-700"></p>
    </heading>
    <p class="my-4 text-justify lg:max-w-335">
      Over the years, I’ve had the opportunity to work with dynamic teams across fintech,
      e-commerce, sports, logistics, and more. Each role has sharpened my technical skills,
      problem-solving abilities, and understanding of how technology drives business success. From
      crafting seamless frontend experiences to optimizing developer ecosystems, I’ve contributed to
      impactful projects that bridge user needs with technical excellence. Here’s a glimpse into my
      journey so far: 🌟
    </p>
    <Vue3Marquee :clone="true" :pause-on-hover="true">
      <img v-for="img in imgArray" :key="img" :src="img" class="h-15 flex justify-between p-2" />
    </Vue3Marquee>
  </div>
</template>

<script setup>
import { Vue3Marquee } from 'vue3-marquee'
const imgArray = [
  'https://sponsors.vuejs.org/images/vueschool.avif',
  'https://sponsors.vuejs.org/images/vehikl.avif',
  'https://sponsors.vuejs.org/images/dronahq.avif',
]
</script>
