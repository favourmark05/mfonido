
<template>
  <div>
      <section class="projects">
          <div class="section-heading">
              <h1>MY PROJECTS</h1>
          </div>
          <div class="projects-container">
              <div class="project-cards">
                  <div class="card">
                      <div class="card-side card-side-front">
                          front
                      </div>
                      <div class="card-side card-side-back back1">
                          back
                      </div>
                  </div>
              </div>
              <div class="project-cards">
                  <div class="card">
                      <div class="card-side card-side-front">
                          front
                      </div>
                      <div class="card-side card-side-back back2">
                          back
                      </div>
                  </div>
              </div>
              <div class="project-cards">
                  <div class="card">
                      <div class="card-side card-side-front">
                          front
                      </div>
                      <div class="card-side card-side-back back3">
                          back
                      </div>
                  </div>
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
.projects{
    padding-top: 150px;
    background-color: white;
    margin-top: -10vh;
}
.section-heading{
    text-align: center;
}
.projects-container{
display: grid;
grid-template-columns: auto auto auto;
text-align: center;
margin: auto 80px 80px;
}
.card{
position: relative;
}
.card-side{
    padding: 10px;
    width: 25vw;
    height: 40vh;
    color: white;
    border-radius: 1em;
    margin:auto;
    transition: all 1s ease;
    position: absolute;
    top: 0;
    left: 0;
    backface-visibility: hidden;
}
.card:hover .card-side-front{
transform: rotateY(-180deg);
}
.card:hover .card-side-back{
transform: rotateY(0);
}
.card-side-front{
background-color: rgba(206, 79, 79, 0.877);
}
.card-side-back{
transform: rotateY(180deg)
}
.back1{
background-image: linear-gradient(
      to bottom right,
      rgba(161, 189, 61, 0.87),
      rgba(206, 79, 79, 0.918)
    ) !important;
}
.back2{
background-image: linear-gradient(
      to bottom right,
      rgba(61, 106, 189, 0.575),
      rgb(7, 76, 204)
    ) !important;
}
.back3{
background-image: linear-gradient(
      to bottom right,
      rgba(61, 174, 189, 0.575),
      rgb(61, 174, 189)
    ) !important;
}
@media only screen and (max-width: 768px){
    .projects-container{
        grid-template-columns: auto;
    }
}
</style>
