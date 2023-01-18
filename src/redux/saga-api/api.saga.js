import axios from "axios";

// 1. GET ALL USER DETIALS
export const loaderUserDetails = async () => await axios.get("/user/getall");

// 2. CREATE USER
export const postUser = async (user) => await axios.post("/user/create", user);

// 3. GET USER BY ID
export const getUserId = async (id) => await axios.post(`/user/get/${id}`);

// 4. ADD CAR
export const addCarInfo = async (data) => await axios.post("/car/create", data);

// 5. GET CARS BY ID
export const getCarById = async (id) => await axios.get(`/car/get/${id}`);

// 6. GET ALL CARS FOR USER ID
export const getAllUserCarById = async (id) => await axios.get(`/car/getall/${id}`);

// 7. CREATE SERVICE FOR CAR
export const createServices = async (data) => await axios.get("/servicing/create",data);

// 8. GET ALL SERVICES RECORDS FOR CAS
export const ServicesRecord = async (data) => await axios.get("/servicing/getall",data);
