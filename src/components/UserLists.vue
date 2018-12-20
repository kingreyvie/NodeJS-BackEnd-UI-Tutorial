<template>
    <section>

        <b-table
            :data="user"
            bordered
            narrowed
            hoverable
            striped
            hasMobileCards>

            <template slot-scope="props">
                <b-table-column field="user_id" label="ID" width="40" numeric>
                    {{ props.row.user_id }}
                </b-table-column>

                <b-table-column field="user_fname" label="First Name">
                    {{ props.row.user_fname }}
                </b-table-column>

                <b-table-column field="user_lname" label="Last Name">
                    {{ props.row.user_lname }}
                </b-table-column>

                <b-table-column field="user_role" label="Role">
                    {{ props.row.user_role }}
                </b-table-column>

                <b-table-column field="user_email" label="Email">
                    {{ props.row.user_email }}
                </b-table-column>


            </template>

            <template slot="empty">
                <section class="section">
                    <div class="content has-text-grey has-text-centered">
                        <p>
                            <b-icon
                                icon="emoticon-sad"
                                size="is-large">
                            </b-icon>
                        </p>
                        <p>Nothing here.</p>
                    </div>
                </section>
            </template>
        </b-table>
    </section>
</template>


<script>
    export default {
        props: ['user'],
        data() {
            return {
                data
            }
        }
    }
</script>