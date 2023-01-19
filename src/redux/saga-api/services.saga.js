import { put, takeLatest, fork, call } from "redux-saga/effects";
import { createServices, ServicesRecord } from "./api.saga";
import {
  CREATE_CAR_SERVICES,
  SET_SERVICES_CAR_LIST,
  ON_SERVICES_SUCCESS,
  ON_SERVICES_FAILED,
  GET_ALL_CAR_SERVICES_LIST,
} from "../constant/constant";

// CREATE SERVICING FOR CAR
export function* onCreateServiceAsync(action) {
  try {
    console.log(action.data);
    const result = yield call(createServices, {"carid":action.data});
    if (result.status === 200) {
      yield put({ type: ON_SERVICES_SUCCESS, message: "Success" });
    }
  } catch (error) {
    yield put({ type: ON_SERVICES_FAILED, data: "Failed" });
    console.log(error.message)
  }
}

// GET SERVICING RECORD FOR CAR
export function* getServiceListAsync(action) {
  try {
    console.log(action.data);
    const result = yield call(ServicesRecord, action.data);
    if (result.status === 200) {
      yield put({ type: SET_SERVICES_CAR_LIST, data: result.data });
    }
  } catch (error) {
    yield put({ type: ON_SERVICES_FAILED, data: "Failed" });
    console.log(error.message);
  }
}

export function* createService() {
  yield takeLatest(CREATE_CAR_SERVICES, onCreateServiceAsync);
}

export function* getService() {
  yield takeLatest(GET_ALL_CAR_SERVICES_LIST, getServiceListAsync);
}

const servicesSaga = [fork(getService), fork(createService)];
export default servicesSaga;
