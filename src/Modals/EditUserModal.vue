<template lang="pug">
  section
     .modal(:class="editActive")
        .modal-background.is-rounded(@click.prevent="hideModal()")
        .modal-content.is-rounded(style="background-color: white; margin: 50px; border-radius: 30px; overflow-y: hidden")
          form(@submit.prevent="saveUser" style="margin: 50px; height: 600px; overflow-y: hidden")
            h2.is-rounded.title(:title="(editmodel.user_id ? 'Edit user ID #' + editmodel.user_id : 'New user')")  Edit User ID # 
              span.title(style="color: green; font-weight: bolder;") {{editmodel.user_id}}
            .field
              label.label First Name
              .control
                input.input.is-rounded(type="text" placeholder="First Name" v-model = "editmodel.user_fname")
            .field
              label.label Last Name
              .control
                input.input.is-rounded(type="text" placeholder="Last Name" v-model = "editmodel.user_lname")
            .field
              label.label Role
              .control
                .select.is-medium(style="margin-bottom: 20px;")
                  select.is-rounded.is-fullwidth(type="text" placeholder="Last Name" v-model = "editmodel.user_role")
                    option QA
                    option Infra
                    option Dev
            .field
              label.label Email
              .control
                input.input.is-rounded(type="text" placeholder="Email" v-model = "editmodel.user_email")

            .field.buttons.is-right(style="margin-top: 30px")
              button.button.is-danger.is-rounded(@click.prevent="hideModal()")
                span(class="icon") 
                  i(class="fas fa-times") 
                span Close 
                
              button.button.is-info.is-rounded
                span(class="icon") 
                  i(class="fas fa-undo") 
                span Clear


              button.button.is-success.is-rounded(type="submit" variant="success")
                span(class="icon") 
                  i(class="fas fa-edit") 
                span Save user
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
    showModal(){
      this.editActive = "is-active"
    },

    updateUser(){
      this.$emit('saveUser')
      this.hideModal()
    },

    hideModal(){
      this.editActive = ""
    }
  }
}
</script>

<style lang="scss" scoped>
select{
  width: 100px !important;
}
h2{
  margin-bottom:50px !important;
}
input[type="text"], select{
  margin-bottom: 15px;
  border: 1px solid rgb(24, 24, 24) !important;
}
</style>
