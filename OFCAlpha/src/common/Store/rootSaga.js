import callAPISagas from "./callAPI/sagas";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
    yield all([callAPISagas()]);
}
