<template>
  <div>
      <footer class="footer">
          <div class="foot">
              <p> Mfonido Mark's Blog &copy; {{ new Date().getFullYear() }} made with Vuejs - firebase and Netlify</p>
              <img src="../../assets/logo1.png" alt="" srcset="" class="footer-logo">
          </div>
      </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer{
    background-color: gray;
    display: flex;
    justify-content: center;
}
.foot{
    color: white;
}
.footer-logo{
    width: 200px;
    text-align: center;
    margin-left: 150px;
}
p{
    /* padding-left: 25px; */
}
</style>
