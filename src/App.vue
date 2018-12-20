<template lang="pug">
div
  nav.navbar.is-danger(role="navigation", aria-label="main navigation")
    .navbar-brand
      router-link(to="/")
        a.navbar-item
          img(src="https://bulma.io/images/bulma-logo-white.png" alt="Bulma")

      a.navbar-burger(role="button", aria-label="menu", aria-expanded="false")
        span(aria-hidden="true")
        span(aria-hidden="true")
        span(aria-hidden="true")

    .navbar-menu#navbarBasicExample
      .navbar-start
        router-link.as(to="/")
          h1.navbar-item.navbarTitle Home
        router-link.as(to="/user-manager")
          h1.navbar-item.navbarTitle Users
        router-link.as(to="/adduser")
          h1.navbar-item.navbarTitle Add User
        router-link.as(to="/editusermodal")
          h1.navbar-item.navbarTitle Edit User Modal

      .navbar-end
        .buttons
          a.button.is-warning
            strong Sign up
          a.button.is-info.bmargin.has-text-light(href="/login")
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
.navbar-brand{
  font-family: $font;
  color: #2c3e50;
}
body{
  font-family: $font;
  font-size:18px;
}
span{
  font-family: $font;
  font-size: 18px;
}
a{
  color:black !important;
}
.navbar-start{
  h1{
    color:white;
    font-weight: bolder;
  }
  h1:hover{
    background-color: rgba(152, 14, 14, 0.55);
  }
}  
</style>