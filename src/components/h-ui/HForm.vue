<template>
  <form>
    <slot />
  </form>
</template>

<script>
export default {
  props: ["model", "rules"],
  provide() {
    return {
      form: this
    };
  },
  methods: {
    validate(cb) {
      // 执行所有formitem的校验方法
      const tasks = this.$children
        .filter(v => v.prop)
        .map(item => item.validate());

      Promise.all(tasks)
        .then(() => cb(true))
        .catch(() => cb(false));
    }
  }
};
</script>

<style></style>
