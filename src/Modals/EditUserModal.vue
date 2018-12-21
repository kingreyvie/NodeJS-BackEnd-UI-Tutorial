<template lang="pug">
  section
     .modal(:class="editActive")
        .modal-background.is-rounded(@click.prevent="hideModal()")
        .modal-content.is-rounded(style="background-color: white; margin: 50px; border-radius: 30px; overflow-y: hidden")
          form(@submit.prevent="updateUser" style="margin: 50px; height: 495px; overflow-y: hidden")
            h2.is-rounded.title(:title="(editmodel.user_id ? 'Edit user ID #' + editmodel.user_id : 'New user')")  Edit User ID # 
              span.title(style="color: green; font-weight: bolder;") {{editmodel.user_id}}
            .field
              label.label First Name
              .control
                input.input.is-rounded(type="text" v-on:keydown.enter="updateUser" placeholder="First Name" v-model = "editmodel.user_fname")
            .field
              label.label Last Name
              .control
                input.input.is-rounded(type="text" v-on:keydown.enter="updateUser" placeholder="Last Name" v-model = "editmodel.user_lname")
            .field
              label.label Role
              .control
                .select.is-sm(style="margin-bottom: 20px;")
                  select.is-rounded(type="text" v-model = "editmodel.user_role")
                    option(value="" disabled selected :style="{'font-size': '18px'}") Select your option
                    option QA
                    option Infra
                    option Dev
            .field
              label.label Email
              .control
                input.input.is-rounded(type="text" v-on:keydown.enter="updateUser" placeholder="Email" v-model = "editmodel.user_email" )

            .field.buttons.is-right(style="margin-top: 30px")
              button.button.is-danger.is-rounded(@click.prevent="hideModal()")
                span(class="icon") 
                  i(class="fas fa-times") 
                span Close 
                
              button.button.is-info.is-rounded(@click.prevent="clear")
                span(class="icon") 
                  i(class="fas fa-undo") 
                span Clear


              button.button.is-success.is-rounded(type="submit" variant="success")
                span(class="icon") 
                  i(class="fas fa-edit") 
                span Update User
          router-view
</template>
<script>
export default {
  props: ['editmodel'],

  data() {
    return {
      editActive: false
    }
  },

  methods: {
    async showModal(){
      this.editActive = "is-active"
    },

    async updateUser(){
      this.$emit('updateUser')
      this.hideModal()
    },

    async hideModal(){
      this.editActive = ""
    },
    
    async clear () {
      this.editmodel.user_fname =''
      this.editmodel.user_lname =''
      this.editmodel.user_role = ''
      this.editmodel.user_email =''
    },
  }
}
</script>

<style lang="scss" scoped>
select{
  width: 190px !important;
  border-radius: 50px;
}
h2{
  margin-bottom:20px !important;
}
input[type="text"], select{
  margin-bottom: 15px;
  border: 1px solid rgb(24, 24, 24) !important;
}
</style>
