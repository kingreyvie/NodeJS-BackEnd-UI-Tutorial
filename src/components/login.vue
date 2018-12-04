<template lang="pug">
	.hero
		b-card(title=('Login Form'))
			form(@submit.prevent = "saveUser")
				b-form-group(label="Username")
					b-form-input(type="text")
				b-form-group(label="Password")
					b-form-input(type="password")
				div(slot="modal-footer" class="text-right")
					b-btn(type="submit" variant="success") Login
					b-btn Clear
</template>

<style scoped>
  .hero {
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .hero .lead {
    font-weight: 300;
    font-size: 1.5rem;
  }
</style>

