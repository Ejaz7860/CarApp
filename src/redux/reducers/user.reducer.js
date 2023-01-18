import { SET_USER, ON_USER_FAILED, GET_USER_BY_ID } from "../constant/constant";

export const userFeature = (data = [], action) => {
  switch (action.type) {
    case SET_USER:
      return [action.data, ...data];
    case GET_USER_BY_ID:
      return data;
    case ON_USER_FAILED:
      return { message: action.data };
    default:
      return data;
  }
};
