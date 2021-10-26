<template>
  <div>
    <div class="wrapper">
      <h1>All My Projects</h1>
      <div class="container cards">
        <div class="card">
          <div class="project-container">
            <div class="content1"></div>
            <div class="content">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, at!</p>
              <a href="#" target="_blank">Visit</a>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="project-container">
            <div class="content1"></div>
            <div class="content">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, at!</p>
              <a href="#" target="_blank">Visit</a>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="project-container">
            <div class="content1"></div>
            <div class="content">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, at!</p>
              <a href="#" target="_blank">Visit</a>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="project-container">
            <div class="content1"></div>
            <div class="content">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, at!</p>
              <a href="#" target="_blank">Visit</a>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="project-container">
            <div class="content1"></div>
            <div class="content">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, at!</p>
              <a href="#" target="_blank">Visit</a>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="project-container">
            <div class="content1"></div>
            <div class="content">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, at!</p>
              <a href="#" target="_blank">Visit</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footerSection/>
  </div>
</template>

<script>
import footerSection from '../webLayers/footerSection.vue'
export default {
  name: 'Projects',
  components: {
    footerSection
  }

}
</script>

<style scoped>
.cards {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: auto auto auto;
}
.card {
  background-color: white;
  padding: 1rem;
  height: auto;
  text-align: center;
  border-radius: 1em;
  box-shadow: 0 1.5rem 8rem rgba(0, 0, 0, 0.9);
}
.project-container{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}.content1{
  background-image:linear-gradient(
      to bottom right,
      rgba(90, 102, 45, 0.87),
      rgba(206, 79, 79, 0.918)
    ), url('../../assets/dp.jpg');
  background-size: cover;
  height: 210px;
  background-blend-mode: screen;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 65%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
}
.content > p {
  text-align: left;
  padding: 5px;
  margin-bottom: 10vh;
}
.content > a {
  list-style-type: none;
  text-decoration: none;
  text-align: right;
  background-color: rgb(206, 79, 79);
  padding: 2px 9px;
  border-radius: 1em;
  color: white;
}
.content > a:hover{
  background-color: rgb(207, 40, 40);
}
@media only screen and (max-width:1000px) {
  .cards{
    display: grid;
    grid-template-columns: auto auto;
  }
}
@media only screen and (max-width:758px) {
  .cards{
    display: grid;
    grid-template-columns: auto;
  }
}
h1{
  text-align: center;
}
</style>
