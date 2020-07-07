<template>
  <div class="component">
    <h2 @click="eventClick">Parent: {{ msg }}</h2>
    <Child />
  </div>
</template>
<script>
import Child from "./Child";

export default {
  components: { Child },
  data() {
    return {
      msg: ""
    };
  },
  mounted() {
    this.$bus.$on("bus_msg", msg => {
      this.msg = msg;
    });
  },
  methods: {
    eventClick() {
      this.$bus.$emit("bus_msg", "来自Parent的消息: Click");
    }
  }
};
</script>
<style lang="scss">
.child {
  display: flex;
}
</style>
