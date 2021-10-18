<template>
  <div>
      <section class="skills">
          <div class="skill-head">
              <h1 class="heading">
                  SKILL SET
              </h1>
          </div>
          <div class="contain">
              <div class="col">
                  <h3>STRUCTURE</h3>
                  <p>HTML5</p>
                  <hr>
                  <p>CSS3</p>
                  <hr>
                  <p>BOOTSTRAP</p>
                  <hr>
                  <p>TAILWIND</p>
                  <hr>
                  <p>SASS(SCSS)</p>
              </div>
              <div class="col">
                  <h3>LANGUAGES</h3>
                  <p>JAVASCRIPT</p>
                  <hr>
                  <p>C#</p>
                  <hr>
              </div>
              <div class="col">
                  <h3>FRAME WORKS</h3>
                  <p>VUEJS</p>
                  <hr>
                  <p>NUXTJS</p>
                  <hr>
                  <p>REACT</p>
                  <hr>
                  <p>NODEJS</p>
              </div>
              <div class="col">
                  <h3>TOOLS / LIBRARIES</h3>
                  <p>GIT/GITHUB</p>
                  <hr>
                  <p>NETLIFY</p>
                  <hr>
                  <p>HEROKU</p>
                  <hr>
                  <p>COREL DRAW</p>
                  <hr>
                  <p>FIREBASE</p>
                  <hr>
                  <p>AXIOS</p>
              </div>
          </div>
      </section>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.skills{
    height: 95vh;
  background-image: linear-gradient(
      to right,
      rgba(189, 61, 61, 0.575),
      rgba(206, 79, 79, 0.664)
    ),
    url("../../assets/home-office.jpg");
  background-size: cover;
  background-position: top;
  position: relative;
  transform: skewY(-3deg);
  margin-top: -10rem;
}
.heading{
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
  80%{
    transform: translateX(70px);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
}
.contain{
    display: grid;
    grid-template-columns: auto auto auto auto;
    text-align: center;
    transform: skewY(3deg);
}
.col{
    padding: 10px;
    background-color: white;
    width: 20vw;
    box-shadow: 0 1.5rem 8rem rgba(0, 0, 0, 0.9);
    border-radius: 1em;
    margin: 30px auto;
}
h3{
    color: rgba(206, 79, 79, 0.664);
    font-weight: 800;
}
p{
    font-weight: bolder;
}
.col:hover{
    transform: translateY(-30px);
    cursor: pointer;
    transition: all .7s ease-in-out;
}
hr{
    margin: 0 40px;
}
@media only screen and (max-width: 768px) {
    .contain{
        display: grid;
        grid-template-columns: auto auto;
    }
    .col{
    background-color: white;
    width: 40vw;
}
}
</style>
