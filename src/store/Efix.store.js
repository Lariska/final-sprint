export const EFIX_CHOSE_ELEMENT       = 'EFIX_CHOSE_ELEMENT'
// export const TODO_UPDATE      = 'TODO_UPDATE';
// export const TODO_CREATE      = 'TODO_CREATE';

// import todoService from '../services/todo.service'

const state = {
    chosenElement: null,
    elements:  []
//   todos: [],
//   filterBy: { status: null, txt: null }
};

const getters = {
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
  [EFIX_CHOSE_ELEMENT](state, {type}) {
    state.chosenElement = payload;
    console.log("Store value changed: " + payload);
  },
  'SELL_STOCK' (state, {stockId, quantity, stockPrice}) {
    const record = state.stocks.find(element => element.id == stockId);
    if (record.quantity > quantity) {
      record.quantity -= quantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }
    state.funds += stockPrice * quantity;
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
