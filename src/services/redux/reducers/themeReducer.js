import { SET_THEME } from "../type";

const initialState = {
  mode: "light" // "light|dark"
};

export default (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case SET_THEME:
      return {
        ...state,
        ...payload
      };

    default:
      return state;
  }
};
