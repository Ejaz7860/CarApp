import {
  ON_CAR_FAILED,
  SET_CAR_USER,
} from "../constant/constant";

export const carFeature = (data = [], action) => {
  switch (action.type) {
    case SET_CAR_USER:
      return [...action.data];

    case ON_CAR_FAILED:
      return { message: action.message };
    default:
      return data;
  }
};
