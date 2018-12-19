<template lang="pug">
div
  nav.navbar.is-danger(role="navigation", aria-label="main navigation")
    .navbar-brand
      a.navbar-item(href="/")
        img(src="https://bulma.io/images/bulma-logo-white.png" alt="Bulma")

      a.navbar-burger(role="button", aria-label="menu", aria-expanded="false")
        span(aria-hidden="true")
        span(aria-hidden="true")
        span(aria-hidden="true")

    .navbar-menu#navbarBasicExample
      .navbar-start
        router-link.as(to="/")
          a.navbar-item Home
        router-link.as(to="/user-manager")
          a.navbar-item Users
        router-link.as(to="/adduser")
          a.navbar-item Add User
        router-link.as(to="/editusermodal")
          a.navbar-item Edit User Modal

      .navbar-end
        .buttons
          a.button.is-warning
            strong Sign up
          a.button.is-primary.bmargin(href="/login")
            strong Log in
  router-view
</template>


<script>
import Hello from './components/Hello.vue'
export default {
  name: 'app',
  components: {
    'hello-comp': Hello
  },
  data(){
    return{
      component: 'hello-comp'
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Thasadith');
@import url('https://fonts.googleapis.com/css?family=Cantarell');
$font: 'Cantarell';
.bmargin{
  margin-right:15px;
}
#app {
  font-family: $font;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.as{
  font-weight:bolder;
  font-size: 20px;
  font-family: 'Thasadith';
}
body{
  font-family: $font;
  font-size:18px;
}
span{
  font-family: $font;
  font-size: 18px;
}
</style>