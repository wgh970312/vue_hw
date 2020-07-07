<template>
  <input :value="value" @blur="onBlur" @input="onInput" />
</template>

<script>
export default {
  props: ["value"],
  methods: {
    onInput(e) {
      this.$emit("input", e.target.value);
      this.$dispatch("validate"); // 值改变时通知校验
    },
    onBlur() {
      this.$dispatch("validate"); // 失去焦点时通知校验
    }
  }
};
</script>

<style></style>
