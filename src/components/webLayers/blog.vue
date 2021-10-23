<template>
  <div>
    <div class="skills">
      <div class="skill-head">
        <h1 class="heading">
          BLOG
        </h1>
      </div>
      <video class="video-bg" autoplay muted loop>
        <source src="../../assets/blog.mp4" type="video/mp4">
      </video>
      <div class="cards">
        <div class="card">
          <div class="project-container">
            <div class="content1"></div>
            <div class="content">
              <h3>ARTICLE TITLE</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos,
                at!
              </p>
              <span class="date">28, October 2021</span> <br />
              <a href="#" target="_blank">Visit</a>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="project-container">
            <div class="content1"></div>
            <div class="content">
              <h3>ARTICLE TITLE</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos,
                at!
              </p>
              <span class="date">28, October 2021</span> <br />
              <a href="#" target="_blank">Visit</a>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="project-container">
            <div class="content1"></div>
            <div class="content">
              <h3>ARTICLE TITLE</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos,
                at!
              </p>
              <span class="date">28, October 2021</span> <br />
              <a href="#" target="_blank">Visit</a>
            </div>
          </div>
        </div>
      </div>
      <div class="more-link">
        <router-link to="#" class="more">View More</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.skills {
  background: linear-gradient(
      to right,
      rgba(189, 61, 61, 0.575),
      rgba(206, 79, 79, 0.664)
    );
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  padding-bottom: 20px;
}
.video-bg{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  min-width: 100%;
  min-height: 100%;
  z-index: -1;
}
.heading {
  font-size: 3rem;
  font-weight: 700;
  color: white;
  letter-spacing: 1rem;
  animation-name: moveInLeft;
  text-align: center;
  animation-duration: 2s;
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
}
.card {
  background-color: white;
  padding: 1rem;
  height: auto;
  text-align: center;
  border-radius: 1em;
  box-shadow: 0 1.5rem 8rem rgba(0, 0, 0, 0.9);
}
h3 {
  color: rgba(206, 79, 79, 0.664);
  font-weight: 800;
}
p {
  font-weight: bolder;
}
.card:hover {
  transform: translateY(-30px);
  cursor: pointer;
  transition: all 0.7s ease-in-out;
}
.project-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}
.content1 {
  background-image: linear-gradient(
      to bottom right,
      rgba(90, 102, 45, 0.705),
      rgba(206, 79, 79, 0.445)
    ),
    url("../../assets/dp.jpg");
  background-size: cover;
  height: 35vh;
}
.content > p {
  text-align: left;
  padding: 5px;
  margin-bottom: 7vh;
  font-size: 0.91rem;
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
.content > a:hover {
  background-color: rgb(207, 40, 40);
}
.date {
  font-size: 14px;
}
.more-link {
  text-align: center;
}
.more {
  background-color: white;
  padding: 5px 10px;
  border-radius: 1em;
  text-decoration: none;
  color: rgb(207, 40, 40);
  font-weight: 700;
}
</style>
