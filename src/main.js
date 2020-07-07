import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.prototype.$dispatch = function(eventName, data) {
  let parent = this.$parent;
  while (parent) {
    parent.$emit(eventName, data);
    parent = parent.$parent;
  }
};

Vue.prototype.$boardcast = function(eventName, data) {
  boardcast.call(this, eventName, data);
};

function boardcast(eventName, data) {
  this.$children.forEach(child => {
    child.$emit(eventName, data);
    if (child.$children.length) {
      boardcast.call(child, eventName, data);
    }
  });
}

Vue.prototype.$bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
