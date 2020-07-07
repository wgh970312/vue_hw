<template>
  <div>
    <label>{{ label }}</label>
    <slot />
    <p style="color: red">{{ error }}</p>
  </div>
</template>

<script>
import Schema from "async-validator";

export default {
  props: ["label", "prop"],
  inject: ["form"],
  data() {
    return {
      error: ""
    };
  },
  mounted() {
    this.$on("validate", this.validate);
  },
  methods: {
    validate() {
      // 获取rules
      const rules = this.form.rules[this.prop];
      // 获取数据模型
      const value = this.form.model[this.prop];
      let desciptor = {
        [this.prop]: rules
      };
      const schema = new Schema(desciptor);
      return schema.validate(
        {
          [this.prop]: value
        },
        errors => {
          if (errors) {
            this.error = errors[0].message;
          } else {
            this.error = "";
          }
        }
      );
    }
  }
};
</script>

<style></style>
