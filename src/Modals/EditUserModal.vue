<template>
<div class="modal" v-bind:class="openeditmodal">
  <div class="modal-background"></div>
  <div class="modal-content">
    <p class="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="">
    </p>
  </div>
  <button class="modal-close is-large" aria-label="close" @click="CloseModal"></button>
</div>



</template>


<script>
 
export default {
  props: ['openeditmodal'],
  methods:{
    CloseModal(){
      this.$emit('closeRequest')
    }
  }
}
</script>