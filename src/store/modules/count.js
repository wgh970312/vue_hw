// 计数器
export default {
  namespaced: true,
  state: () => ({
    n: 1
  }),
  getters: {
    // (state, getter) => {}
    plusOne: state => {
      return state.n + 1;
    }
  }
};
