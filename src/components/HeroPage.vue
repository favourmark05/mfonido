<template>
<div class="min-h-screen bg-gray-900 flex items-center justify-right ">
  <div class="text-left max-w-7xl lg:ml-50">
    <h1 class="text-gray-300 lg:text-9xl md:text-5xl text-5xl lg:font-extrabold md:font-bold mt-5">Mfonido Mark</h1>
    <h2 class="text-gray-600 lg:text-4xl md:text-2xl text-4xl font-bold mt-4">Frontend Engineer / Developer Advocate Engineer</h2>
    <p class="text-gray-400 lg:text-2xl md:text-lg text-lg mt-6 lg:max-w-3xl md:max-w-xl max-w-sm">
      I design and develop accessible, high-quality pixie-perfect digital experiences that enhance usability and engagement on the web.
    </p>
    <div class="mt-8">
      <a href="#" class="inline-block lg:px-6 md:px-6 px-3 py-3 text-white text-lg font-medium rounded hover:bg-gray-600 hover:text-white transition duration-300  opacity-50 glow-border" @click.prevent="scrollToSection('writing')">
        Check out my writings!
      </a>
    </div>
  </div>
</div>
</template>

<script>
export default {
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
  }
}
</script>

<style scoped>
.glow-border {
    position: relative;
    overflow: hidden;
    border-radius: 12px;
  }

  .glow-border::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 12px;
    padding: 3px;
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #0051ff, #7700ff, #ff00c3, #ff0000);
    background-size: 300% 300%;
    animation: glow 6s linear infinite;
    mask: linear-gradient(white 0 0) content-box, linear-gradient(white 0 0);
    mask-composite: exclude;
  }

  @keyframes glow {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
</style>
