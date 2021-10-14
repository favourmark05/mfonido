<template>
  <header class="hero">
    <div class="logo-box">
      <img src="../../assets/logo1.png" alt="logo" class="logo">
    </div>
<div class="container">
  <h1>
    <span class="title-head">Mfonido Mark</span>
    <span class="title-head-sub">Software Developer (Front-end)</span>
  </h1>
  <button class="cv">DOWNLOAD RESUME</button>
</div>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
.hero{
  height: 95vh;
  background-image: linear-gradient(to right, rgba(189, 61, 61, 0.575), rgba(206, 79, 79, 0.664)),url('../../assets/header.jpg');
  background-size: cover;
  display: flex;
  background-position:top;
  position: relative;
  clip-path: polygon(0 0,100% 0,100% 85vh,0 100%);
}
.container{
  margin: auto;
  color: white;
  text-align: center;
}
.logo-box{
  position: absolute;
  top: 20px;
  left: 20px;
}
.logo{
  height: 60px;
  cursor: pointer;
}
.title-head{
  display: block;
  font-size: 10vh;
  font-weight: 400;
  letter-spacing: 15px;
}
.title-head-sub{
  display: block;
  font-size: 3vh;
  font-weight: 400;
  letter-spacing: 7px;
}
.cv{
  padding: 10px;
  border-radius: 1em;
  border: none;
  cursor: pointer;
}
</style>>
