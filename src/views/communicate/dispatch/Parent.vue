<template>
  <div class="component">
    <h2>Parent: {{ msg }}</h2>
    <div class="child">
      <Child />
      <Child />
    </div>
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
    this.$on("msg", msg => {
      this.msg = msg;
    });
  }
};
</script>
<style lang="scss">
.child {
  display: flex;
}
</style>
