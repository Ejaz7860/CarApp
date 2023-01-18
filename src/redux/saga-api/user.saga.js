import {
  takeEvery,
  delay,
  put,
  takeLatest,
  fork,
  call,
  all,
} from "redux-saga/effects";
import { loaderUserDetails, postUser } from "./api.saga";
import {
  GET_USER,
  CREATE_USER,
  SET_USER,
  ON_USER_FAILED,
  ON_USER_SUCCESS,
} from "../constant/constant.js";

export function* onLoaderUsersAsync() {
  try {
    const result = yield call(loaderUserDetails);
    if (result.status === 200) {
      yield delay(500);
      // yield put(SET_USER, result.data.Users);
      yield put({ type:SET_USER,data:result.data.Users })
      console.log(result.data.Users)
    }
  } catch (error) {
  yield put({ type:ON_USER_FAILED,data:"Something went wrong here" })
  }
}

export function* onCreateUserAsync(action) {
  try {
    yield put(ON_USER_SUCCESS);
    yield call(postUser, action.data);
  } catch (error) {
    yield put(ON_USER_FAILED);
  }
}
export function* onLoaderUsers() {
  yield takeEvery(GET_USER, onLoaderUsersAsync);
}

export function* onCreateUser() {
  yield takeLatest(CREATE_USER, onCreateUserAsync);
}
const userSagas = [fork(onLoaderUsers), fork(onCreateUser)];

export default userSagas;
