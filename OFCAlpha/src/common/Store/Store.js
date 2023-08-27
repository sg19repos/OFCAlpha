import {
  combineReducers,
  configureStore,
  getDefaultMiddleware
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga.js";
// TIPS - For Persist mode Start uncomment below
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage/session";
// import entityReducer, { EntityStoreKey } from "./Entity/reducer";
// import callAPIReducer, { callAPIStoreKey } from "./callAPI/reducer";
// TIPS - For Persist mode Stop uncomment above

// TIPS - For Persist mode Start comment below
import { reducers as Reducer } from "./combinedReducer";

const devMode = process.env.NODE_ENV === "development";

const sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];
// TIPS - For Persist mode Start uncomment below
// let Reducer = {
//     [callAPIStoreKey]: callAPIReducer,
//     [EntityStoreKey]: entityReducer,
// };
//
// const persistConfig = {
//     key: "root",
//     storage,
// };
// if (devMode) {
//     Reducer = persistReducer(persistConfig, combineReducers(Reducer));
// }
// TIPS - For Persist mode Stop uncomment above
const store = preloadedState => {
  const store = configureStore({
    reducer: Reducer,
    devTools: devMode,
    middleware,
    preloadedState
  });
  sagaMiddleware.run(rootSaga);
  return store;
};
const Store = store();
// TIPS - For Persist mode Start uncomment below
// export let persistor = devMode ? persistStore(Store) : null;

export default Store;
