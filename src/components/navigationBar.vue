<template>
  <div>
    <div class="menu-wrap">
      <input type="checkbox" class="toggler" />
      <div class="hamburger"><div></div></div>
      <div class="menu">
        <div>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <!-- <li><router-link to="/projects">Projects</router-link></li> -->
            <li><router-link to="/blog">Blog</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
main {
  margin: 150px auto;
  max-width: 728px;
  padding: 2rem;
  background-color: #fafafa;
  border-radius: 3px;
  text-align: center;
}
.menu-wrap {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}
.menu-wrap .toggler {
  position: absolute;
  top: 3vh;
  left: 90vw;
  opacity: 0;
  height: 50px;
  width: 50px;
  cursor: pointer;
  z-index: 2;
}
.menu-wrap .hamburger {
  position: absolute;
  top: 3vh;
  left: 90vw;
  height: 50px;
  width: 50px;
  background: rgba(22, 22, 22, 0.247);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  border-radius: 100%;
}

/* Hamburger line */
.menu-wrap .hamburger > div {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: red;
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.4s;
}

/* Hamburger top & bottom line */
.menu-wrap .hamburger > div:before,
.menu-wrap .hamburger > div:after {
  content: "";
  position: absolute;
  top: 10px;
  left: 0;
  background: inherit;
  height: 2px;
  width: 100%;
  z-index: 1;
}
.menu-wrap .hamburger > div:after {
  top: -10px;
}

/* Toggler Animation */
.menu-wrap .toggler:checked + .hamburger > div {
  transform: rotate(135deg);
}
.menu-wrap .toggler:checked + .hamburger > div:before,
.menu-wrap .toggler:checked + .hamburger > div:after {
  top: 0;
  transform: rotate(90deg);
}

/* Rotate on hover when checked */
.menu-wrap .toggler:checked:hover + .hamburger > div {
  transform: rotate(225deg);
}
.menu {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(189, 61, 61, 0.897);
  height: 100vh;
  width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  opacity: 0;
  transition: all var(--menu-speed) ease;
}
.menu > div {
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  opacity: 0;
  transition: opacity 0.4s ease-in;
}
.menu ul {
  list-style: none;
}
.menu li {
  padding: 1rem 0;
}
.menu > div a {
  text-decoration: none;
  color: #fafafa;
  font-size: 1.5rem;
  opacity: 0;
  transition: opacity 1s ease-in;
}
.menu a:hover {
  color: rgb(230, 177, 177);
  transition: color 0.3s ease-in;
}

/* Show Menu */
.menu-wrap .toggler:checked ~ .menu {
  opacity: 1;
  width: 30vw;
  transition: all var(--menu-speed) ease;
}
.menu-wrap .toggler:checked ~ .menu > div {
  opacity: 1;
  transition: opacity 0.4s ease-in;
}
.menu-wrap .toggler:checked ~ .menu > div a {
  opacity: 1;
  transition: opacity 1s ease-in;
}

@media (max-width: 500px) {
  .menu-wrap .toggler:checked ~ .menu {
    width: 65vw;
  }
}
@media only screen and (max-with: 428px) {
  .menu-wrap .toggler {
  position: absolute;
  top: 0;
  left: 80vw;
  opacity: 0;
  height: 50px;
  width: 50px;
  cursor: pointer;
  z-index: 2;
}
.menu-wrap .hamburger {
  position: absolute;
  top: 0;
  left: 80vw;
  height: 60px;
  width: 60px;
  background: transparent;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
}
}
</style>
