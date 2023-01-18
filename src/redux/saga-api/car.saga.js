import { put, takeLatest, fork, call } from "redux-saga/effects";
import { getAllUserCarById } from "./api.saga";
import { GET_ALL_CAR, SET_CAR_USER, ON_CAR_FAILED } from "../constant/constant";

export function* onCarDetails(action) {
  try {
    const result = yield call(getAllUserCarById, action.data);
    if (result.status === 200) {
      yield put({ type: SET_CAR_USER, data: result.data });
    }
  } catch (error) {
    yield put({ type: ON_CAR_FAILED, message: error.message });
  }
}

export function* getCarForUser() {
  yield takeLatest(GET_ALL_CAR, onCarDetails);
}
const carSaga = [fork(getCarForUser)];
export default carSaga;
