import { all } from "redux-saga/effects";
import userSagas from "./user.saga";
import carSaga from "./car.saga";

function* rootSaga() {
  yield all([...userSagas,...carSaga]);
}

export default rootSaga;
