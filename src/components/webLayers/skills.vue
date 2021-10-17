<template>
  <div>
      <section class="skills">
          <div class="skill-head">
              <h1 class="heading">
                  SKILL SET
              </h1>
          </div>
          <div class="contain">
              <div class="col">1</div>
              <div class="col">2</div>
              <div class="col">3</div>
              <div class="col">4</div>
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
  transform: skewY(-7deg);
}
.heading{
    font-size: 3rem;
    font-weight: 700;
    color: white;
    letter-spacing: 1rem;
    animation-name: moveInLeft;
    text-align: center;
    animation-duration: 2s;
    transform: skewY(7deg);
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
    transform: skewY(7deg);
}
@media only screen and (max-width: 700px) {
    .contain{
        grid-template-columns: auto auto;
    }
}
.col{
    background-color: white;
    max-width: 300px;
    margin: 30px auto;
}
</style>