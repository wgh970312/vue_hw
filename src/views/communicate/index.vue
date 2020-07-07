<template>
  <div>
    <div class="nav">
      <template v-for="(route, i) of using">
        <span v-if="!!i" :key="`sp-${i}`"> | </span>
        <router-link :to="route.to" :key="`link-${i}`">{{
          route.text
        }}</router-link>
      </template>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      using: [
        { to: "/communicate/props", text: "父子组件通信" },
        { to: "/communicate/brother", text: "兄弟组件通信" },
        { to: "/communicate/provide", text: "后代组件通信" },
        { to: "/communicate/dispatch&boardcast", text: "dispatch&boardcast" },
        { to: "/communicate/eventbus", text: "eventbus" },
        { to: "/communicate/vuex", text: "vuex" }
      ]
    };
  }
};
</script>
<style lang="scss">
.nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
