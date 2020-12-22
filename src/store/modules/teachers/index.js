import mutations from './mutations';
import getters from './getters';
import actions from './actions';

export default {
  namespaced: true,
  state() {
    return {
      teachers: [
        {
          id: 't1',
          firstName: 'Ari',
          lastName: 'Bambang',
          areas: ['backend', 'frontend'],
          description: "I'm Ari and i have worked as a fullstack developer",
          hourlyRate: 30,
        },
      ],
    };
  },
  mutations,
  getters,
  actions,
};
