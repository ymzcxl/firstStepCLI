import { createStore } from "vuex";

const defaultState = {
  tabShow: false,
  date: new Date()
};

// Create a new store instance.
export default createStore({
  state() {
    return defaultState;
  },
  mutations: {
    allowTabShow(state: typeof defaultState, show:boolean) {
      // state.count = state.count+1;
      state.tabShow = show;
    }
  },
  actions: {
    allowTabShow(context) {
      context.commit("increment");
    }
  },
  getters: {
    tabShow(state: typeof defaultState) {
      return state.tabShow;
    }
  }
});
