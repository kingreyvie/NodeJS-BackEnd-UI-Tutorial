<template lang="pug">
    .hero
      span
        h1.title Employees

        user-lists(
          :user="users" 
          ref="userListRef"
          )
        edit-user-modal(
          :editmodel="model",
          ref="editUserModalRef",
          v-on:updateUser="updateUser"
        )
        view-user-modal(
          :viewmodel="model",
          ref="viewUserModalRef"
        )
        alert-modal(
          :msg = "msg"
        )
      router-view
</template>

<script>
		import userService from './userService'
    import EditUserModal from '@/Modals/EditUserModal'
    import ViewUserModal from '@/Modals/ViewUserModal'
    import AlertModal from '@/Modals/AlertModal'
    import UserLists from './UserLists'
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
      showEditModal: false,
      screen: screen.width,
      editActive: '',
      msg: ''
    }
	},
  async created () {
    this.refreshUsers()
  },
  

  components: {
    EditUserModal,
    ViewUserModal,
    AlertModal,
    UserLists
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
    async updateUser () {
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
        this.$refs.editUserModalRef.showModal()
    },
    openView(){
        this.$refs.viewUserModalRef.showModal()
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
    },
    async editmodalopen(){
      openeditmodal = true;
    }
  }

		}
</script>


<style lang="scss" scoped>
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
.iconspc{
  margin-right: 3px;
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

.btn {
  border: none;
  color: white;
  padding: 12px 16px;
  font-size: 16px;
  cursor: pointer;
}

.tblbtn{
  margin: 5px;
  width: 115px;
  }
.tblicon{
  margin: 5px;
  }
</style>
