// Notice.vue的动态渲染
import Vue from "vue";
import Notice from "./Notice.vue";

Notice.newInstance = properties => {
  const props = properties || {};
  const instance = new Vue({
    data: props,
    render: h => <Notice props={props} />
  });
  const component = instance.$mount();
  document.body.appendChild(component.$el);

  const notice = instance.$children[0];

  return {
    add(noticeProps) {
      notice.add(noticeProps);
    },
    remove(name) {
      notice.remove(name);
    }
  };
};

export default Notice;
