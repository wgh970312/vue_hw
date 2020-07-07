<template>
  <div>
    <div @click="click">Child3: {{ msg }}</div>
    <!-- <Child /> -->
  </div>
</template>
<script>
// import Child from "./Child4";
export default {
  // components: { Child },
  data() {
    return {
      msg: ""
    };
  },
  mounted() {
    this.$on("msg2", msg => {
      this.msg = msg;
    });
  },
  methods: {
    click() {
      this.$dispatch("msg", "来自Child3的消息：Click");
    }
  }
};
</script>
