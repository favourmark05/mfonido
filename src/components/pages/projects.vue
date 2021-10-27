<template>
  <div>
    <div class="wrapper">
      <h1>All My Projects</h1>
      <div class="container cards">
        <div class="card">
          <div class="project-container">
            <div class="content1">
              <img src="../../assets/projects/oriona.png" alt="" srcset="" class="img-card">
            </div>
            <div class="content">
              <h3>ORIONA ART GALLERY</h3>
              <p>An online Art GALLERY (Eccomerce) where art works of various types are being sold, where artist and buyers can also communicate chat. Biult with <b>Vuejs, Boostrap,FireBase</b></p>
              <a href="https://orionaart.com/" target="_blank">Visit</a>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="project-container">
            <div class="content1">
              <img src="../../assets/projects/covid.png" alt="" srcset="" class="img-card">
            </div>
            <div class="content">
              <h3>COVID TRACKER</h3>
              <p>An online DataBase for tracking the Covid-19 Rates Globally and also to check the rate of a specific Country. Built with <b>Vujs, Tailwind and API from CovidApi.com</b></p>
              <a href="https://checkcovidupdate.netlify.app/" target="_blank">Visit</a>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="project-container">
            <div class="content1">
              <img src="../../assets/projects/ghost.png" alt="" srcset="" class="img-card">
            </div>
            <div class="content">
              <h3>WORD ENCRYPTING</h3>
              <p>A word and sentence Encrypting and Dycrypting App for sending secret messages across social media platform. Built with <b>HTML,CSS, JavaScript</b> </p>
              <a href="https://ghostmood.netlify.app/" target="_blank">Visit</a>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="project-container">
            <div class="content1">
              <img src="../../assets/projects/netflix.png" alt="" srcset="" class="img-card">
            </div>
            <div class="content">
              <h3>NETFLIX CLONE</h3>
              <p>A Netflix Nigeria Clone For viewing list of Movies available. Built with <b>Vuejs, Bootsrap and API from FreeApi.com</b></p>
              <a href="https://mfonido-netflixclone.netlify.app/" target="_blank">Visit</a>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="project-container">
            <div class="content1">
              <img src="../../assets/projects/src.png" alt="" srcset="" class="img-card">
            </div>
            <div class="content">
              <h3>STUDENT UNION WEBSITE</h3>
              <p>Obong University Official WebSite for the Student Union Goverment, Built with <b>HTML, CSS, JavaScript, Jquerry</b></p>
              <a href="https://srcobonguniversity.netlify.app/" target="_blank">Visit</a>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="project-container">
            <div class="content1">
              <img src="../../assets/projects/weather.png" alt="" srcset="" class="img-card">
            </div>
            <div class="content">
              <h3>WEATHER APP</h3>
              <p>A real Time weather App that tells the weather condition of a perticular region, Built  with <b>Vuejs, Css, axios and Api from weatherApi</b></p>
              <a href="https://raffiaweatherapp.netlify.app/" target="_blank">Visit</a>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="project-container">
            <div class="content1">
              <img src="../../assets/projects/geo.png" alt="" srcset="" class="img-card">
            </div>
            <div class="content">
              <h3>GEO TOURIST</h3>
              <p>A user landing page for Geo Tourist, a Travel Guide Company. Built with <b>Vuejs, Bootstrap</b></p>
              <a href="https://geotourist.netlify.app/" target="_blank">Visit</a>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="project-container">
            <div class="content1">
              <img src="../../assets/projects/pokemon.png" alt="" srcset="" class="img-card">
            </div>
            <div class="content">
              <h3>POKEMON DATABASE</h3>
              <p>A Pokemon DataBase for viewing all the type of Pokemon available and also check thier Features. Built with <b>React, Css, AXios API from PokemonApi</b></p>
              <a href="https://react-pokemon-mark.netlify.app/" target="_blank">Visit</a>
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
.img-card{
  width: 100%;
  height: 100%;
}
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
  height: 100%;
  text-align: center;
  border-radius: 1em;
  box-shadow: 0 1.5rem 8rem rgba(0, 0, 0, 0.9);
}
.content1{
  background-image:linear-gradient(
      to bottom right,
      rgba(90, 102, 45, 0.87),
      rgba(206, 79, 79, 0.918)
    );
  background-size: cover;
  height: 220px;
  background-blend-mode: screen;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 65%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
}
.content > p {
  text-align: left;
  padding: 5px;
  margin-bottom: 40px;
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
  color: rgba(206, 79, 79, 0.918);
}
h3{
  color: rgba(206, 79, 79, 0.918);
}
</style>
