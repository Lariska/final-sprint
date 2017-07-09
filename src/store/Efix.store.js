import efixService from '../services/efix.service.js';
import axios from 'axios';

export const EFIX_CHOSE_ELEMENT = 'EFIX_CHOSE_ELEMENT'
export const ADD_COMPONENT = 'ADD_COMPONENT'
const url = 'http://localhost:3003/';
// export const DELETE_COMPONENT = 'ADD_COMPONENT'
// export const TODO_UPDATE      = 'TODO_UPDATE';
// export const TODO_CREATE      = 'TODO_CREATE';

// import todoService from '../services/todo.service'

const state = {
  chosenElement: null,
  _id:'',
  components: []
//   todos: [],
//   filterBy: { status: null, txt: null }
};

const getters = {
  components: state => {
    return state.components
  },
  componentById: state => 
    id => state.components.find( component => component.id === id )
}


const mutations = {
  [EFIX_CHOSE_ELEMENT](state, payload) {
    state.chosenElement = payload.type;
    // console.log("Store value changed: " + payload);
  },
  [ADD_COMPONENT](state, payload) {
    const cmpObj = efixService.buildCmpObj(payload);
    state.components.push(cmpObj);
    axios.put(url + 'data/website/'+ state._id, Object.assign({}, state))
      .then(response => {
        state._id = response.data[0]._id;
        state.components = response.data[0].components;
        console.log('added')
      })
      .catch(e => {
        console.log('err',e)
        this.errors.push(e)
      })
  },
  deleteCmp(state, cmp) {
    const idx = state.components.findIndex(currCmp => {
      return currCmp.id === cmp.id;
    });
    const id = cmp.id;
    state.components.splice(idx, 1);
    axios.put(url + 'data/website/' + state._id,Object.assign({},state))
      .then(response => {
        state._id = response.data[0]._id;
        state.components = response.data[0].components;
        console.log('deleted')
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  editCmp(state, payload) {
    const idx = state.components.findIndex(currCmp => {
      return currCmp.id === payload.cmp.id;
    });
    state.components.splice(idx, 1, payload.cmp);

    axios.put(url + 'data/website/' + state._id,Object.assign({},state))
      .then(response => {
        state._id = response.data[0]._id;
        state.components = response.data[0].components;
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  // Gallery mutations
  setActiveImage (state, params) {
    state.components.filter(function (data) {
      return data.id == params[1]
    })[0].data.activeImage = params[0];
  },
  setImage (state, params) {
    var data = state.components.filter(function (data) {
      return data.id == params[1]
    })[0].data;
    data.images[data.activeImage] = params[0];
  },
  deleteActiveImage (state, id) {
    var data = state.components.filter(function (data) {
      return data.id == id
    })[0].data;
    data.images.splice(data.activeImage, 1);
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
  getData() {
    console.log('getting data first time')
    return axios.get(url + 'data/website')
      .then(response => {
        console.log('response: ',response)
        state._id = response.data[0]._id
        state.components = response.data[0].components
      })
      .catch(e => {
        this.errors.push(e)
      });
  },

  // Gallery actions
  setActiveImage({commit}, params) {
    commit("setActiveImage", params);
  },
  setImage({commit}, params) {
    commit("setImage", params);
  },
  deleteActiveImage({commit}, id) {
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
