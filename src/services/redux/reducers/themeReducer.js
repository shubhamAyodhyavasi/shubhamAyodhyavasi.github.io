import { SET_THEME, TOGGLE_THEME_MODE } from "../type";

const initialState = {
  mode: "light", // "light|dark"
  isSetByUser: false,
};

export default (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case SET_THEME:
      return {
        ...state,
        ...payload
      };
    case TOGGLE_THEME_MODE: {
      return {
        ...state,
        mode: state.mode === "light" ? "dark" : "light"
      };
    }
    default:
      return state;
  }
};
