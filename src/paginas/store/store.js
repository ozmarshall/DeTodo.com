import { createStore } from "redux";
/*estado inicial*/
const initialState = {
  counter: 0,
  isLogin: false,
  user: {},
};
/*funcion reducer*/
function mainReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT": {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }

    case "DECREMENT": {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }
    case "SET_IS_LOGIN": {
      return {
        ...state,
        isLogin: action.payload,
      };
    }
    case "SET_USER": {
      return {
        ...state,
        user: action.payload,
      };
    }
    case "RESET": {
      return initialState;
    }

    default: {
      return state;
    }
  }
}
export const store = createStore(
  mainReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
