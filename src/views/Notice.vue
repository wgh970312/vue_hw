<template>
  <div>
    <h3>自定义Notice</h3>
    <span>单例，动态渲染</span>
    <button @click="notice">notice</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    };
  },
  methods: {
    notice() {
      this.$Notice.info({
        content: `click${this.count++}`,
        duration: 1500
      });
    }
  }
};
</script>

<style></style>
