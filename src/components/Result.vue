<template>
    <p>This is result: {{ result }}</p>
</template>

<script>
import { mapState } from "vuex";
export default {
    computed: {
        ...mapState({
            result: state => state['Result'].result
        })
    }
}
</script>
