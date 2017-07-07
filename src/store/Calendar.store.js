// import efixService from '../services/efix.service.js';

 export const CALENDAR_REMOVE_EVENT       = 'CALENDAR_REMOVE_EVENT'
 export const CALENDAR_ADD_EVENT       = 'CALENDAR_ADD_EVENT'
// export const TODO_UPDATE      = 'TODO_UPDATE';
// export const TODO_CREATE      = 'TODO_CREATE';

// import todoService from '../services/todo.service'

const state = {
     events: [{
        date: '2017/7/8',
        title: 'Foo',
        desc: 'longlonglong description'
      },{
        date: '2016/11/12',
        title: 'Bar'
      }],
};

const getters = {
    // components: state => {
    //   return state.components
    // }

}


const mutations = {
  [CALENDAR_REMOVE_EVENT](state, payload) {
      console.log("removing item from the calendar store with the payload:" + payload);
    state.events.splice(payload,1);
  },
  [CALENDAR_ADD_EVENT](state, payload) {
    console.log('adding new event to Calendar store, with the payload: ' + payload);
    state.events.push(payload);
  },
//   setActiveImage (state, active_image) {
//     state.components[0].data.activeImage = active_image;
//   },
//   deleteActiveImage (state) {
//     state.components[0].data.images.splice(state.components[0].data.activeImage ,1);
//   },
}

const actions = {
    setActiveImage({ commit }, active_image) {
        commit("setActiveImage", active_image);
    },
    deleteActiveImage({ commit }) {
        commit("deleteActiveImage");
    },
}

export const calendarStore = {
  state,
  mutations,
  getters,
  actions
}