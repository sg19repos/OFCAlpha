import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import locationData from "../common/reducers";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

export default configureStore({
  reducer: {
    locationData: locationData,
    middleware
  }
});
