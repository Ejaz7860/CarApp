import {
  CREATE_CAR_SERVICES,
  GET_ALL_CAR_SERVICES_LIST,
} from "../constant/constant";

export const createService = (data) => {
  return {
    type: CREATE_CAR_SERVICES,
    data,
  };
};

export const getAllServicesDetails = () => {
  return {
    type: GET_ALL_CAR_SERVICES_LIST,
  };
};
