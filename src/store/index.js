import { createStore } from 'vuex';

import teachersModule from './modules/teachers/index.js';

const store = createStore({
  modules: {
    teachers: teachersModule,
  },
  state() {
    return {
      userId: 't3',
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    },
  },
});

export default store;
