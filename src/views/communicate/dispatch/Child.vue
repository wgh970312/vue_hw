<template>
  <div>
    <div>Child1</div>
    <Child />
  </div>
</template>
<script>
import Child from "./Child2.vue";
export default {
  components: { Child }
};
</script>
