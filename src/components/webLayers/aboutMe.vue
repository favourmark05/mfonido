<template>
  <div>
      <main>
          <section class="section-about">
              <div class="center-head">
                  <h2 class="heading">
                  About Me
              </h2>
              </div>
              <div class="contain">
                  <div class="col-1">
                      Text here
                  </div>
                  <div class="col-2">
                      text here also
                  </div>
              </div>
          </section>
      </main>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.section-about{
    background-color: #f7f7f7;
    padding: 12rem 0;
    margin-top: -20vh;
}
.center-head{
    text-align: center;
}
.heading{
    font-size: 3rem;
    font-weight: 700;
    background-image: linear-gradient(to right,rgba(189, 61, 61, 0.575),
      rgba(255, 0, 0, 0.842));
      display: inline-block;
      -webkit-background-clip: text;
      color: transparent;
      text-shadow: 0 7px 80px rgba(58, 55, 55, 0.589), 0 3px 5px rgba(58, 55, 55, 0.589);
      animation-name: moveInRight;
      animation-duration: 3s;
      letter-spacing: 1rem;
}
.heading:hover{
    transform: skewY(2deg) skewX(15deg)
}
.contain{
    max-width: 114rem;
    background-color: red!important;
    margin: 0 10vw;
    margin-bottom: 8rem;
    /* display: flex; */
}
.col-1{
    width: calc((100% - 8rem)/2);
    background-color: blue;
    margin-right: 8rem;
    float: left;
}
.col-2{
    background-color: white;
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

</style>
