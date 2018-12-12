<template lang="pug">
  .hero
    h1.title WELCOME
      p.subtitle This User Manager Single Webpage is created with 
        strong(style="color: blue") Bulma 
        span and 
        strong(style="color: green") Vue.js
    span
      img(src="https://vignette.wikia.nocookie.net/dragonball/images/b/bc/Bulma_B.jpg/revision/latest?cb=20130219233124", style="width: 200px;")
      img(src="https://www.symbols.com/gi.php?type=1&id=1608" style="width: 400px; height: 400px;")
      img(src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png", style="width: 400px;")
</template>

<style scoped lang="scss">
.hero {
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  .lead {
    font-weight: 200;
    font-size: 1.5rem;
  }
.title{
  font-size: 70px;
}
.subtitle{
  margin: 10px;
  font-size: 30px;
}
}
</style>
