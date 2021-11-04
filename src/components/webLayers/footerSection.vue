<template>
  <div>
      <footer class="footer">
          <h4>MfonidoMark &copy; {{ new Date().getFullYear() }} made with Vuejs - firebase and Netlify</h4>
          <img src="../../assets/logo1.png" alt="" srcset="" class="footer-logo">
      </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer{
    background-color: rgba(0, 0, 0, 0.363);
    text-align: center;
    color: white;
}
.footer-logo{
    width: 200px;
}
</style>
