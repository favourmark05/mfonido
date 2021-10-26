<template>
  <div>
    <div class="preview">
        <blogNav />
        <div class="container">
            <div class="row">
                na here all the preview go show
            </div>
        </div>
        <blogFooter/>
    </div>
  </div>
</template>

<script>
import blogNav from '@/components/blog/blogNav.vue'
import blogFooter from '@/components/blog/blogFooter.vue'
export default {
  name: 'articlePreview',
  components: {
    blogNav,
    blogFooter
  }
}
</script>

<style scoped>
.preview{
    background-color: rgb(29, 27, 27);
    height: 100%;
}
</style>
