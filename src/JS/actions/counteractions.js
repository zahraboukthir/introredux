import {
  INCREMENT,
  DECREMENT,
  RESET,
  TOGGLE,
  ADDVALUE,
} from "../actionstypes/actionstypes";

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const resetcount = () => {
  return {
    type: RESET,
  };
};
export const togglet = () => {
  return {
    type: TOGGLE,
  };
};
export const addvalue = (x) => {
  console.log(x);
  console.log(typeof x);
  return {
    type: ADDVALUE,
    payload: Number(x),
  };
};
