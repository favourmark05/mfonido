<template>
  <header class="hero">
    <div class="logo-box">
      <img src="../../assets/logo1.png" alt="logo" class="logo" />
    </div>
    <div class="container">
      <h1 style="padding-bottom:40px">
        <span class="title-head">Mfonido Mark</span>
        <span class="title-head-sub">Software Developer (Front-end)</span>
      </h1>
      <a href="https://docs.google.com/document/d/1h3csuqWnbbMAzB0B20fwIy5V9Mh72QbUr6fiKBw8phM/edit?usp=sharing" download class="cv" target="_blank">DOWNLOAD RESUME</a>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    download () {
      const url = 'https://docs.google.com/document/d/1h3csuqWnbbMAzB0B20fwIy5V9Mh72QbUr6fiKBw8phM/edit?usp=sharing'
      window.location.href = url
      // EventTarget.blank
      // download
    }
  }
}
</script>

<style scoped>
.hero {
  height: 95vh;
  background-image: linear-gradient(
      to right,
      rgba(189, 61, 61, 0.575),
      rgba(206, 79, 79, 0.664)
    ),
    url("../../assets/header.jpg");
  background-size: cover;
  display: flex;
  background-position: top;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 85vh, 0 100%);
}
.container {
  color: white;
  text-align: center;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.logo-box {
  position: absolute;
  top: 20px;
  left: 20px;
}
.logo {
  height: 60px;
  cursor: pointer;
}
.title-head {
  display: block;
  font-size: 8vh;
  font-weight: 400;
  letter-spacing: 15px;
  animation-name: moveInLeft;
  animation-duration: 2s;
  /* backface-visibility: hidden; */
}
.title-head-sub {
  display: block;
  font-size: 2.5vh;
  font-weight: 400;
  letter-spacing: 7px;
  animation-name: moveInRight;
  animation-duration: 2s;
  /* backface-visibility: hidden; */
}
.cv {
  padding: 10px;
  border-radius: 1em;
  border: none;
  background-color: white;
  cursor: pointer;
  animation-name: moveInBottom;
  animation-duration: 3s;
  backface-visibility: hidden;
  text-decoration: none;
  color: black;
  box-shadow: 0 7px 5px rgba(58, 55, 55, 0.589), 0 3px 5px rgba(58, 55, 55, 0.589);
}
.cv:hover{
  background-color: black;
  color: red;
  border: 2px solid white;
}
@keyframes moveInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  80%{
    transform: translateX(70px);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
}
@keyframes moveInRight {
  0%{
    opacity: 0;
    transform: translateX(100px);
  }
  100%{
    opacity: 1;
    transform: translate(0);
  }
}
@keyframes moveInBottom {
  0%{
    opacity: 0;
    transform: translateY(100px);
  }
  100%{
    opacity: 1;
    transform: translate(0,0);
  }
}
</style>
