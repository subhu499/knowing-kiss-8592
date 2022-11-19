import { legacy_createStore as createStore } from "redux";
import { userReducer } from "./reducer";

export const store = createStore(userReducer);
