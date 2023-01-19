import { all } from "redux-saga/effects";
import userSagas from "./user.saga";
import carSaga from "./car.saga";
import servicesSaga from "./services.saga";

function* rootSaga() {
  yield all([...userSagas,...carSaga,...servicesSaga]);
}

export default rootSaga;
