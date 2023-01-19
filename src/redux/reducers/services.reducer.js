import {
  SET_SERVICES_CAR_LIST,
  ON_SERVICES_SUCCESS,
  ON_SERVICES_FAILED,
} from "../constant/constant.js";

export const servicesFeature = (data = [], action) => {
  switch (action.type) {
    case SET_SERVICES_CAR_LIST:
      return [action.data];
    default:
      return data;
  }
};

export const serviceRequest = (data = [], action) => {
  switch (action.type) {
    case ON_SERVICES_SUCCESS:
      return { message: action.data };
    case ON_SERVICES_FAILED:
      return { message: action.data };
    default:
      return data;
  }
};
