import {GET_ALL_CAR_SERVICES_LIST } from "../constant/constant.js";


export const servicesFeature = (data=[],action)=>{
    if(action.type === GET_ALL_CAR_SERVICES_LIST){
        return [action.data,...data]
    } else{
        return data;
    }
}