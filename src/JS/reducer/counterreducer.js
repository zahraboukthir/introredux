import {
  INCREMENT,
  DECREMENT,
  RESET,
  TOGGLE,
  ADDVALUE,
} from "../actionstypes/actionstypes";

const initialState = {
  counter: 0,
  show: false,
};
//rxredux
const counterreducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: state.counter && state.counter - 1 };
    case RESET:
      return { ...state, counter: 0 };
    case TOGGLE:
      return { ...state, show: !state.show };
    case ADDVALUE:
      return { ...state, counter: state.counter + payload };
    default:
      return state;
  }
};
export default counterreducer;
