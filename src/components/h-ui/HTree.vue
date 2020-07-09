<template>
  <ul>
    <li v-for="(item, index) in data" :key="index">
      <span>{{ item.content }}</span>
      <h-tree v-if="item.children" :data="item.children" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "HTree",
  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style></style>
