/* eslint space-before-function-paren: "error" */
/* eslint-env es6 */
import Api from './Api'
export default{
  getUsers () {
    // this will make a get request in
    // http://localhost:8081/api/user
    return Api().get('user')
  },
  createUser (user) {
    // this will make a post request in
    // http://localhost:8081/api/user
    return Api().post('user', user)
  },
  getUser (id) {
    // this will make a get request in
    // http://localhost:8081/api/user/:id
    return Api().get(`user/${id}`)
  },
  updateUser (id, user) {
    // this will make a put request in
    // http://localhost:8081/api/user/:id
    return Api().put(`user/${id}`, user)
  },
  deleteUser (id, user) {
    // this will make a put request in
    // http://localhost:8081/api/user/:id
    return Api().put(`user/${id}`, user)
  }
}
