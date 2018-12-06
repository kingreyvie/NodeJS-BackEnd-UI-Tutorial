<template lang="pug">
.hero
  b-card(title=('Login Form') class="bcard")
    form(@submit.prevent = "saveUser")
      b-form-group(label="Username")
        b-form-input(type="text")
      b-form-group(label="Password")
        b-form-input(type="password")
      div(slot="modal-footer" class="text-right")
        b-btn.btn(type="submit" variant="success") Login
        b-btn.btn Clear
</template>

<style scoped>
  .hero {
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .spacing{
    margin: 0px;
  }
  .hero .lead {
    font-weight: 300;
    font-size: 1.5rem;
  }
  .bcard{
    width:300px; 
    height:400px;
  }
  .btn{
    margin-left: 10px;
    margin-top:20px;

  }
</style>

