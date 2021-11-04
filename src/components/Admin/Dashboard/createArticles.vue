<template>
  <div>
      <form class="form">
          <p>Tile</p>
          <input type="text" v-model="title"> <br>
          <p>content</p>
          <input type="text" v-model="content"> <br> <br>
          <button @click.prevent="upload">upload</button>
      </form>
  </div>
</template>

<script>
// import { collection, addDoc, db } from 'firebase/firestore'
export default {
  name: 'CreateBlog',
  data () {
    return {
      title: null,
      content: null
    }
  },
  methods: {
    // upload () {
    //   const docRef = addDoc(collection(db, 'users'), {
    //       title: this.title,
    //       content: this.content
    //   })
    //   .then(( docRef ) => {
    //       console.log(docRef.id)
    //   })
    //   .catch((err) => {
    //       console.log(err)
    //   })
    // }
  }

}
</script>

<style scoped>
.form{
    margin-left: 30px;
}
</style>
