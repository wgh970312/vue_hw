<template>
  <div>
    <div @click="eventClick">Child3: {{ msg }}</div>
    <Child />
  </div>
</template>
<script>
import Child from "./Child4.vue";
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
      this.$bus.$emit("bus_msg", "来自Child3的消息: Click");
    }
  }
};
</script>
