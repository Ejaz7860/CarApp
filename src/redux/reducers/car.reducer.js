import { ON_CAR_FAILED, SET_CAR_USER,SET_CAR_BY_ID } from "../constant/constant";

export const carFeature = (data = [], action) => {
  switch (action.type) {
    case SET_CAR_USER:
      return [...action.data];
    default:
      return data;
  }
};

export const carById = (data = [],action) => {
  switch (action.type) {
    case SET_CAR_BY_ID:
      return [action.data];
    default:
      return data;
  }
}


export const onCarRequest = (data = [], action) => {
  switch (action.type) {
    case ON_CAR_FAILED:
      return { message: action.message };
    default:
      return data;
  }
};
