<template>
  <div>
    <h2>parent</h2>
    <div>msg: {{ msg }}</div>
    <Child :name="1" @onMsg="onMsg" />
  </div>
</template>
<script>
import Child from "./Child";

export default {
  components: { Child },
  data() {
    return {
      msg: ""
    };
  },
  methods: {
    onMsg(msg) {
      this.msg = msg;
    }
  }
};
</script>
