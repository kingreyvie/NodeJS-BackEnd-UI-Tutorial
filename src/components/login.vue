<template lang="pug">
    form.hero(@submit.prevent='saveUser')
      .hero2
        h1 Log in Form
        .field
          label.label Username
          .control
            input.input(type="text" placeholder="Username" v-model = "model.user_fname")
        .field
          label.label Password
          .control
            input.input(type="password" placeholder="Password" v-model = "model.user_lname")

        .field.is-grouped.is-centered
          .control
            button.button.is-success
              i(class="fas fa-edit")
              span Log in
          .control
            button.button.is-warning
              i(class="fas fa-undo") 
              span Clear

</template>


<style scoped>
.hero {
  margin-left: 30%;
  margin-right: 30%;
  margin-top: 5%;
  margin-bottom: 10%;
  border-radius: 30px;
  background-color: rgba(245, 89, 89, 0.804);
}

.hero2 {
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 10%;
  margin-bottom: 7%;
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

<script>
export default {
data(){
    return{
        model: {}
    }
}
}
</script>