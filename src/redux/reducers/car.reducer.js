import { GET_ALL_CAR, GET_ALL_CAR_BY_ID } from "../constant/constant";

export const carFeature = (data = [], action) => {
  switch (action.type) {
    case GET_ALL_CAR:
      return [action.data, ...data];

    case GET_ALL_CAR_BY_ID:
      return data;
    default:
      return data;
  }
};
