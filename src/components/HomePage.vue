<script setup>
import NavBar from './Navigations/NavBar.vue'
import PageFooter from './Navigations/PageFooter.vue'
import HeroPage from './HeroPage.vue'
import AboutMe from './AboutMe.vue'
import MyExperience from './MyExperience.vue'
import MyTools from './MyTools.vue'
import MyProjects from './MyProjects.vue'
import SpeakingCommunity from './SpeakingCommunity.vue'
import OpenSource from './OpenSource.vue'
import MyWritings from './MyWritings.vue'
</script>

<template>
  <div class="home">
    <NavBar />
    <main>
      <div class="container">
        <HeroPage />
      </div>
      <AboutMe />
      <MyExperience />
      <MyTools />
      <MyProjects />
      <SpeakingCommunity />
      <OpenSource />
      <MyWritings />
    </main>
    <PageFooter />
  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
}
</style>
