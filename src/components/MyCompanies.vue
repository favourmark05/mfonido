<template>
  <div class="my-6">
    <Vue3Marquee
    :clone="true"
    :pause-on-hover="true"
    >
        <img
            v-for="img in imgArray"
            :key="img"
            :src="img"
            class="h-15 flex justify-between p-2"
        />
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
