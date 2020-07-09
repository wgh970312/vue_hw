<template>
  <div>
    <!-- <h-form :model="model" :rules="rules" ref="form">
      <h-form-item label="姓名" prop="name">
        <h-input v-model="model.name" />
      </h-form-item>
      <h-form-item label="年龄" prop="age">
        <h-input v-model="model.age" />
      </h-form-item>
    </h-form>
    <button @click="submit">提交</button> -->
    <h-input v-model="name" />
    <button @click="name = 'hello'">change</button>
  </div>
</template>

<script>
import HInput from "@/components/h-ui/HInput";
import HFormItem from "@/components/h-ui/HFormItem";
import HForm from "@/components/h-ui/HForm";
export default {
  components: {
    HInput,
    HFormItem,
    HForm
  },
  data() {
    return {
      model: {
        name: "",
        age: ""
      },
      rules: {
        name: { required: true, message: "请输入姓名" },
        age: { required: true, message: "请输入年龄" }
      },
      name: "hi"
    };
  },
  methods: {
    submit() {
      this.model.name = "1";
      // this.$refs.form.validate(valid => {
      //   console.log("valid", valid);
      // });
    }
  }
};
</script>

<style></style>
