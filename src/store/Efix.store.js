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
  _id: '',
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
  editCmp(state, res) {
    // state._id = response.data[0]._id;
    // state.components = response.data[0].components;
    state._id = res._id;
    state.components = res.components;
  },
  deleteCmp(state, res) {
    state._id = res._id;
    state.components = res.components;
  },
  addCmp(state, res) {
    state._id = res._id;
    state.components = res.components;
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
};

const actions = {
  getData() {
    console.log('getting data first time');
    return axios.get(url + 'data/website')
      .then(response => {
        state._id = response.data[0]._id;
        state.components = response.data[0].components
      })
      .catch(e => {
        this.errors.push(e)
      });
  },
  deleteCmp(context , payload) {
    const idx = state.components.findIndex(currCmp => {
      return currCmp.id === payload.cmp.id;
    });
    state.components.splice(idx, 1);
    axios.put(url + 'data/website/' + state._id,Object.assign({},state))
      .then(response => {
        context.commit('deleteCmp',response.data);
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  editCmp(context, payload) {
    console.log(payload.cmp);
    const idx = state.components.findIndex(currCmp => {
      return currCmp.id === payload.cmp.id;
    });
    console.log(payload.cmp);
    state.components.splice(idx, 1, payload.cmp);

    axios.put(url + 'data/website/' + state._id,Object.assign({},state))
      .then(response => {
        context.commit('editCmp', response.data);
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  addCmp(context, payload) {
  const cmpObj = efixService.buildCmpObj(payload);
  state.components.push(cmpObj);
  axios.put(url + 'data/website/'+ state._id, Object.assign({}, state))
    .then(response => {
      context.commit('addCmp', response.data);
    })
    .catch(e => {
      console.log('err',e);
      this.errors.push(e)
    })
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
  }
}

export const efixStore = {
  state,
  mutations,
  getters,
  actions
}
