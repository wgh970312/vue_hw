<template>
  <div>
    <h3>自定义循环组件</h3>
    <h-tree :data="data" />
  </div>
</template>

<script>
import HTree from "@/components/h-ui/HTree";
export default {
  components: { HTree },
  data() {
    return {
      data: [
        {
          content: "1",
          children: [
            {
              content: "1-1",
              children: [{ content: "1-1-1" }, { content: "1-1-2" }]
            },
            { content: "1-2" }
          ]
        },
        { content: "2" },
        {
          content: "3",
          children: [{ content: "3-1" }, { content: "3-2" }]
        },
        { content: "4" }
      ]
    };
  }
};
</script>

<style></style>
