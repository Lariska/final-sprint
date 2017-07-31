import efixService from '../services/efix.service.js';
import axios from 'axios';

export const EFIX_CHOSE_ELEMENT = 'EFIX_CHOSE_ELEMENT'
export const ADD_COMPONENT = 'ADD_COMPONENT'

 export const CALENDAR_REMOVE_EVENT       = 'CALENDAR_REMOVE_EVENT'
 export const CALENDAR_ADD_EVENT       = 'CALENDAR_ADD_EVENT'

const url = 'http://localhost:3003/';
// export const DELETE_COMPONENT = 'ADD_COMPONENT'
// export const TODO_UPDATE      = 'TODO_UPDATE';
// export const TODO_CREATE      = 'TODO_CREATE';

// import todoService from '../services/todo.service'

const state = {
  chosenElement: null,
  _id: '',
  components: [],
  logos: [],
  images: []
  // events: [{
  //       date: '2017/7/8',
  //       title: 'Foo',
  //       desc: 'longlonglong description'
  //     },{
  //       date: '2016/11/12',
  //       title: 'Bar'
  //     }]
};

const getters = {
  components: state => {
    return state.components
  },
  logos: state => {
    return state.logos
  },
  images: state => {
    return state.images
  },
  componentById: state =>
    id => state.components.find( component => component.id === id )
};


const mutations = {
  [EFIX_CHOSE_ELEMENT](state, payload) {
    state.chosenElement = payload.type;
    // console.log("Store value changed: " + payload);
  },
  editCmp(state, res) {
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
    // const cmpObj = efixService.buildCmpObj(res);
    // console.log("Trying to build a local temp cmp: " + res);
  },
  // Gallery mutations
  setActiveImage (state, params) {
    state.components.filter(function (data) {
      return data.id === params[1]
    })[0].data.activeImage = params[0];
  },
  setImage (state, res) {
    state._id = res._id;
    state.components = res.components
  },
  deleteActiveImage(state, res) {
    state._id = res._id;
    state.components = res.components
  },
  [CALENDAR_REMOVE_EVENT](state, payload) {
      console.log("removing item from the calendar store with the payload:" + payload);
    state.events.splice(payload,1);
  },
  [CALENDAR_ADD_EVENT](state, payload) {
    console.log('adding new event to Calendar store, with the payload: ' + payload);
    state.events.push(payload);
  },
};

const actions = {
  getData() {
    console.log('getting data first time');
    return axios.get(url + 'data/website')
      .then(response => {
        console.log("res: " , response);
        state._id = response.data[0]._id;
        state.components = response.data[0].components;
        state.logos = response.data[0].logos
      })
      .catch(e => {
        console.log('catched an error in getData');
        this.errors.push(e)
      });
  },
  deleteCmp(context , payload) {
    const idx = state.components.findIndex(currCmp => {
      return currCmp.id === payload.cmp.id;
    });
    state.components.splice(idx, 1);
    console.log('deleting a cmp axios');
    axios.put(url + 'data/website/' + state._id,Object.assign({},state))
      .then(response => {
        context.commit('deleteCmp',response.data);
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  editCmp(context, payload) {
    const idx = state.components.findIndex(currCmp => {
      return currCmp.id === payload.cmp.id;
    });
    state.components.splice(idx, 1, payload.cmp);
    console.log('editing a cmp axios'); // if there is a data overload bug. its here
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
  console.log('adding a cmp axios');
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
  setImage(context, params) {
    const idx = state.components.findIndex(currCmp => {
      return currCmp.id === params[1];
    });
    let activeImage = state.components[idx].data.activeImage;
    state.components[idx].data.images[activeImage] = params[0];
    console.log('setting img axios');
    axios.put(url + 'data/website/' + state._id,Object.assign({},state))
      .then(response => {
        context.commit('setImage', response.data);
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  deleteActiveImage(context , payload) {
    const idx = state.components.findIndex(currCmp => {
      return currCmp.id === payload.id;
    });
    let activeImage = state.components[idx].data.activeImage;
    state.components[idx].data.images.splice(activeImage, 1);
    console.log('deleting active img axios');
    axios.put(url + 'data/website/' + state._id,Object.assign({},state))
      .then(response => {
        context.commit('deleteActiveImage',response.data);
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
  //Map actions
};

export const efixStore = {
  state,
  mutations,
  getters,
  actions
};
