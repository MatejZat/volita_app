<template>
    <section>
        <h1>{{ currentCase.title }}</h1>
    </section>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            currentCase: {},
        }
    },

    created() {
        axios.get( `https://jsonplaceholder.typicode.com/todos/${ this.$route.params.id }` )
            .then( response => this.currentCase = response.data );
    },
}
</script>