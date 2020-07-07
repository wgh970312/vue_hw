<template>
  <div class="component">
    <h2>ancestors</h2>
    <Child />
  </div>
</template>
<script>
import Child from "./Child";

export default {
  components: { Child },
  provide: {
    provide: "ancestors"
  }
};
</script>
