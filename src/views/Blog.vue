<template>
  <div>
    <blogNav/>
    <blogContent/>
    <blogFooter/>
  </div>
</template>

<script>
// import hero from '@/components/webLayers/hero.vue'
import blogNav from '@/components/blog/blogNav.vue'
import blogContent from '@/components/blog/blogContent.vue'
import blogFooter from '@/components/blog/blogFooter.vue'
export default {
  components: {
    blogNav,
    blogContent,
    blogFooter
  }

}
</script>

<style>

</style>
