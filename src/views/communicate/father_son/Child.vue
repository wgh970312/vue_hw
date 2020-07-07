<template>
  <div>
    <h2 @click="click">Child{{ name }}</h2>
  </div>
</template>
<script>
export default {
  props: ["name"],
  methods: {
    click() {
      this.$emit("onMsg", "子组件传递消息");
    }
  }
};
</script>
