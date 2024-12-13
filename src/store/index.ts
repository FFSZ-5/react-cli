import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";

import modal from "./action/modal";
import { thunk } from "redux-thunk";
import userInfo from "./action/userInfo";

const store = createStore(
  combineReducers({
    userInfo,
    modal,
  }),
  applyMiddleware(thunk)
);

export default store;
