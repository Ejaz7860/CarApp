import { put, takeLatest, fork, call } from "redux-saga/effects";
import { addCarInfo, getCarById } from "./api.saga";
import {
  ON_CAR_FAILED,
  CREATE_CAR,
  GET_ALL_CAR_BY_ID,
  SET_CAR_BY_ID
} from "../constant/constant";

// CAR DETAILS FOR USER
export function* onCarDetails(action) {
  try {
    const result = yield call(addCarInfo, action.data);
    if (result.status === 200) {
    }
  } catch (error) {
    yield put({ type: ON_CAR_FAILED, message: error.message });
  }
}
// GET CAR DETAILS BY CAR ID
export function* getCarByIdAsync(action) {
  try {
    const result =  yield call(getCarById, action.data);
    if(result.status === 200){
      yield put({ type:SET_CAR_BY_ID, data:result.data.Car })
    }
  } catch (error) {
    yield put({ type: ON_CAR_FAILED, message: error.message });
  }
}

export function* getCarForUser() {
  yield takeLatest(CREATE_CAR, onCarDetails);
}

export function* CarById() {
  yield takeLatest(GET_ALL_CAR_BY_ID, getCarByIdAsync);
}
const carSaga = [fork(getCarForUser), fork(CarById)];
export default carSaga;
