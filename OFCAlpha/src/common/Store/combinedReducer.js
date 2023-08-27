import callAPIReducer, { callAPIStoreKey } from "./callAPI/reducer";
import { combineReducers } from "redux";
// import { get } from "lodash";
// import { LogoutAPI } from "../Modules/Common/APIs";

const combinedReducer = combineReducers({
  [callAPIStoreKey]: callAPIReducer
});

export const reducers = (state, action) => {
  // if (get(action.payload, "storeKey", "") === LogoutAPI.storeKey) {
  //   state = undefined;
  // }

  return combinedReducer(state, action);
};

export default combinedReducer;
