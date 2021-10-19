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
              <div class="card-picture picture1">
              </div>
              <h4 class="card-heading">
                {{ headText }}
              </h4>
              <div class="card-details">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  natus repellendus eveniet a dolore quo, praesentium odit unde
                  modi voluptatum!
                </p>
              </div>
            </div>
            <div class="card-side card-side-back back1">
              <div class="card-link">
                <a href="#" target="_blank">visit</a>
              </div>
            </div>
          </div>
        </div>
        <div class="project-cards">
          <div class="card">
            <div class="card-side card-side-front">
              <div class="card-picture picture2">
              </div>
              <h4 class="card-heading">
                {{ headText }}
              </h4>
              <div class="card-details">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  natus repellendus eveniet a dolore quo, praesentium odit unde
                  modi voluptatum!
                </p>
              </div>
            </div>
            <div class="card-side card-side-back back2">
              <div class="card-link">
                <a href="#" target="_blank">visit</a>
              </div>
            </div>
          </div>
        </div>
        <div class="project-cards">
          <div class="card">
            <div class="card-side card-side-front">
              <div class="card-picture picture3"></div>
              <h4 class="card-heading">
                {{ headText }}
              </h4>
              <div class="card-details">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  natus repellendus eveniet a dolore quo, praesentium odit unde
                  modi voluptatum!
                </p>
              </div>
            </div>
            <div class="card-side card-side-back back3">
              <div class="card-link">
                <a href="#" target="_blank">visit</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      headText: 'Our Name'
    }
  }
}
</script>

<style scoped>
.projects {
  padding-top: 150px;
  background-color: white;
  margin-top: -10vh;
}
.section-heading {
  text-align: center;
}
.projects-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  text-align: center;
}
.card {
  position: relative;
  margin: 90px 0;
}
.card-side {
  padding: 10px;
  width: 25vw;
  height: 70vh;
  color: white;
  border-radius: 1em;
  margin: auto;
  transition: all 1s ease;
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: hidden;
}
.card:hover .card-side-front {
  transform: rotateY(-180deg);
}
.card:hover .card-side-back {
  transform: rotateY(0);
}
.card-side-front {
  background-color: rgba(255, 255, 255, 0.877);
  box-shadow: 0 1.5rem 50px rgba(0, 0, 0, 0.9);
}
.card-side-back {
  transform: rotateY(180deg);
}
.back1 {
  background-image: linear-gradient(
    to bottom right,
    rgba(161, 189, 61, 0.87),
    rgba(206, 79, 79, 0.918)
  ) !important;
}
.back2 {
  background-image: linear-gradient(
    to bottom right,
    rgba(61, 106, 189, 0.575),
    rgb(7, 76, 204)
  ) !important;
}
.back3 {
  background-image: linear-gradient(
    to bottom right,
    rgba(61, 174, 189, 0.575),
    rgb(61, 174, 189)
  ) !important;
}
@media only screen and (max-width: 768px) {
  .projects-container {
    grid-template-columns: auto;
  }
}
a {
  text-decoration: none;
  background-color: white;
  padding: 5px 30px;
  border-radius: 1em;
  color: red;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.card-link {
  margin-top: 30vh;
}
.card-picture {
  background-size: cover;
  height: 40vh;
  background-blend-mode: screen;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 65%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
}
.picture1 {
  background-image: linear-gradient(
      to bottom right,
      rgba(161, 189, 61, 0.87),
      rgba(206, 79, 79, 0.918)
    ),
    url(../../assets/home-office.jpg);
}
.picture2 {
  background-image: linear-gradient(
      to bottom right,
      rgba(61, 106, 189, 0.575),
      rgb(7, 76, 204)
    ),
    url(../../assets/home-office.jpg);
}
.picture3 {
  background-image: linear-gradient(
      to bottom right,
      rgba(61, 174, 189, 0.575),
      rgb(61, 174, 189)
    ),
    url(../../assets/home-office.jpg);
}
h4 {
  color: black;
  position: absolute;
  left: 40%;
  top: 35%;
  font-size: 6vh;
  font-weight: 300;
  width: 55%;
  background-color: rgba(255, 255, 255, 0.301);
  /* font-family: ; */
  /* padding: -10px; */
  /* text-align: right; */
}
p{
    color: black;
    text-align: right;
}
</style>
