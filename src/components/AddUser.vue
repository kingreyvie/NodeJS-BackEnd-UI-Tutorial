<template lang="pug">
  form.hero(@submit.prevent='saveUser')
    .hero2
      h1.title New User
      .field
        label.label First Name
        .control
          input.input.is-rounded(type='text' placeholder='First Name' v-model='model.user_fname')
      .field
        label.label Last Name
        .control
          input.input.is-rounded(type='text' placeholder='Last Name' v-model='model.user_lname')
      .field
        label.label Role
        .control
          .select.is-dark.is-rounded
            select(type='text' placeholder='Last Name' v-model='model.user_role')
              option QA
              option Infra
              option Dev
      .field
        label.label Email
        .control
          input.input.is-rounded(type='text' placeholder='Email' v-model='model.user_email')
      .buttons.is-right

        button.button.is-warning.is-rounded(@click.prevent='clear()')
          span
            i.fas.fa-undo
            |  Clear

        button.button.is-success.is-rounded
          span
            i.fa.fa-check
            |  Save User
    router-view
</template>


<style lang="scss" scoped>
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

.control {
  margin-bottom: 3%;
}

.label{
  color: white;
}
.title{
  color: white;
}
</style>

<script>
import userService from './userService'

export default {
  data() {
    return {
      model: {}
    }
  },

  methods: {
    async saveUser() {
      if (!this.model.user_fname || !this.model.user_lname || !this.model.user_email || !this.model.user_role) {
        alert('Please Fill all the text fields')
      } else {
        alert(this.model.user_fname + ' ' + this.model.user_lname + ' is Successfuly added')
        await userService.createUser(this.model)
        this.model = {}
        await this.refreshUsers()
      }
    },
    async refreshUsers() {
      this.loading = true
      this.users = (await userService.getUsers()).data.allUser
      this.loading = false
    },
    async clear() {
      this.model = {}
    }
  }
}
</script>