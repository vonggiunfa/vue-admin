import { createStore } from "vuex";

const store = createStore({
  state: () => {
    return {
      name: "codedemo",
    };
  },
});

export default store;
