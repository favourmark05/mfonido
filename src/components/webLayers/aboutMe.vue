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
            <h3>My designs</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, natus! Et fugiat ex ab tempore neque voluptatum at
              vitae cumque!
            </p>
            <h3>My designs</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, natus! Et fugiat ex ab tempore neque voluptatum at
              vitae cumque!
            </p>
          </div>
          <div class="col-1">
            <div class="certificate">
                <img src="../../assets/cert.png" alt="cert1" class="certificate-photos cert1">
                <img src="../../assets/cert1.png" alt="cert2" class="certificate-photos cert2">
                <img src="../../assets/cert2.png" alt="cert3" class="certificate-photos cert3">
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.section-about {
  background-color: #f7f7f7;
  padding: 10rem 0;
  margin-top: -20vh;
}
.center-head {
  text-align: center;
}
.heading {
  font-size: 3rem;
  font-weight: 700;
  background-image: linear-gradient(
    to right,
    rgba(224, 17, 17, 0.575),
    rgb(255, 0, 0)
  );
  display: inline-block;
  -webkit-background-clip: text;
  color: transparent;
  text-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.555);
  animation-name: moveInRight;
  animation-duration: 3s;
  letter-spacing: 1rem;
  margin-bottom: 3rem;
}
.heading:hover {
  transform: skewY(2deg) skewX(15deg);
}
.contain {
  display: grid;
  grid-template-columns: 40% 70%;
  margin: 0 8vw;
}
@media only screen and (max-width: 700px){
    .contain{
        display: inline-block;
    }
    .section-about{
        padding-bottom: 20rem;
    }
    .certificate{
        margin-top: 10%;
        margin-left: 20%;
    }
    .cert3{
    left: 25%;
    top: 100px !important;
}
}
h3, p{
    margin-bottom: .5rem;
}
h3{
    font-size: 1.6rem;
    font-weight: 700;
}
p{
    font-size: 1rem;

}
.certificate-photos{
    width: 40%;
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.4);
    margin: 4px;
    border-radius: .5em;
    position: absolute;
    transition: all .2s;
}
.certificate{
    position: relative;
}
.cert1{
left: 10%;
top: -10px;
}
.cert2{
    left: 40%;
    top: 20px;
}
.cert3{
    left: 25%;
    top: 130px;
}
.cert1:hover{
    transform: scale(1.05);
    z-index: 10;
    border: 10px solid rgba(224, 17, 17, 0.775);
    padding: 5px;
}
.cert2:hover{
    transform: scale(1.05);
    z-index: 10;
    border: 10px solid rgba(224, 17, 17, 0.775);
    padding: 5px;
}
.cert3:hover{
    transform: scale(1.05);
    z-index: 10;
    border: 10px solid rgba(224, 17, 17, 0.775);
    padding: 5px;
}
.certificate:hover .certificate-photos:not(:hover){
    transform: scale(.8);
}
@keyframes moveInRight {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
}
</style>
