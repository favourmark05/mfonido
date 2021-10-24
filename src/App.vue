<template>
  <div>
    <navigationBar />
    <router-view />
  </div>
</template>

<script>
import navigationBar from '@/components/navigationBar.vue'
export default {
  components: {
    navigationBar
  }
}
</script>

<style></style>
