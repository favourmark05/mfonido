<template>
  <div class="overflow-x-hidden">
    <WelcomeLoader v-if="loader" />
    <div class="px-5 lg:px-20 md:px-15" v-else>
      <NavBar />
      <HeroPage id="mfonido-mark"/>
      <AboutMe id="about-me"/>
      <MyTools id="tools"/>
      <MyProjects id="projects"/>
      <SocialAccount />
      <MyWritings id="writing"/>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import WelcomeLoader from './loader/WelcomeLoader.vue'
import NavBar from './Navigations/NavBar.vue'
import SocialAccount from './Navigations/SocialAccount.vue'
import HeroPage from './HeroPage.vue'
import AboutMe from './AboutMe.vue'
import MyTools from './MyTools.vue'
import MyProjects from './MyProjects.vue'
import MyWritings from './MyWritings.vue'

const loader = ref(true)
onMounted(() => {

  const hasVisited = sessionStorage.getItem('hasVisitedBefore')

  if (!hasVisited) {
    loader.value = true
    sessionStorage.setItem('hasVisitedBefore', 'true')

    setTimeout(() => {
      loader.value = false
    }, 5000)
  } else {
    loader.value = false
  }

  window.addEventListener('beforeunload', () => {
    sessionStorage.removeItem('hasVisitedBefore')
  })
})
</script>

<style scooped>
.content {
  padding-top: 100px;
}
</style>
