export const SET_USER = "SET_USER";
export const SET_INPUT = "SET_INPUT";
export const SHOW_SEARCH = "SHOW_SEARCH";
export const SET_AUTH = "SET_AUTH";

export const setUser = (payload) => {
  return {
    type: SET_USER,
    payload,
  };
};

export const setInput = (payload) => {
  return {
    type: SET_INPUT,
    payload,
  };
};

export const showSearch = (payload) => {
  return {
    type: SHOW_SEARCH,
    payload,
  };
};

export const setAuth = (payload) => {
  return {
    type: SET_AUTH,
    payload: payload,
  };
};
