<template>
<form class="hero is-link" @submit.prevent = "saveUser" style="border-radius: 30px;" >
<div class="hero2">
  <h1 class="title">New User</h1>
<div class="field">
  <label class="label">First Name</label>
  <div class="control">
    <input class="input is-rounded" type="text" placeholder="First Name" v-model = "model.user_fname">
  </div>
</div>
<div class="field">
  <label class="label">Last Name</label>
  <div class="control">
    <input class="input is-rounded" type="text" placeholder="Last Name" v-model = "model.user_lname" >
  </div>
</div>

<div class="field">
<label class="label">Role</label>  
<div class="control">
  <div class="select is-dark is-rounded">
    <select type="text" placeholder="Last Name" v-model = "model.user_role">
      <option>QA</option>
      <option>Infra</option>
      <option>Dev</option>
    </select>
  </div>
</div>

</div>
<div class="field">
  <label class="label">Email</label>
  <div class="control">
    <input class="input is-rounded" type="text" placeholder="Email" v-model = "model.user_email">
  </div>
</div>


<div class="buttons is-right" >
    <button class="button is-success is-rounded">
    <span>
        <i class="fa fa-check"></i>
        Save User
    </span>
    </button>

    <button class="button is-warning is-rounded" @click.prevent="clear()">
        <span>
        <i class="fas fa-undo"></i> Clear
        </span>
    </button>
</div>
</div>
</form>
</template>


<style lang="scss">
.hero {
  margin-left: 30%;
  margin-right: 30%;
  margin-top: 5%;
  margin-bottom: 10%;
}
.hero2 {
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 10%;
  margin-bottom: 7%;
}
.control{
  margin-bottom: 3%;
}
.label{
  color:white;
}
</style>

<script>
import userService from './userService'

export default {
data(){
    return{
        model: {}
    }
},

methods: {
    async saveUser () {
        if(!this.model.user_fname || !this.model.user_lname || !this.model.user_email || !this.model.user_role){
            alert('Please Fill all the text fields')
        }else{
        alert(this.model.user_fname + ' ' + this.model.user_lname + ' is Successfuly added')
        await userService.createUser(this.model)
                this.model = {}
        await this.refreshUsers()
        }
        },
    async refreshUsers () {
      this.loading = true
      this.users = (await userService.getUsers()).data.allUser
      this.loading = false
    },
    async clear () {
      this.model = {}
    }
}
}
</script>