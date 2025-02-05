<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-900 text-white">
    <h1 class="text-sm font-bold text-center font-mono md:text-base lg:text-lg">
      <span class="flex justify-center items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-20 h-20 text-white" fill="currentColor">
        <path
          d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"
        />
      </svg>
      </span>
      <span>Welcome, <br> Good </span>
      <span
        v-for="(char, index) in animatedText"
        :key="index"
        :style="{ animationDelay: `${index * 0.3}s` }"
        class="opacity-0 inline-block animate-fadeInLetter"
      >
        {{ char }}
      </span>
    </h1>
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
