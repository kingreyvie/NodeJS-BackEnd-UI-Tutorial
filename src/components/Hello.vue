<template lang="pug">
  .hero
    .container
      h1.title WELCOME
        p.subtitle This User Manager Single Webpage is created with 
          strong(style="color: blue" ) Bulma 
          span and 
          strong(style="color: green") Vue.js
      img(:class="{ 'tgl': Clicked }" src="https://vignette.wikia.nocookie.net/dragonball/images/b/bc/Bulma_B.jpg/revision/latest?cb=20130219233124")
      img.is-small(:class="{ 'tgl': Clicked }" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png")
      button.button(@click="clickmethod") Alisin si Bulma at Vue.js 

</template>

<script>
export default {
  data() {
    return {
      Clicked: false
    }
  },
  methods: {
    clickmethod() {
      if (this.Clicked) {
        this.Clicked = 'hidden';
      } else {
        this.Clicked = 'true';
      }
    }
  }
}
</script>

<style scoped lang="scss">

.is-small {
  width: 200px;
}

.hero {
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.lead {
  font-weight: 200;
  font-size: 1.5rem;
}

.title {
  font-size: 70px;
}

.subtitle {
  margin: 10px;
  font-size: 30px;
}

.tgl {
  display: none;
}

</style>
