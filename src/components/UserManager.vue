
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
							td(v-if="user.user_isdel==0" variant="outline-success" v-bind:style="{'color': 'green', 'text-align': 'center', 'font-weight': 'bolder'}") Active
							td(v-else v-bind:style="{ 'color': 'red', 'text-align': 'center', 'font-weight': 'bolder' }") Inactive
								td.text-right
									b-button(v-if = "user.user_isdel == 1" variant="outline-success" :pressed="true" @click.prevent = "deleteUser(user.user_id,user.user_isdel)" v-bind:style="{'width': '105px', 'margin':'10px', 'font-weight': 'bolder'}") Activate
									b-button(v-else variant="outline-danger" :pressed="true" @click.prevent = "deleteUser(user.user_id,user.user_isdel)" v-bind:style="{'width': '105px', 'margin':'10px', 'font-weight': 'bolder'}") Deactivate
									a(ref = "#" @click.prevent = "populateUserToEdit(user)" variant="success" @click="modalShow=true") 
										b-button(:pressed="true" @click="modalShow = !modalShow" variant="primary sm" v-bind:style="{'font-weight': 'bolder'}") 
											i(class="fa fa-edit")
											span(v-bind:style="{'margin': '5px'}") Edit
											

			b-modal(v-model="modalShow" hide-footer="true")
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
							b-btn(type="submit" variant="success" @click="modalShow=false") Save user
							
							b-btn(class="btn" v-if="model.user_id ? true : false" variant="danger" @click.prevent="clear()" @click="modalShow=false")
								i(class="fa fa-close") 
									span Cancel
</template>

<style lang="scss">
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
        await userService.updateUser(this.model.user_id, this.updateModel)
      } else {
        await userService.createUser(this.model)
      }
      this.model = {}
      await this.refreshUsers()
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
