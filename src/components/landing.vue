<template>
  <div>
<hero/>
<aboutMe/>
<skills/>
  </div>
</template>

<script>
import hero from '@/components/webLayers/hero.vue'
import aboutMe from '@/components/webLayers/aboutMe.vue'
import Skills from './webLayers/skills.vue'
export default {
  components: {
    hero,
    aboutMe,
    Skills
  }

}
</script>

<style>

</style>
