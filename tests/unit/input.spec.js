import Vue from "vue";
import { mount, shallowMount } from "@vue/test-utils";
import HInput from "@/components/h-ui/HInput";

describe("测试input双向绑定", () => {
  // function getHInput() {
  //   return mount({
  //     components: { HInput },
  //     template: `
  //       <div>
  //         <h-input v-model="name" />
  //       </div>
  //     `,
  //     data() {
  //       return {
  //         name: "hi"
  //       };
  //     }
  //   });
  // }

  it("输入", done => {
    let wrapper = mount(
      {
        components: { HInput },
        template: `
        <div>
          <h1>{{name}}</h1>
          <h-input type="text" v-model="name"></h-input>
        </div>
      `,
        data() {
          return {
            name: "hi"
          };
        }
      },
      {
        mocks: {
          $dispatch: function(eventName, data) {
            let parent = this.$parent;
            while (parent) {
              parent.$emit(eventName, data);
              parent = parent.$parent;
            }
          }
        }
      }
    );

    expect(wrapper.find("input").element.value).toBe("hi");
    wrapper.find("input").setValue("hello");
    expect(wrapper.find("input").element.value).toBe("hello");
    expect(wrapper.vm.name).toBe("hello");

    wrapper.find("input").trigger("blur");

    wrapper.vm.name = "wrold";
    wrapper.vm.$nextTick(() => {
      expect(wrapper.find("input").element.value).toBe("wrold");
      done();
    });
  });

  // it("测试绑定", () => {
  //   // 期望渲染完成后input的值是hi
  //   let wrapper = shallowMount(<h-input />)

  //   // console.log(wrapper.vm.name);
  //   // wrapper.vm.test();
  //   // console.log(wrapper.vm.name);
  //   // console.log(wrapper.find("#jest-div").text());
  //   // expect(wrapper.find("input").attributes().type).toBe("text");
  //   expect(wrapper.find("input").element.value).toBe("hi");
  //   wrapper.vm.name = "hello world";
  //   expect(wrapper.find("input").element.value).toBe("hello world");
  // });

  // it("测试修改", () => {
  //   let wrapper = getHInput();
  //   wrapper.vm.name = "hello";
  //   expect(wrapper.vm.name).toBe("hello");
  // });
});
