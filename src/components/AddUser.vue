<template>
<div class="mx-auto" style="width: 500px; height: 800px; margin: 100px;">
    <form @submit.prevent = "saveUser" >
    <h2>New User</h2>
    <b-card style="max-width: 30rem;">
        <b-form-group label = "First Name">
            <b-form-input type = "text" v-model = "model.user_fname"></b-form-input>
        </b-form-group>

        <b-form-group label = "Last Name">
            <b-form-input type = "text" v-model = "model.user_lname"></b-form-input>
        </b-form-group>

        <b-form-group label = "Role">
            <b-form-input type = "text" v-model = "model.user_role"></b-form-input>
        </b-form-group>

        <b-form-group label = "Email">
 
            <b-form-input type = "text" v-model = "model.user_email">
            </b-form-input>

        </b-form-group>

        <div class="text-right">
            <b-btn variant = "info" style="height:45px;" @click.prevent="clear()" >
                <i class="fa fa-repeat" v-bind:style="{'margin':'1px', 'font-weight': 'bold' }"></i>
                <span v-bind:style="{ 'font-weight': 'bolder', 'margin': '1px' }" ></span>
            </b-btn>
            <b-btn type = "submit" variant = "success" style="height:45px;">
                <i class="fa fa-check" v-bind:style="{'margin':'1px', 'font-weight': 'bold' }"></i>
                <span v-bind:style="{ 'font-weight': 'bolder', 'margin': '1px' }" > Save User</span>
            </b-btn>
        </div>
    </b-card>
    </form>
    
</div>
</template>

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
        alert(this.model.user_fname)
        await userService.createUser(this.model)
        }
        this.model = {}
        await this.refreshUsers()
        },
    async clear () {
      this.model = {}
    }
}
}
</script>

<style>

</style>
