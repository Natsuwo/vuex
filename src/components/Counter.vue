<template>
  <div>
    <button class="btn btn-success" @click="increment">Increment</button>
    <button class="btn btn-success" @click="asyncDecrement">Decrement</button>
    <hr>
    <!-- <input type="text" :value="value" @input="updateValue"> -->
    <input type="text" v-model="value">
    <p>Text {{ value }}</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    value: {
      // return this.$store.getters.value
      get() {
        return this.$store.getters.value
      },
      set(value) {
        this.$store.dispatch('updateValue', value)
      }
    }
  },
  methods: {
    ...mapActions(["increment", "asyncDecrement"]),
    // updateValue(event) {
    //   this.$store.dispatch('updateValue', event.target.value)
    // }
  }
};
</script>
