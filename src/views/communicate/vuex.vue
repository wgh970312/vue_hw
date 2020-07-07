<template>
  <div>
    <h2>vuex</h2>
    <div>n:{{ n }}</div>
    <div>plusOne:{{ plusOne }}</div>
    <div>n:{{ n2 }}</div>
    <div>plusOne:{{ plusOne2 }}</div>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    n() {
      return this.$store.state.count.n;
    },
    plusOne() {
      return this.$store.getters["count/plusOne"];
    },
    ...mapState({
      n2: state => state.count.n
    }),
    ...mapGetters({
      plusOne2: "count/plusOne"
    })
  }
};
</script>
