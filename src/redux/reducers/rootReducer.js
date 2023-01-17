import { combineReducers } from "redux";
import { userFeature } from "./user.reducer";
import { carFeature } from "./car.reducer";
import { servicesFeature } from "./services.reducer";

export default combineReducers({
    userFeature,
    carFeature,
    servicesFeature
})