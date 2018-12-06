<template>
<!-- modal for the save user-->
    <b-modal v-model="modalShow" hide-footer="true">
                                
    <b-card :title="(model.user_id ? 'Edit user ID #' + model.user_id : 'New user')">
        <form @submit.prevent = "saveUser">

            <b-form-group label = "First Name">
                <b-form-input type = "text" v-model = "model.user_fname"></b-form-input>
            </b-form-group>

            <b-form-group label = "Last Name">
                <b-form-input type = "text" v-model = "model.user_lname"></b-form-input>
            </b-form-group>

            <b-form-group label = "Role">
                <b-form-input type = "text" v-model = "model.user_role"></b-form-input>
            </b-form-group>

            <b-form-group label = "Email">
                <b-form-input type = "text" v-model = "model.user_email"></b-form-input>
            </b-form-group>

            <div slot="modal-footer" class="text-right">
                    <b-btn type = "submit" variant = "success" @click="modalShow=false">Save user</b-btn>
                    <b-btn v-if = "model.user_id ? true : false" variant = "danger" @click.prevent = "clear()" @click="modalShow=false">Cancel</b-btn>
            </div>

        </form>
    </b-card>
    </b-modal>
</template>

<script>
export default {

}
</script>

<style>

</style>
