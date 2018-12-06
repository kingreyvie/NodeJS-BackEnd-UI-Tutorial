import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import Hello from '@/components/Hello'
import UserManager from '@/components/UserManager'
import AddUser from '@/components/AddUser'
Vue.use(Router)
export default new Router({
  routes: [{
    path: '/hello',
    name: 'Hello',
    component: Hello
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/user-manager',
    name: 'UserManager',
    component: UserManager
  }, 
  {
    path: '/adduser',
    name: 'AddUser',
    component: AddUser
  }
  ]
})
