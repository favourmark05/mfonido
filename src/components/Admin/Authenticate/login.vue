<template>
  <div>
    <div class="container">
      <div class="login">
        <h1>LOGIN</h1>
        <form @submit.prevent="login">
          <input type="emial" placeholder="Email" v-model="email" /> <br />
          <input type="password" placeholder="PassWord" v-model="password" />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
export default {
  name: 'Login',
  components: {},
  data () {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    login () {
      const auth = getAuth()
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          // Signed in
          console.log('signed in')
          this.$router.replace('/admin')
          // const user = userCredential.user
          // ...
        })
        .catch(error => {
          const errorCode = error.code
          const errorMessage = error.message
          console.log(errorCode, errorMessage)
        })
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  height: 100vh;
  overflow-y: hidden;
  background-image: linear-gradient(
    to bottom,
    rgba(189, 61, 61, 0.575),
    rgba(73, 7, 7, 0.664)
  );
}
.login {
  margin: auto;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.384);
  padding: 60px 30px;
  border-radius: 1em;
  /* padding-top: 2vh; */
}
input {
  width: 300px;
  height: 50px;
  margin: 10px;
  padding: 5px;
  border-radius: 0.5em;
}
button {
  padding: 10px 20px;
  border-radius: 0.5em;
  cursor: pointer;
}
h1 {
  color: white;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
</style>
