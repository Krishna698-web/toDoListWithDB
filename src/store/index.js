const redux = require("redux");

const reducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return { counter: state.counter + 1 };
  }
  if (action.type === "decrement") {
    return { counter: state.counter - 1 };
  }
  return state;
};

const store = redux.createStore(reducer);

// store.dispatch({ type: "increment" });
export default store;
