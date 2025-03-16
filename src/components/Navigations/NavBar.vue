<script setup>
import { ref } from 'vue'
import IconTwitter from '../icons/IconTwitter.vue'
import IconLinkedin from '../icons/IconLinkedin.vue'
import IconMail from '../icons/IconMail.vue'

const isSidebarOpen = ref(false)
const isModalOpen = ref(false)
const menuItems = ref([
  { id: 1, label: 'About', section: 'about-me' },
  { id: 2, label: 'Tools', section: 'tools' },
  { id: 3, label: 'Projects', section: 'projects' },
  { id: 4, label: 'Writing', section: 'writing' },
  { id: 5, label: 'Contact', section: 'contact' },
])

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

const handleMenuClick = (section) => {
  if (section === 'contact') {
    isModalOpen.value = true
    isSidebarOpen.value = false
  } else {
    scrollToSection(section)
    isSidebarOpen.value = false
  }
}

const scrollToSection = (sectionId) => {
  const el = document.getElementById(sectionId)
  if (el) {
    const headerOffset = 100
    const elementPosition = el.getBoundingClientRect().top + window.scrollY
    const offsetPosition = elementPosition - headerOffset
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }
}

const closeModal = () => {
  isModalOpen.value = false
}
</script>

<template>
  <div>
    <!-- Mobile Sidebar Overlay -->
    <div
      v-if="isSidebarOpen"
      class="fixed inset-0 bg-blue-600 bg-opacity-10 opacity-85 z-50 sm:hidden"
      @click="toggleSidebar"
    ></div>

    <!-- Sidebar with Transition -->
    <transition name="sidebar">
      <div
        v-if="isSidebarOpen"
        class="fixed top-0 left-0 w-3/4 h-full bg-gray-900 text-white z-50 sm:hidden w-full"
      >
        <div class="flex justify-end p-4">
          <button @click="toggleSidebar" class="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              class="w-6 h-6 text-white-200"
              fill="currentColor"
            >
              <path
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
              />
            </svg>
          </button>
        </div>
        <nav class="space-y-6 p-4 text-center text-2xl">
          <a
            v-for="item in menuItems"
            :key="item.id"
            @click.prevent="handleMenuClick(item.section)"
            class="hover:underline block"
            >{{ item.label }}</a
          >
          <a
              href="https://drive.google.com/file/d/1EjMYQEV6Asdltezw19S-aLy9bSIaWNFA/view"
              target="_blank"
              class="relative px-5 py-2 rounded-xl font-medium text-white bg-black transition-all duration-300 hover:bg-gray-800 glow-border"
            >
              Resume
            </a>
        </nav>
      </div>
    </transition>

    <!-- Header for larger screens -->
    <div class="fixed top-0 left-0 p-2 mt-4 md:m-6 w-full sm:w-1/2 lg:w-2/4 rounded-full">
      <!-- Background Layer -->
      <div class="absolute inset-0 bg-blue-600 opacity-50 blur-sm border-xl rounded-full"></div>
      <!-- Content -->
      <div class="relative flex items-center justify-between p-1">
        <!-- Logo and Links -->
        <div class="flex items-center space-x-6">
          <!-- Logo -->
          <div
            class="flex items-center text-white space-x-2 cursor-pointer"
            @click.prevent="scrollToSection('mfonido-mark')"
          >
            <div class="rounded-full bg-white w-6 h-6 flex items-center justify-center">
              <span class="text-blue-600 font-bold">M</span>
            </div>
            <span class="font-bold text-lg">Mfonido Mark</span>
          </div>
        </div>
        <!-- Buttons and Mobile Toggle Button -->
        <div class="flex items-center space-x-4">
          <button @click="toggleSidebar" class="sm:hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              class="w-6 h-6 text-white-200"
              fill="currentColor"
            >
              <path
                d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
              />
            </svg>
          </button>
          <div class="hidden sm:flex items-center space-x-4">
            <!-- Navigation Links -->
            <nav class="sm:flex space-x-4 text-white px-2">
              <a
                v-for="item in menuItems"
                :key="item.id"
                @click.prevent="handleMenuClick(item.section)"
                class="hover:underline cursor-pointer"
              >
                {{ item.label }}
              </a>
            </nav>
            <a
              href="https://drive.google.com/file/d/1EjMYQEV6Asdltezw19S-aLy9bSIaWNFA/view"
              target="_blank"
              class="relative px-5 py-2 rounded-xl font-medium text-white bg-black transition-all duration-300 hover:bg-gray-800 glow-border"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>

    <transition name="fade">
      <div
        v-if="isModalOpen"
        @click="closeModal"
        class="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-md index"
      >
        <div
          class="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 w-[380px] relative text-center transform transition-all scale-100 hover:scale-105"
          @click.stop
        >
          <!-- Close Button -->
          <button
            @click="closeModal"
            class="absolute top-3 right-4 text-gray-500 dark:text-gray-300 hover:text-red-500 transition cursor-pointer"
          >
            <span>X</span>
          </button>

          <!-- Modal Header -->
          <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">Let's Connect!</h2>
          <p class="text-gray-600 dark:text-gray-400 text-sm mb-6">
            Choose a platform to reach out.
          </p>

          <!-- Contact Options -->
          <div class="flex justify-center gap-6">
            <!-- Twitter -->
            <a
              href="https://x.com/MfonidoMark"
              target="_blank"
              class="text-blue-700 cursor-pointer p-4 text-3xl transition hover:scale-110"
            >
              <IconTwitter />
            </a>

            <!-- LinkedIn -->
            <a
              href="https://linkedin.com/in/mfonido-mark-4baa42120/"
              target="_blank"
              class="text-blue-700 cursor-pointer p-4 text-3xl transition hover:scale-110"
            >
              <IconLinkedin />
            </a>

            <!-- Email -->
            <a
              href="mailto:mfonidomark@gmail.com"
              class="text-blue-700 cursor-pointer p-4 text-3xl transition hover:scale-110"
            >
              <IconMail />
            </a>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
/* Add transition styles for the sidebar */
.sidebar-enter-active,
.sidebar-leave-active {
  transition: transform 0.3s ease;
}

.sidebar-enter, .sidebar-leave-to /* .sidebar-leave-active in <2.1.8 */ {
  transform: translateX(-100%);
}
/* Glowing Animated Border */
.glow-border {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
}

.glow-border::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 12px;
  padding: 2px; /* Border thickness */
  background: linear-gradient(
    45deg,
    #ff0000,
    #ff7300,
    #fffb00,
    #48ff00,
    #00ffd5,
    #0051ff,
    #7700ff,
    #ff00c3,
    #ff0000
  );
  background-size: 300% 300%;
  animation: glow 6s linear infinite;
  mask: linear-gradient(white 0 0) content-box, linear-gradient(white 0 0);
  mask-composite: exclude;
}

@keyframes glow {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
/* Modal Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
.index {
  z-index: 9999999;
}
</style>
