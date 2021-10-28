<template>
  <div>
      <div class="wrapper">
          <div class="col nav-list">
              <h4>MFONIDO MARK</h4>
              <hr>
              <ul>
                  <li><router-link to="/Admin" class="links">Page Overview</router-link></li>
                  <hr>
                  <li><router-link to="/createArticles" class="links">Create Articles</router-link></li>
                  <hr>
                  <li><router-link to="/crudArticles" class="links">CRUD Article</router-link></li>
                  <hr>
                  <li><router-link to="/createProjects" class="links">Create Projects</router-link></li>
                  <hr>
                  <li><router-link to="/crudProjects" class="links">CRUD Projects</router-link></li>
                  <hr>
                  <li><i class="fas fa-power-off"></i></li>
                  <hr>
              </ul>
          </div>
          <div class="col content">
              <router-view/>
              <div class="overview" v-show="$route.name === 'Admin'">
                  <h1>this is the overview page</h1>
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
.wrapper{
    display: grid;
    grid-template-columns: 15% 85%;
    height: 100vh;
}
.nav-list{
    border-right: 2px solid rgb(158, 37, 37);
}
li{
    text-decoration: none;
    list-style-type: none;
    padding:20px;
    cursor: pointer;
    text-align: center;
}
.nav-list{
    background-color: rgb(53, 44, 44);
    color: white;
}
h4{
    text-align: center;
    padding: 10px;
    background-color: rgb(158, 37, 37);
}
li:hover{
    background-color: tomato;
}
.links{
    text-decoration: none;
    list-style-type: none;
    color: white;
}
</style>
