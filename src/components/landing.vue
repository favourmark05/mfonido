<template>
  <div>
<hero/>
<aboutMe/>
<skills/>
<project/>
<blog/>
  </div>
</template>

<script>
import hero from '@/components/webLayers/hero.vue'
import aboutMe from '@/components/webLayers/aboutMe.vue'
import skills from '@/components/webLayers/skills.vue'
import project from '@/components/webLayers/project.vue'
import blog from '@/components/webLayers/blog.vue'
export default {
  components: {
    hero,
    aboutMe,
    skills,
    project,
    blog
  }

}
</script>

<style>

</style>
