<template>
  <div>
    <!-- <hero/> -->
    <landing />
  </div>
</template>

<script>
// @ is an alias to /src
import landing from '@/components/landing.vue'
// import hero from '@/components/webLayers/hero.vue'

export default {
  name: 'Home',
  components: {
    landing
    // hero
  }
}
</script>
