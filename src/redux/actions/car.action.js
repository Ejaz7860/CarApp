import {
  CREATE_CAR,
  GET_ALL_CAR,
  GET_ALL_CAR_BY_ID,
} from "../constant/constant";

export const createCar = (data) => {
  return {
    type: CREATE_CAR,
    data,
  };
};

export const getCarbyid = (data) => {
  console.log(data)
  return {
    type: GET_ALL_CAR_BY_ID,
    data,
  };
};

export const getAllCarDetails = (data) => {
  return {
    type: GET_ALL_CAR,
    data
  };
};
