<template>
  <div>
      <div class="heading">
              <h1>CONTACT ME</h1>
          </div>
      <section class="contact-me">
              <div class="form">
              <div class="col-1">
                  <form action="">
                      <h2>Say Hi!</h2>
                      <input type="text" placeholder="Full Name" required>
                      <input type="email" name="email" id="" placeholder="Email" class="email" required>
                      <textarea name="message" id="" cols="30" rows="10" placeholder="Enter your message here" required></textarea> <br>
                      <button>Send Mail</button>
                  </form>
              </div>
              <div class="col-2"></div>
          </div>
      </section>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.heading {
  font-size: 1rem;
  font-weight: 700;
  /* color: white; */
   background-image: linear-gradient(
    to right,
    rgba(224, 17, 17, 0.575),
    rgb(255, 0, 0));
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
.contact-me{
    background: linear-gradient(
      to right,
      rgba(189, 61, 61, 0.575),
      rgba(206, 79, 79, 0.664)
    );
    height: 100%;
    display: flex;
    padding: 20px;
}
.form{
    background-image:linear-gradient(105deg,
    rgba(255, 255, 255, .9)0%,
    rgba(255, 255, 255, .9)50%,
    transparent 50%),
    url("../../assets/contact.jpg");
    background-size: cover;
    background-position: center;
     margin: auto;
     display: grid;
     grid-template-columns: 50% 50%;
     width: 55vw;
     text-align: center;
     border-radius: 1em;
     box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.726);
}
button{
    margin: 5px;
    cursor: pointer;
}
button:hover{
    background-color: rgba(206, 79, 79, 0.795);
    color: white;
    border-radius: 1em;
    cursor: pointer;
}
input{
    margin: 10px;
}
textarea{
    margin-top: 10px;
}
.label-name, .label-email{
    display: block;
    text-align: left;
    margin-left: 70px;
}
input:focus{
    outline: none;
    box-shadow: 0 1rem 2rem black;
    border-bottom: 3px solid rgba(206, 79, 79, 0.795);
    padding: 7px;
    border-radius: .5em;
}
input:focus:invalid{
    border-bottom: 3px solid rgba(255, 238, 0, 0.795);
}
form > span {
    color: rgb(0, 0, 0);
}

.col-1{
    border-bottom-left-radius: 1em;
    border-top-left-radius: 1em;
}
@media only screen and (max-width: 578px){
    .form{
        grid-template-columns: auto;
    }
    .col-2{
        display: none;
    }
    .col-1{
        border-radius: 1em;
    }
}
</style>
