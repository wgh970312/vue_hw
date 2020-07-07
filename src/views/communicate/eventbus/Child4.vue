<template>
  <div>
    <div @click="eventClick">Child4: {{ msg }}</div>
  </div>
</template>
<script>
export default {
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
      this.$bus.$emit("bus_msg", "来自Child4的消息: Click");
    }
  }
};
</script>
