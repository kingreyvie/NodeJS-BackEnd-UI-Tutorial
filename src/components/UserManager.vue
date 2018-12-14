<template lang="pug">
    .hero
      span
        h1 Users
        .field.has-addons
          .control
            input.input(placeholder="Search ID")
          .control
            a.button.is-info(v-model="search") Search
        table.table.is-fullwidth.is-narrow.is-bordered.is-hoverable.is-mobile.is-centered()
          thead.subtitle
            tr
              th ID
              th First Name
              th Last Name
              th Role
              th Email
              th(v-bind:style="{ 'text-align': 'center' }") Status
              th &nbsp;
              
          tbody
            tr(v-for="user in users" :key="user.id") 
              td {{user.user_id}}
              td {{user.user_fname}}
              td {{user.user_lname}}
              td {{user.user_role}}
              td {{user.user_email}}
              td.status(v-if="user.user_isdel==0")
                span(class="icon is-medium")
                  i(class="fas fa-check", aria-hidden="true")
                  span(style="margin-left:5px;") Active
              td.status(v-else-if="user.user_isdel==1" v-bind:style="{ 'color': 'red' }")
                span
                  i(class="fas fa-times", aria-hidden="true")
                  span(style="margin-left:5px;") Not Active
              
              td.has-text-centered
                button.button.is-success.is-outlined.tblbtn.is-rounded.tooltip.is-tooltip-success(v-if="user.user_isdel == 1", :pressed="true", @click.prevent="deleteUser(user.user_id,user.user_isdel)", data-tooltip="Enable")
                  i(class="fas fa-eye") 
                  span
                button.button.is-danger.is-outlined.tblbtn.is-rounded.tooltip.is-tooltip-danger(v-else :pressed="true", @click.prevent="deleteUser(user.user_id,user.user_isdel)", data-tooltip="Disable")
                  span
                    i(class="fas fa-eye-slash")
                a(ref = "#" @click.prevent = "populateUserToEdit(user)" variant="success" )
                  button.button.is-primary.is-outlined.tblbtn.is-rounded.tooltip.is-tooltip-info(data-tooltip="Edit", :pressed="true", @click="openEdit") 
                    span
                      i(class="fas fa-edit")

        .modal(:class="editActive")
          .modal-background.is-rounded
          .modal-content.is-rounded(style="background-color: white; margin: 50px; border-radius: 30px; overflow-y: hidden")
            form(@submit.prevent="saveUser" style="margin: 50px; height: 600px; overflow-y: hidden")
              h2.is-rounded(:title="(model.user_id ? 'Edit user ID #' + model.user_id : 'New user')")  Edit User ID # 
                span(style="color: green; font-weight: bolder;") {{model.user_id}}
              .field
                label.label First Name
                .control
                  input.input.is-rounded(type="text" placeholder="First Name" v-model = "model.user_fname")
              .field
                label.label Last Name
                .control
                  input.input.is-rounded(type="text" placeholder="Last Name" v-model = "model.user_lname")
              .field
                label.label Role
                .control
                  .select.is-medium(style="margin-bottom: 20px;")
                    select.is-rounded.is-fullwidth(type="text" placeholder="Last Name" v-model = "model.user_role")
                      option QA
                      option Infra
                      option Dev
              .field
                label.label Email
                .control
                  input.input.is-rounded(type="text" placeholder="Email" v-model = "model.user_email")

              .field.buttons.is-right(style="margin-top: 30px")
                button.button.is-danger.is-rounded(@click.prevent="close")
                  span(class="icon") 
                    i(class="fas fa-times") 
                  span Close 
                  
                button.button.is-info.is-rounded(@click.prevent="clear()")
                  span(class="icon") 
                    i(class="fas fa-undo") 
                  span Clear


                button.button.is-success.is-rounded(type="submit" variant="success")
                  span(class="icon") 
                    i(class="fas fa-edit") 
                  span Save user

          router-view
</template>

<style lang="scss">
select{
  width: 100px !important;
}
title{
  margin-bottom:10px;
}
input[type="text"], select{
  margin-bottom: 15px;
  border: 1px solid rgb(24, 24, 24) !important;
}
.hero {
  margin-left: 50px;
  margin-right: 50px;
}
.hero h1{
  font-size: 50px;
  margin: 10px;
}
h2{
  font-size:35px;
  margin-bottom: 5%;
}
.status{
  color: green;
  text-align: center;
}
.statbtn{
  margin: 3px;
}
.mdl{
  margin: 3px;
}

.btn {
  border: none;
  color: white;
  padding: 12px 16px;
  font-size: 16px;
  cursor: pointer;
}

.tblbtn{
  margin: 5px;
  }
</style>

<script>
		import userService from './userService'
		import EditUserModal from '../Modals/EditUserModal'

export default{
  data () {    
    return {
      loading: false,
      users: [],
      model: {},
      displayModel: {},
      updateModel: {},
      deleteModel: {},
      search: '',
      modalShow: false,
      showEditModal: false,
      screen: screen.width,
      editActive: ''
    }
	},

  async created () {
    this.refreshUsers()
  },

  components: {
    EditUserModal
  },
	
  methods: {
    async refreshUsers () {
      this.loading = true
      this.users = (await userService.getUsers()).data.allUser
      this.loading = false
    },
    async refreshUser(){
      this.loading = true
      this.users = (await userService.getUser()).data.allUser
      this.loading = false
    },
    async populateUserToEdit (user) {
      this.model = Object.assign({}, user)
    },
    async saveUser () {
      if (this.model.user_id) {
        this.updateModel = {
          user_fname: this.model.user_fname,
          user_lname: this.model.user_lname,
          user_role: this.model.user_role,
          user_email: this.model.user_email
        }
      if(!this.model.user_fname || !this.model.user_lname || !this.model.user_email || !this.model.user_role){
          alert('Please Fill all the text fields')
          
      }else{
        alert('Successfully Updated')
        await userService.updateUser(this.model.user_id, this.updateModel)
        this.model = {}
        await this.refreshUsers()
        await this.close()
      }
      }

    },
    openEdit(){
        this.editActive = 'is-active'
    },
    close(){
      this.editActive = ''
    },
    async deleteUser (id, isdel) {
      if (isdel === 0 && confirm('Are you sure you want to delete this user?')) {
        this.deleteModel = {
          user_isdel: 1
        }
        await userService.updateUser(id, this.deleteModel)
        await this.refreshUsers()
      } else if (isdel === 1 && confirm('Are you sure you want to retrieve this user?')) {
        this.deleteModel = {
          user_isdel: 0
        }
        await userService.updateUser(id, this.deleteModel)
        await this.refreshUsers()
      }
      // if we are editing a user we deleted, remove it from the form
    },
    async getUser (id) {
      await userService.getUser(id)
      await this.refreshUser
    },
    async clear () {
      this.model.user_fname =''
      this.model.user_lname =''
      this.model.user_role = ''
      this.model.user_email =''
    }
  }

		}
</script>
