<template>
  <div>
    <div class="container">
      <div class="col">
        <img
          src="../../assets/blogHead.jpeg"
          alt=""
          srcset=""
          class="blog-img-head"
        />
        <li><router-link to="/" class="link">Home</router-link></li>
      </div>
      <div class="col">
        <div class="functions">
          <i class="fas fa-search"></i>
          <i class="fas fa-sun"></i>
          <i class="fas fa-moon"></i>
        </div>
        <div class="socials">
          <i class="fab fa-twitter"></i>
          <i class="fab fa-github"></i>
          <i class="fab fa-linkedin"></i>
          <i class="fas fa-envelope"></i>
        </div>
      </div>
    </div>
    <div class="header">
      <div class="container2">
        <div class="row">
          <div class="col-header">
            <div class="head">
              <h1>Mfonido Mark</h1>
              <span>Frontend Developer(Engineer)</span>
            </div>
            <p>
              Hello, My name is Mfonido Mark. I am a frontend engineer with
              several years of experience in frontend web development and graphics design.
              Volunteering and building tech communities have been a passion for
              me and I have led a few myself. Hire me to build your website,
              design your graphic works and train you on public speaking.
            </p>
          </div>
          <div class="col-header col-header2">
            <img
              src="../../assets/blogHead.jpeg"
              alt=""
              srcset=""
              class="blog-img-header"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.container {
  background-image: url("../../assets/blogbanner.jpg");
  background-size: cover;
  background-position: center;
  padding: 5px 30px;
  display: flex;
  justify-content: space-between;
  background-color: black;
}
.container2 {
  padding: 5px 30px;
  background-color: rgb(29, 27, 27);
  border-bottom: 3px solid rgb(102, 97, 97);
}
.row {
  display: grid;
  grid-template-columns: auto auto;
  margin-left: 20%;
  margin-right: 20%;
}
.col-header {
  padding: 5px;
}
.blog-img-head {
  border-radius: 100%;
  height: 15vh;
  border: 2px rgb(206, 79, 79) solid;
}
.blog-img-header {
  border-radius: 100%;
  height: 150px;
  border: 2px rgb(206, 79, 79) solid;
  /* margin: auto; */
  margin-top: 20px;
}
.link {
  color: white;
  text-align: center;
  justify-content: center;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bolder;
}
.link:hover{
    color: rgb(206, 79, 79);
}
li {
  text-align: center;
  text-decoration: none;
  list-style-type: none;
  /* font-size: 2rem; */
}
.fas,
.fab {
  color: white;
  font-size: 20px;
  padding: 10px;
}
.functions {
  padding-top: 30px;
}
@media only screen and (max-width: 766px) {
  .row > .col-header2 {
    grid-column-start: 1;
    grid-row-start: 1;
  }
  .row {
    grid-template-columns: auto;
  }
}
h1 {
  color: white;
}
span {
  color: rgb(206, 79, 79);
}
p {
  color: gray;
}
</style>
