import { GET_USER, GET_USER_BY_ID } from "../constant/constant";


export const userFeature = (data = [], action) => {

    switch (action.type) {
        case GET_USER:
            return [action.data,...data]
        
        case GET_USER_BY_ID:
            return data
        default:
            return data;
    }
}

