<template>
  <div>
    <div @click="eventClick">Child2: {{ msg }}</div>
    <Child />
  </div>
</template>
<script>
import Child from "./Child3.vue";
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
      this.$bus.$emit("bus_msg", "来自Child2的消息: Click");
    }
  }
};
</script>
