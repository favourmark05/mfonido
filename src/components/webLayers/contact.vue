<template>
  <div>
    <div class="heading">
      <h1>CONTACT ME</h1>
    </div>
    <section class="contact-me">
      <div class="form">
        <div class="col-1">
          <form @submit.prevent="sendMail">
            <h2>Say Hi!</h2>
            <input
              type="text"
              placeholder="Full Name"
              v-model="name"
              name="name"
              class="input"
            />
            <input
              type="email"
              name="email"
              id=""
              placeholder="Email"
              class="email input"
              v-model="email"
            />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Enter your message here"
              v-model="message"
              class="textarea"
            ></textarea>
            <br />
            <VueButtonSpinner type="submit" value="send" :isLoading="isLoading" :status="status" v-bind:disabled="!message  || !name || !email">
            Send Mail &nbsp;<i class="fas fa-paper-plane"></i>
            </VueButtonSpinner>
          </form>
        </div>
        <!-- <div class="col-2">
        </div> -->
      </div>
      <div class="socials">
          <a href="https://twitter.com/MfonidoMark" target="_blank"><i class="fab fa-twitter icon"></i></a>
          <a href="https://github.com/favourmark05" target="_blank"><i class="fab fa-github icon"></i></a>
          <a href="https://www.linkedin.com/in/mfonido-mark-4baa42120/" target="_blank"><i class="fab fa-linkedin icon"></i></a>
          <a href="mailto:favourmark05@gmail.com" target="_blank"><i class="fas fa-envelope icon"></i></a>
        </div>
    </section>
  </div>
</template>

<script>
import emailjs from 'emailjs-com'
import VueButtonSpinner from 'vue-button-spinner'
export default {
  name: 'ContactMe',
  data () {
    return {
      name: '',
      email: '',
      message: '',
      isLoading: false,
      status: ''
    }
  },
  components: {
    VueButtonSpinner
  },
  methods: {
    sendMail (e) {
      try {
        this.isLoading = true
        emailjs
          .sendForm(
            'service_41yaaok',
            'template_fszzds4',
            e.target,
            'user_JnkbPpytmFMhAyAWo3zVs',
            {
              name: this.name,
              email: this.email,
              message: this.message
            }
          )
          .then(() => {
            this.isLoading = false
            setTimeout(() => { this.status = '' }, 2000)
            this.$swal.fire(
              'Message Sent!',
              'Will get back to you shortly!',
              'success'
            )
          })
      } catch (error) {
        console.log({ error })
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    }
  },
  computed: {
    isDisabled () {
      return this.message.length < 10 && this.name === '' && this.email === ''
    }
  }
}
</script>

<style scoped>
.heading {
  font-size: 1rem;
  font-weight: 700;
  background-image: linear-gradient(
    to right,
    rgba(224, 17, 17, 0.575),
    rgb(255, 0, 0)
  );
  -webkit-background-clip: text;
  color: transparent;
  text-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.555);
  letter-spacing: 1rem;
  animation-name: moveInLeft;
  text-align: center;
  animation-duration: 2s;
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
.contact-me {
  background: linear-gradient(
    to right,
    rgba(189, 61, 61, 0.575),
    rgba(206, 79, 79, 0.664)
  );
  height: 100%;
  padding: 20px;
}
.form {
  background-image: linear-gradient(
      105deg,
      rgba(255, 255, 255, 0.9) 0%,
      rgba(255, 255, 255, 0.9) 50%,
      transparent 50%
    ),
    url("../../assets/contact.jpg");
  background-size: cover;
  background-position: center;
  margin: auto;
  display: grid;
  grid-template-columns: 50% 50%;
  width: 70vw;
  text-align: center;
  border-radius: 1em;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.726);
}
button {
  margin: 5px;
  cursor: pointer;
}
button:hover {
  background-color: rgba(206, 79, 79, 0.795);
  color: white;
  border-radius: 1em;
  cursor: pointer;
}
input {
  margin: 10px;
  width: 80%;
  height: 2.5rem;
  padding: 5px;
  border-radius: 1em;
}
textarea {
  margin: 10px;
  width: 80%;
  border-radius: 1em;
  padding: 10px;
}
.label-name,
.label-email {
  display: block;
  text-align: left;
  margin-left: 70px;
}
input:focus {
  outline: none;
  box-shadow: 0 1rem 2rem black;
  border-bottom: 3px solid rgba(206, 79, 79, 0.795);
  padding: 7px;
  border-radius: 0.5em;
}
input:focus:invalid {
  border-bottom: 3px solid rgba(255, 238, 0, 0.795);
}
form > span {
  color: rgb(0, 0, 0);
}

.col-1 {
  border-bottom-left-radius: 1em;
  border-top-left-radius: 1em;
}
@media only screen and (max-width: 578px) {
  .form {
    grid-template-columns: auto;
  }
  .col-2 {
    display: none;
  }
  .col-1 {
    border-radius: 1em;
  }
}
.socials{
  display: flex;
  justify-content: space-around;
  text-align: center;
  padding-top: 20px;
}
.icon{
  font-size: 20px;
  color: white;
}
</style>
