<template lang="pug">
div
  nav.navbar.is-link(role="navigation", aria-label="main navigation")
    .navbar-brand
      a.navbar-item(href="/")
        img(src="https://bulma.io/images/bulma-logo-white.png" alt="Bulma")

      a.navbar-burger(role="button", aria-label="menu", aria-expanded="false")
        span(aria-hidden="true")
        span(aria-hidden="true")
        span(aria-hidden="true")

    .navbar-menu#navbarBasicExample
      .navbar-start
        a.navbar-item(href="/") Home
        a.navbar-item(href="/user-manager") Users
        a.navbar-item(href="/adduser") Add User
        a.navbar-item(href="/editusermodal") Edit User Modal

      .navbar-end
        .buttons
          a.button.is-warning
            strong Sign up
          a.button.is-primary.bmargin(href="/login")
            strong Log in
  router-view
</template>


<script>
export default {
  name: 'app'
}
</script>

<style>
.bmargin{
  margin-right:15px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

html{
}
</style>