<template>
  <div class="px-1 lg:px-40 md:px-30 mt-20 mb-20">
    <heading class="flex items-center space-x-4">
      <p class="text-blue-500">O3</p>
      <p
        class="text-xl lg:text-5xl md:text-4xl font-extrabold font-mono text-gray-600"
        style="font-weight: bolder"
      >
        A Glimpse Into What I’ve Created
      </p>
      <p class="w-35 lg:w-70 md:w-60 h-px bg-gray-700"></p>
    </heading>
    <p class="my-4 text-justify lg:max-w-335">
      Every project has a story! Here, you'll find a collection of work showcasing my passion for
      creating impactful digital experiences. Each project highlights the tools, frameworks, and
      programming languages I’ve mastered, like JavaScript, Vue.js, Angular, and Node.js. From sleek
      interfaces to innovative solutions, these projects reflect my growth, creativity, and
      dedication to solving real-world problems. Dive in and explore the stories behind the code! 🌟
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
      <a
        v-for="(project, index) in firstFourProjects"
        :key="index"
        :href="project.url"
        target="_blank"
        rel="noopener noreferrer"
        class="cursor-pointer flex flex-col sm:flex-row gap-4 hover:shadow-xl mx-auto hover:border-blue-500 border-r-4 border-transparent rounded-md px-2 py-2 transition-all duration-300 space-y-6 lg:max-w-220"
      >
        <img
          :src="project.image"
          :alt="project.title"
          class="w-full max-w-xs sm:w-70 h-40 object-cover rounded-lg"
        />
        <div class="flex-1 space-y-4">
          <p class="text-2xl font-bold text-white">{{ project.title }}</p>
          <p class="text-sm text-gray-600 max-w-140 text-justify">
            {{ project.description }}
          </p>
          <!-- <small class="text-gray-500 text-xs">⭐ Stars</small> -->
          <div class="flex flex-wrap gap-2 mt-1">
            <span
              v-for="tech in project.technology"
              :key="tech"
              class="inline-block px-2 py-1 bg-gray-800 text-blue-500 text-xs rounded-full whitespace-nowrap"
              >{{ tech }}</span
            >
          </div>
        </div>
      </a>
    </div>
    <div class="flex flex-col mx-auto text-center hover:underline decoration-blue-500 cursor-pointer mt-3 ">
      <router-link to="/catalog">
        <p>There are a lot more you know right?, Check Collections <span class="font-extrabold! text-blue-500">&rarr;</span> </p>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { projects } from '@/Api/projects.js'
const firstFourProjects = projects.slice(0,4)
</script>

<style>
</style>
