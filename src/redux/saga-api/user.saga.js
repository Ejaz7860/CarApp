import {
  takeEvery,
  delay,
  put,
  takeLatest,
  fork,
  call,
} from "redux-saga/effects";
import { loaderUserDetails, postUser, getUserId } from "./api.saga";
import {
  GET_USER,
  CREATE_USER,
  SET_USER,
  ON_USER_FAILED,
  ON_USER_SUCCESS,
  GET_USER_BY_ID,
  SET_USER_BY_ID,
} from "../constant/constant.js";

// GET ALL USERS
export function* onLoaderUsersAsync() {
  try {
    const result = yield call(loaderUserDetails);
    if (result.status === 200) {
      yield delay(500);
      yield put({ type: SET_USER, data: result.data.Users });
    }
  } catch (error) {
    yield put({ type: ON_USER_FAILED, data: "Something went wrong here" });
  }
}

// GET USER BY ID WITH CAR DETAILS
export function* getLoadUerDetailsAsync(action) {
  try {
    const result = yield call(getUserId, action.data);
    if (result.status === 200) {
      yield put({ type: SET_USER_BY_ID, data: result.data.User });
    }
  } catch (error) {
    yield put({ type: ON_USER_FAILED, data: "Something went wrong here" });
  }
}
export function* onCreateUserAsync(action) {
  try {
    yield call(postUser, action.data);
    yield put({ type: ON_USER_SUCCESS, data: "successfully registered" });
  } catch (error) {
    yield put({ type: ON_USER_FAILED, data: "Failed" });
  }
}

export function* onLoaderUsers() {
  yield takeEvery(GET_USER, onLoaderUsersAsync);
}

export function* onCreateUser() {
  yield takeLatest(CREATE_USER, onCreateUserAsync);
}

export function* onLoaderUserId() {
  yield takeLatest(GET_USER_BY_ID, getLoadUerDetailsAsync);
}

const userSagas = [
  fork(onLoaderUsers),
  fork(onCreateUser),
  fork(onLoaderUserId),
];

export default userSagas;
