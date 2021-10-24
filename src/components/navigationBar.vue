<template>
  <div>
      <div class="navigation">
          <input type="checkbox" class="navigation-checkbox" id="navi-toggle">
          <label for="navi-toggle" class="navigation-button">
              <span class="navigation-icon"></span>
          </label>
          <div class="navigation-bg"></div>
          <nav class="navigation-nav">
              <ul class="nav-list">
                  <li class="nav-item"><router-link to="/" class="nav-link"><span>01</span>Home</router-link></li>
                  <li class="nav-item"><router-link to="/" class="nav-link"><span>02</span>Projects</router-link></li>
                  <li class="nav-item"><router-link to="/" class="nav-link"><span>03</span>Blog Post</router-link></li>
              </ul>
          </nav>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.navigation-bg{
height:2rem;
width: 2rem;
border-radius: 50%;
position: fixed;
top: 1.5rem;
right: 1.5rem;
background-image: radial-gradient(rgb(189, 61, 61),
      rgb(206, 79, 79));
      z-index: 1000;
transition: transform .8s cubic-bezier(0.86, 0, 0.07, 1);
}
.navigation-checkbox{
display: none;
}
.navigation-button{
background-color: white;
height: 3rem;
width: 3rem;
position: fixed;
top: 1rem;
right: 1rem;
border-radius: 50%;
z-index: 2000;
box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.692);
cursor: pointer;
text-align: center;
}
.navigation-nav{
height: 100vh;
position: fixed;
top: 0;
right: 0;
z-index: 1500;
opacity: 0;
width: 0;
transition: all .8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.nav-list{
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
list-style-type: none;
text-align: center;
text-decoration: none;
}
.nav-item{
margin: 1rem;
}
.nav-link{
    display: inline-block;
    padding: .5rem 1rem;
    font-size: 2rem;
    font-weight: 300;
list-style-type: none;
text-align: center;
text-decoration: none;
color: white;
background-image: linear-gradient(120deg, transparent 0%, transparent 50%, white 50%);
background-size: 240%;
transition: all .4s;
}
span{
    display: inline-block;
    margin-right: 1rem;
}
.nav-link:hover, .nav-link:active {
    background-position: 100%;
    color: rgb(206, 79, 79);
    font-weight: bolder;
    transform: translateX(1rem);
}
.navigation-checkbox:checked ~ .navigation-bg{
    transform: scale(100);
}
.navigation-checkbox:checked ~ .navigation-nav{
    opacity: 1;
    width: 100%;
}
.navigation-icon{
    position: relative;
    margin-top: 1.5rem;
    margin-left: .5rem;
}
.navigation-icon, .navigation-icon::before, .navigation-icon::after{
width: 2rem;
height: .5px;
background-color: black;
display: inline-block;
}
.navigation-icon::before, .navigation-icon::after{
    content: "";
    position: absolute;
    left: 0;
}
.navigation-icon::before{
    top: -.5rem;
}
.navigation-icon::after{
    top: .5rem;
}
.navigation-checkbox:checked + .navigation-button .navigation-icon{
    background-color: transparent;
}
.navigation-checkbox:checked + .navigation-button .navigation-icon::before{
    top: 0;
    transform: rotate(45deg);
}
.navigation-checkbox:checked + .navigation-button .navigation-icon::after{
    top: 0;
    transform: rotate(-45deg);
}
</style>
