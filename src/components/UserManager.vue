<template lang="pug">
	div(class="container-fluid mt-4")
		h1.h1 User Manager
		b-row
			b-col
				table(class="table table-striped table-hover" hover)
					thead
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
							td.status(v-if="user.user_isdel==0" variant="outline-success") Active
							td.status(v-else v-bind:style="{ 'color': 'red' }") Inactive
								td.text-right
									b-button.tblbtn(v-if = "user.user_isdel == 1" variant="outline-success" :pressed="true" @click.prevent = "deleteUser(user.user_id,user.user_isdel)")  Activate
                  
									b-button.tblbtn(v-else variant="outline-danger" :pressed="true" @click.prevent = "deleteUser(user.user_id,user.user_isdel)") Deactivate

									a(href = "#" @click.prevent = "populateUserToEdit(user)" variant="success" @click="modalShow=true") 
										b-button.tblbtn(:pressed="true" @click="modalShow = !modalShow" variant="primary sm") 
											i(class="fa fa-edit" aria-hidden="true")
											span(v-bind:style="{'font-weight': 'bolder', 'margin': '3px'}") Edit


			b-modal(v-model="modalShow" hide-footer=true)
				b-card(:title="(model.user_id ? 'Edit user ID #' + model.user_id : 'New user')")
					form(@submit.prevent="saveUser")
						b-form-group(label="First Name")
							b-form-input(type="text" v-model="model.user_fname")
						b-form-group(label="Last Name")
							b-form-input(type="text" v-model="model.user_lname")
						b-form-group(label="Role")
							b-form-input(type="text" v-model="model.user_role")
						b-form-group(label="Email")
							b-form-input(type="text" v-model="model.user_email")
						div(slot="modal-footer" class="text-right")
							b-btn.mdl(type="submit" variant="success" @click="modalShow=false") 
								i(class="fa fa-check") 
								span.mdl Save user
							b-btn.mdl(class="btn" v-if="model.user_id ? true : false" variant="danger" @click.prevent="clear()" @click="modalShow=false")
								i(class="fa fa-close") 
								span.mdl Cancel
</template>

<style lang="scss">
.status{
  color: green;
  text-align: center;
  font-weight: bolder;
}

.mdl{
  margin: 3px;
  font-weight: bold;
}

td {
  font-weight: bold;
}

th {
  font-weight: bolder;
}

.btn {
  border: none;
  color: white;
  padding: 12px 16px;
  font-size: 16px;
  cursor: pointer;
}

.tblbtn{
  width: 105px;
  margin: 5px;
  font-weight: bolder;
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
    }
	},
	
  async created () {
    this.refreshUsers()
	},
	
  methods: {
    async refreshUsers () {
      this.loading = true
      this.users = (await userService.getUsers()).data.allUser
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
          this.modal('show');
          
      }else{
        alert('Successfully created')
        await userService.updateUser(this.model.user_id, this.updateModel)
      this.model = {}
      await this.refreshUsers()
      }
      }

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
      this.model = {}
    }
  }

		}
</script>
