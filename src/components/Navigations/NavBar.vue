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
          <a href="#" class="hover:underline block">About</a>
          <a href="#" class="hover:underline block">Tools</a>
          <a href="#" class="hover:underline block">Writing</a>
          <a href="#" class="hover:underline block">Contact</a>
          <button class="bg-black text-white px-4 py-2 rounded-full font-medium hover:bg-gray-800">
            Resume
          </button>
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
          <div class="flex items-center text-white space-x-2 cursor-pointer" @click.prevent="scrollToSection('mfonido-mark')">
            <div class="rounded-full bg-white w-6 h-6 flex items-center justify-center">
              <span class="text-blue-600 font-bold">B</span>
            </div>
            <span class="font-bold text-lg" >Mfonido Mark</span>
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
                @click.prevent="scrollToSection(item.section)"
                class="hover:underline cursor-pointer"
              >
                {{ item.label }}
              </a>
            </nav>
            <button
              class="bg-black text-white px-4 py-2 rounded-full font-medium hover:bg-gray-800"
            >
              <a href="https://drive.google.com/file/d/1EjMYQEV6Asdltezw19S-aLy9bSIaWNFA/view" target="_blank">Resume</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconBars from '../icons/IconJs.vue'
export default {
  component: {
    IconBars,
  },
  data() {
    return {
      isSidebarOpen: false,
      menuItems: [
        { id: 1, label: 'About', section: 'about-me' },
        { id: 2, label: 'Tools', section: 'tools' },
        { id: 3, label: 'Projects', section: 'projects' },
        { id: 4, label: 'Writing', section: 'writing' },
        { id: 5, label: 'Contact', section: 'contact' },
      ],
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen
    },
    scrollToSection(sectionId) {
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
      // el.scrollIntoView({ behavior: 'smooth' })
    },
  },
}
</script>

<style scoped>
/* Add transition styles for the sidebar */
.sidebar-enter-active,
.sidebar-leave-active {
  transition: transform 0.3s ease;
}

.sidebar-enter, .sidebar-leave-to /* .sidebar-leave-active in <2.1.8 */ {
  transform: translateX(-100%);
}
</style>
