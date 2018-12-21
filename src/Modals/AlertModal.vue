<template lang="pug">
  section
     .modal(:class="viewActive")
        .modal-background.is-rounded(@click.prevent="hideModal()")
        .modal-content.is-rounded(style="background-color: white; margin: 50px; border-radius: 30px; overflow-y: hidden")
          form(@submit.prevent="viewUser()" style="margin: 50px; height: 600px; overflow-y: hidden")
            h1.title The Account {{msg}}
            h2.subtitle Name:
            h2.subtitle Role: 
            h2.subtitle Email: 

            .field.buttons.is-right(style="margin-top: 30px")
              button.button.is-danger.is-rounded(@click.prevent="hideModal()")
                span(class="icon") 
                  i(class="fas fa-times") 
                span Close 

          router-view
</template>
<script>
export default {
  props: ['msg'],

  data() {
    return {
      viewActive: false
    }
  },

  methods: {
    async alert() {
        this.$dialog.alert('Everything looks fine!')
    },
    async showModal(){
      this.viewActive = "is-active"
    },

    async viewUser(){
      this.hideModal()
    },

    async hideModal(){
      this.viewActive = ""
    }

  }
}
</script>

<style lang="scss" scoped>
select{
  width: 100px !important;
}
h2{
  margin-bottom:50px !important;
}
input[type="text"], select{
  margin-bottom: 15px;
  border: 1px solid rgb(24, 24, 24) !important;
}
</style>