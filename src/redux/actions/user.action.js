import { CREATE_USER, GET_USER, GET_USER_BY_ID } from "../constant/constant";

export const createUser = (data) => {
  console.log('create user from dispatch',data)
  return {
    type: CREATE_USER,
    data,
  };
};

export const getUserbyid = (data) => {
  return {
    type: GET_USER_BY_ID,
    data,
  };
};

export const getUserDetails = () => {
  console.log("action getUserDetilas");
  return {
    type: GET_USER,
  };
};
