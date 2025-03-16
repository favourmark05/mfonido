<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-900 text-white">
    <h1 class="text-sm font-bold text-center font-mono md:text-base lg:text-lg">
      <span class="flex justify-center items-center space-x-2">
        <svg
          width="800px"
          height="800px"
          viewBox="0 0 24 24"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby="anchorIconTitle"
          stroke="#fff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
          color="#fff"
          class="w-20 h-20 text-white"
        >
          <title id="anchorIconTitle">Anchor</title>
          <path d="M12 20L12 7M9 10L15 10" />
          <circle cx="12" cy="5" r="2" />
          <path d="M20,14 C18.6666667,18 16,20 12,20 C8,20 5.33333333,18 4,14" />
        </svg>
      </span>
      <span
        >Welcome, <br />
        Good
      </span>
      <span
        v-for="(char, index) in animatedText"
        :key="index"
        :style="{ animationDelay: `${index * 0.3}s` }"
        class="opacity-0 inline-block animate-fadeInLetter"
      >
        {{ char }}
      </span>
    </h1>
    <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
  </div>
</template>

<script setup>
import { computed } from 'vue'

const getDayPeriod = () => {
  const hour = new Date().getHours()
  if (hour < 12) return 'Morning'
  if (hour < 18) return 'Afternoon'
  return 'Evening'
}

const dayOfTheDay = computed(() => getDayPeriod())
const animatedText = computed(() => dayOfTheDay.value.split(''))
</script>

<style>
@keyframes fadeInLetter {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInLetter {
  animation: fadeInLetter 0.5s ease-in-out forwards;
}
</style>
