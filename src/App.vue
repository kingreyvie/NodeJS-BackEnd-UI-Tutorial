/* eslint-plugin-disable */
<template lang="pug">
div
  nav.navbar.is-info(role="navigation", aria-label="main navigation")
    .navbar-brand
      a.navbar-item(href="#")
        img(src="https://bulma.io/images/bulma-logo.png" alt="Bulma")

      a.navbar-burger(role="button", aria-label="menu", aria-expanded="false")
        span(aria-hidden="true")

    .navbar-menu#navbarBasicExample
      .navbar-start
        a.navbar-item(href="/hello") Home
        a.navbar-item(href="/user-manager") User Manager
        a.navbar-item(href="/adduser") Add User

      .navbar-end
        .buttons
          a.button.is-warning
            strong Sign up
          a.button.is-primary(href="/login")
            strong Log in
  router-view
</template>


<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>