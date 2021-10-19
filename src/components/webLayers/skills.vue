<template>
  <div>
      <div class="skills">
          <div class="skill-head">
        <h1 class="heading">
          SKILL SET
        </h1>
      </div>
          <div class="cards">
  <div class="card">
      <h3>STRUCTURE</h3>
            <p>HTML5</p>
            <hr />
            <p>CSS3</p>
            <hr />
            <p>BOOTSTRAP</p>
            <hr />
            <p>TAILWIND</p>
            <hr />
            <p>SASS(SCSS)</p>
  </div>
  <div class="card">
      <h3>LANGUAGES</h3>
            <p>JAVASCRIPT</p>
            <hr />
            <p>C#</p>
            <hr />
  </div>
  <div class="card">
      <h3>FRAME WORKS</h3>
            <p>VUEJS</p>
            <hr />
            <p>NUXTJS</p>
            <hr />
            <p>REACT</p>
            <hr />
            <p>NODEJS</p>
  </div>
  <div class="card">
      <h3>TOOLS / LIBRARIES</h3>
            <p>GIT/GITHUB</p>
            <hr />
            <p>NETLIFY</p>
            <hr />
            <p>HEROKU</p>
            <hr />
            <p>COREL DRAW</p>
            <hr />
            <p>FIREBASE</p>
            <hr />
            <p>AXIOS</p>
  </div>
</div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.skills {
  /* height: 90vh; */
  background-image: linear-gradient(
      to right,
      rgba(189, 61, 61, 0.575),
      rgba(206, 79, 79, 0.664)
    ),
    url("../../assets/home-office.jpg");
  background-size: cover;
  background-position: top;
  transform: skewY(-3deg);
  margin-top: -10rem;
}
.heading {
  font-size: 3rem;
  font-weight: 700;
  color: white;
  letter-spacing: 1rem;
  animation-name: moveInLeft;
  text-align: center;
  animation-duration: 2s;
  transform: skewY(3deg);
  padding: 10px;
}
@keyframes moveInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  80% {
    transform: translateX(70px);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
}
.cards {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  transform: skewY(3deg);

}
.card {
  background-color: white;
  padding: 1rem;
  height: auto;
  text-align: center;
  border-radius: 1em;
  box-shadow: 0 1.5rem 8rem rgba(0, 0, 0, 0.9);
}
h3{
    color: rgba(206, 79, 79, 0.664);
    font-weight: 800;
}
p{
    font-weight: bolder;
}
.card:hover{
    transform: translateY(-30px);
    cursor: pointer;
    transition: all .7s ease-in-out;
}
hr{
    margin: 0 40px;
}
</style>
