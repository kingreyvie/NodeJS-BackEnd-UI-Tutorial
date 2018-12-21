<template>
    <section>
        <button class="button is-medium is-primary" @click="confirm">
            Launch alert (default)
        </button>
    </section>
</template>

<script>

    export default {
        data() {
            return {
                isPaginated: true,
                isPaginationSimple: false,
                defaultSortDirection: 'asc',
                currentPage: 1,
                perPage: 5
            }
        }, 
        methods: {
            confirm() {
                this.$dialog.confirm({
                    message: 'Continue on this task?',
                    onConfirm: () => this.$toast.open('User confirmed')
                })
            }
    }
    }
</script>