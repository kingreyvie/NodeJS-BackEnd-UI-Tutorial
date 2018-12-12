<template lang="pug">
  .modal(class="is-active")
    .modal-background
    .modal-content
        .field
          label.label First Name
          .control
            input.input(type="text" placeholder="First Name" v-model = "model.user_fname")
        .field
          label.label Last Name
          .control
            input.input(type="text" placeholder="Last Name" v-model = "model.user_lname")
        .field
          label.label Role
          .control
            input.input(type="text" placeholder="Role" v-model = "model.user_role")
        .field
          label.label Email
          .control
            input.input(type="text" placeholder="Email" v-model = "model.user_email")

        .field.is-grouped.is-centered
          .control
            button.button.is-success
              i(class="fas fa-edit")
              span Save User
          .control
            button.button.is-success
              i(class="fas fa-undo") 
              span Clear

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

<script>
export default {
data(){
    return{
        model: {}
    }
}
}
</script>