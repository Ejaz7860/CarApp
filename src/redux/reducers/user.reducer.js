import {
  SET_USER,
  ON_USER_FAILED,
  ON_USER_SUCCESS,
  SET_USER_BY_ID,
} from "../constant/constant";

export const userFeature = (data = [], action) => {
  switch (action.type) {
    case SET_USER:
      return [...action.data];
    default:
      return data;
  }
};

export const userById = (data = [], action) => {
  switch (action.type) {
    case SET_USER_BY_ID:
      return [action.data];
    default:
      return data;
  }
};

export const userSuccess = (state = [], action) => {
  switch (action.type) {
    case ON_USER_FAILED:
      return { message: action.data };
    case ON_USER_SUCCESS:
      return { message: action.data };
    default:
      return state;
  }
};
