/* eslint-plugin-disable */
<template>
	<div class = "container-fluid mt-4">
		<b-alert :show = "loading" variant = "warning">Loading...</b-alert>
<div class="search-wrapper">
	<form>
		<b-input-group size = "lg" prepend = "Search First Name">
		<b-dropdown text="Drop"
		<b-input type="text" v-model = "search" placeholder = "Search First Name"/>
		<b-btn type = "submit" variant = "info" >Search user</b-btn>
	</b-input-group>
	</form>
	<br>
</div>
		<h1 class="h1">User Manager</h1>
<!--table-->
		<b-row>
			<b-col>
				<table class = "table table-striped table-hover" hover>
					<thead>
						<tr>
							<th>ID</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Role</th>
							<th>Email</th>
							<th v-bind:style = "{ 'text-align': 'center' }">Status</th>
							<th>&nbsp;</th>
						</tr>
					</thead>

					<tbody>
						<tr v-for = "user in users" :key = "user.id">
							<td>{{user.user_id}}</td>
							<td>{{user.user_fname}}</td>
							<td>{{user.user_lname}}</td>
							<td>{{user.user_role}}</td>
							<td>{{user.user_email}}</td>
							<td v-if = "user.user_isdel == 0" variant="outline-success" v-bind:style = "{ 'color': 'green', 'text-align': 'center' }">Active</td>
							<td v-else v-bind:style = "{ 'color': 'red', 'text-align': 'center' }">Inactive</td>

									<td class="text-right">
											<b-button v-if = "user.user_isdel == 1" variant="outline-success" :pressed="true" @click.prevent = "deleteUser(user.user_id,user.user_isdel)">Activate&nbsp;&nbsp;&nbsp;&nbsp;</b-button>
											<b-button v-else variant="outline-danger" :pressed="true" @click.prevent = "deleteUser(user.user_id,user.user_isdel)" >Deactivate</b-button>
										<a href = "#" @click.prevent = "populateUserToEdit(user)" variant="success" @click="modalShow=true">
											<b-button :pressed="true" @click="modalShow = !modalShow" variant="primary sm">Edit</b-button>
										</a>
										
									</td>

						</tr>
					</tbody>

				</table>
				<!-- end of table -->
			</b-col>





<!-- modal for the save user-->
			 <b-modal v-model="modalShow" hide-footer="true">
											
				<b-card :title="(model.user_id ? 'Edit user ID #' + model.user_id : 'New user')">
					<form @submit.prevent = "saveUser">

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
							<b-form-input type = "text" v-model = "model.user_email"></b-form-input>
						</b-form-group>

						<div slot="modal-footer" class="text-right">
								<b-btn type = "submit" variant = "success" @click="modalShow=false">Save user</b-btn>
								<b-btn v-if = "model.user_id ? true : false" variant = "danger" @click.prevent = "clear()" @click="modalShow=false">Cancel</b-btn>
						</div>

					</form>
				</b-card>
				</b-modal>
		</b-row>

	</div>



</template>





<script>
		import userService from './userService'
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
      modalShow: false
    }
  },
  async created () {
    this.refreshUsers()
  },
  computed: {

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
