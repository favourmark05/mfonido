<template>
  <div>
    <section class="projects">
      <div class="p-heading">
        <h1>Projects</h1>
      </div>
      <div class="cards">
        <div class="card">
          <div class="project-container">
            <div class="content1">
              <img src="../../assets/projects/weather.png" alt="" srcset="" class="img-card">
            </div>
            <div class="content">
              <h3>WEATHER APP</h3>
              <p>A WEATHER APP</p>
              <a href="https://raffiaweatherapp.netlify.app/" target="_blank">Visit</a>
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
              <p>A Netflix Nigeria Clone</p>
              <a href="https://mfonido-netflixclone.netlify.app/" target="_blank">Visit</a>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="project-container">
            <div class="content1">
              <img src="../../assets/projects/oriona.png" alt="" srcset="" class="img-card">
            </div>
            <div class="content">
              <h3>ART GALLERY</h3>
              <p>An online Art GALLERY (Eccomerce)</p>
              <a href="https://orionaart.com/" target="_blank">Visit</a>
            </div>
          </div>
        </div>
      </div>
      <div class="link">
        <router-link to="/projects" class="more-link">
          View More
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
h3{
  color: rgba(206, 79, 79, 0.918);
}
.img-card{
  width: 100%;
  height: 50%;
}
.projects{
  margin-top: 6rem;
   margin-bottom: 6rem;
}
.cards {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}
.card {
  background-color: white;
  padding: 1rem;
  height: auto;
  width: auto;
  text-align: center;
  border-radius: 1em;
  box-shadow: 0 1.5rem 8rem rgba(0, 0, 0, 0.9);
}
.link{
  text-align: center;
}
.more-link{
  text-align: center;
  text-decoration: none;
  list-style-type: none;
  background-color: rgb(206, 79, 79);
  padding: 10px;
  color: white;
  border-radius: 1em;
  font-weight: 700;
}
.more-link:hover{
  background-color: rgb(207, 40, 40);
}
h1{
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  background-image: linear-gradient(
    to right,
    rgba(224, 17, 17, 0.575),
    rgb(255, 0, 0));
  -webkit-background-clip: text;
  color: transparent;
  text-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.555);
  animation-name: moveInRight;
  animation-duration: 3s;
  letter-spacing: 1rem;
}
.project-container{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}.content1{
  background-image:linear-gradient(
      to bottom right,
      rgba(90, 102, 45, 0.87),
      rgba(206, 79, 79, 0.918)
    );
  background-size: cover;
  height: 35vh;
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
@media only screen and (max-width: 438px){
  .card{
    /* max-width: 1300px; */
    /* width: 192px; */
  }
}
</style>
