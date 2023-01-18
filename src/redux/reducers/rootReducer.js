import { combineReducers } from "redux";
import { userFeature, userSuccess, userById } from "./user.reducer";
import { carFeature } from "./car.reducer";
import { servicesFeature } from "./services.reducer";

export default combineReducers({
    userFeature,
    userSuccess,
    userById,
    carFeature,
    servicesFeature
})