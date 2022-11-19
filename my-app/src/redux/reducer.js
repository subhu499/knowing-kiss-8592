import { SET_INPUT, SET_USER, SHOW_SEARCH, SET_AUTH } from "./action";

const initState = { user: false, input: "", search: false, isAuth: false };

export const userReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return {
        ...state,
        user: payload,
      };
    case SET_INPUT:
      return {
        ...state,
        input: payload,
      };
    case SHOW_SEARCH:
      return {
        ...state,
        search: payload,
      };
    case SET_AUTH:
      return {
        ...state,
        isAuth: payload,
      };
    default:
      return state;
  }
};
