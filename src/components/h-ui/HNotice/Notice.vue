<template>
  <div class="box">
    <div class="box-content" v-for="item in notices" :key="item.id">
      {{ item.content }}
    </div>
  </div>
</template>

<script>
let seed = 0;
export default {
  data() {
    return {
      notices: []
    };
  },
  methods: {
    add(notice) {
      const id = `k_${seed++}`;
      this.notices.push({
        ...notice,
        id
      });

      const duration = notice.duration || 1500;
      setTimeout(() => {
        this.remove(id);
      }, duration);
    },
    remove(id) {
      this.notices = this.notices.filter(v => v.id !== id);
    }
  }
};
</script>

<style lang="scss">
.box {
  position: fixed;
  width: 100px;
  top: 16px;
  left: 0;
  text-align: center;
  pointer-events: none;

  &-content {
    width: 200px;
    margin: 10px auto;
    font-size: 14px;
    border: red 3px solid;
    padding: 8px 16px;
    background: #fff;
    border-radius: 3px;
    margin-bottom: 8px;
  }
}
</style>
