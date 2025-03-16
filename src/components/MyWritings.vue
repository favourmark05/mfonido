<template>
  <div class="px-1 lg:px-40 md:px-30 mt-20 mb-20">
    <heading class="flex items-center space-x-4">
      <p class="text-blue-500">O4</p>
      <p
        class="text-xl lg:text-5xl md:text-4xl font-extrabold font-mono text-gray-600"
        style="font-weight: bolder"
      >
        Insights & Perspectives
      </p>
      <p class="w-35 lg:w-70 md:w-60 h-px bg-gray-700"></p>
    </heading>
    <p class="my-4 text-justify lg:max-w-335">
      Every piece of writing is a journey into ideas, experiences, and discoveries. Here, you’ll
      find a collection of articles that reflect my thoughts on technology, innovation, and the
      ever-evolving digital landscape. Whether it’s deep dives into frameworks, personal reflections
      on growth, or industry trends, each piece is crafted to inform, inspire, and spark
      conversation. Explore the words that shape my perspective! ✍🏽
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
      <a
        v-for="(writing, index) in firstFourWritings"
        :key="index"
        :href="writing.url"
        target="_blank"
        rel="noopener noreferrer"
        class="cursor-pointer flex flex-col sm:flex-row gap-4 hover:shadow-xl mx-auto hover:border-blue-500 border-r-4 border-transparent rounded-md px-2 py-2 transition-all duration-300 space-y-6 lg:max-w-220"
      >
        <img
          :src="writing.image"
          :alt="writing.title"
          class="w-full max-w-xs sm:w-35 sm:h-20 h-40 object-cover rounded-lg"
        />
        <div class="flex-1 space-y-4">
          <span>{{ writing.year }}</span>
          <p class="text-sm font-bold text-white">{{ writing.title }}</p>

        </div>
      </a>
    </div>
    <div
      class="flex flex-col mx-auto text-center hover:underline decoration-blue-500 cursor-pointer mt-3"
    >
      <router-link to="/catalog">
        <p>
          There are a lot more you know right?, Check Collections
          <span class="font-extrabold! text-blue-500">&rarr;</span>
        </p>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { writings } from '@/Api/writings.js'
const firstFourWritings = writings.slice(0,4)
</script>

<style>
</style>
