import {CREATE_CAR,GET_ALL_CAR,GET_ALL_CAR_BY_ID } from "../constant/constant";

export const createCar = (data) => {
    return {
        type : CREATE_CAR,
        data
    }
}


export const getCarbyid = (data) => {
    return {
        type : GET_ALL_CAR_BY_ID,
        data
    }
}

export const getAllCarDetails = () => {
    return {
        type :GET_ALL_CAR,
    }
}