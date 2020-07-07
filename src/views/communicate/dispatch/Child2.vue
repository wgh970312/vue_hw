<template>
  <div>
    <div @click="click">Child2: {{ msg }}</div>
    <Child />
  </div>
</template>
<script>
import Child from "./Child3";
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
  },
  methods: {
    click() {
      this.$boardcast("msg2", "来自Child2的消息: Click");
    }
  }
};
</script>
