import efixService from '../services/efix.service.js';

export const EFIX_CHOSE_ELEMENT = 'EFIX_CHOSE_ELEMENT'
export const ADD_COMPONENT = 'ADD_COMPONENT'
// export const DELETE_COMPONENT = 'ADD_COMPONENT'
// export const TODO_UPDATE      = 'TODO_UPDATE';
// export const TODO_CREATE      = 'TODO_CREATE';

// import todoService from '../services/todo.service'

const state = {
  chosenElement: null,
  components: []
//   todos: [],
//   filterBy: { status: null, txt: null }
};

const getters = {
  components: state => {
    return state.components
  }
//   filteredTodos({ filterBy, todos }) {
//     var res = todos;
//     if (filterBy.txt) {
//       // TODO: use regex
//       res = res.filter(todo => todo.txt.includes(filterBy.txt))
//     }
//     if (filterBy.status === 'completed') {
//       res = res.filter(todo => todo.completed)
//     }
//     return res;
//   },

//   completedTodos(state) {
//     return state.todos.filter(todo => todo.completed)
//   },
//   progress({ todos }, getters) {
//     if (todos.length === 0) return 100;
//     return parseInt((getters.completedTodos.length / todos.length) * 100);
//   }
}


const mutations = {
  [EFIX_CHOSE_ELEMENT](state, payload) {
    state.chosenElement = payload.type;
    // console.log("Store value changed: " + payload);
  },
  [ADD_COMPONENT](state, payload) {
    const cmpObj = efixService.buildCmpObj(payload);
    console.log("Id of new cmp: " + cmpObj.id);
    state.components.push(cmpObj);
  },
  deleteCmp(state, cmp) {
    const idx = state.components.findIndex(currCmp => {
      return currCmp.id === cmp.id;
    });
    state.components.splice(idx, 1);
  },
  editCmp(state, payload) {
    const idx = state.components.findIndex(currCmp => {
      return currCmp.id === payload.cmp.id;
    });
    state.components.splice(idx, 1, payload.cmp);
  },
  // Gallery mutations
  setActiveImage (state, params) {
    state.components.filter(function(data){return data.id==params[1]})[0].data.activeImage = params[0];
  },
  setImage (state, params) {
    var data = state.components.filter(function(data){return data.id==params[1]})[0].data;
    data.images[data.activeImage] = params[0];
  },
  deleteActiveImage (state, id) {
    var data = state.components.filter(function(data){return data.id==id})[0].data;
    data.images.splice(data.activeImage ,1);
  }
//   [TODO_UPDATE](state, { todo }) {
//     const idx = state.todos.findIndex(currTodo => currTodo._id === todo._id)
//     state.todos.splice(idx, 1, todo);
//   },
//   [TODO_CREATE](state, { todo }) {
//     state.todos.push(todo)
//   },
//   SET_FILTER(state, { filter }) {
//     state.filterBy = filter;
//   }
}

const actions = {

    // Gallery actions
    setActiveImage({ commit }, params) {
        commit("setActiveImage", params);
    },
    setImage({ commit }, params) {
        commit("setImage", params);
    },
    deleteActiveImage({ commit }, id) {
        commit("deleteActiveImage", id);
    },

//   [TODO_LOAD](context, payload) {
//     todoService.query()
//       .then(todos => {
//         payload.todos = todos;
//         context.commit(payload)
//       });
//   }
}

export const efixStore = {
  state,
  mutations,
  getters,
  actions
}
