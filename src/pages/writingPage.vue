<template>
  <div class="min-h-screen bg-gray-900 text-white p-8 sm:mx-30 sm:mt-30">
    <p @click.prevent="goBack" class="text-blue-500 cursor-pointer">&larr; Mfonido Mark</p>
    <h1 class="text-4xl font-bold mt-2 pb-5">All Writings</h1>

    <div class="mt-6 overflow-x-auto hidden md:block">
      <table class="w-full border-collapse text-left">
        <thead>
          <tr class="border-b border-gray-700 text-gray-400">
            <th class="py-2 px-4">Year</th>
            <th class="py-2 px-4">Title</th>
            <th class="py-2 px-4">Link</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(writing, index) in writings"
            :key="index"
            class="border-b border-gray-700 hover:bg-gray-800 transition"
          >
            <td class="py-3 px-4">{{ writing.year }}</td>
            <td class="py-3 px-4 font-semibold text-white">{{ writing.title }}</td>
            <td class="py-3 px-4">
              <a
                :href="writing.url"
                target="_blank"
                class="text-blue-400 hover:underline flex items-center"
              >
                {{ writing.linkText }}
                <span class="ml-1">↗</span>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Mobile View (Stacked Layout) -->
    <div class="md:hidden space-y-6">
        <div
          v-for="(project, index) in writings"
          :key="index"
          class="border-b border-gray-700 pb-4"
        >
          <p class="text-gray-400 text-sm">{{ project.year }}</p>
          <a
            :href="project.url"
            target="_blank"
            class="text-lg font-semibold text-white flex items-center hover:underline"
          >
            {{ project.title }} <span class="ml-1">↗</span>
          </a>
        </div>
      </div>
  </div>
</template>

<script setup>
import { writings } from '@/Api/writings.js'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => router.go(-1)

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>
