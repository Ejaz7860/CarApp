import axios from "axios";
import { Base_Url } from "../../config/api";
// 1. GET ALL USER DETIALS
export const loaderUserDetails = async () => await axios.get(`${Base_Url}/user/getall`);

// 2. CREATE USER
export const postUser = async (user) => await axios.post(`${Base_Url}/user/create`, user);

// 3. GET USER BY ID
export const getUserId = async (id) => await axios.get(`${Base_Url}/user/get/${id}`);

// 4. ADD CAR DETAILS
export const addCarInfo = async (data) => await axios.post(`${Base_Url}/car/create`, data);

// 5. GET CARS BY ID
export const getCarById = async (id) => await axios.get(`${Base_Url}/car/get/${id}`);

// 6. GET ALL CARS FOR USER ID
export const getAllUserCarById = async (userid) =>
  await axios.get(`${Base_Url}/car/getall`, userid, {
    header: {
      "Content-Type": "application/json",
    },
  });

// 7. CREATE SERVICE FOR CAR
export const createServices = async (data) =>
  await axios.post(`${Base_Url}/servicing/create`, data);

// 8. GET ALL SERVICES RECORDS FOR CAR
export const ServicesRecord = async (id) => {
  const res = {
    carid: id,
  };
  await axios({
    method: "GET",
    url: `${Base_Url}/servicing/getall`,
    data: res,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

// export const ServicesRecord = async (data) => axios.get("/servicing/getall",{data: {"carid":data}})
