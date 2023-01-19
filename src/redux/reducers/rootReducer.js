import { combineReducers } from "redux";
import { userFeature, userSuccess, userById } from "./user.reducer";
import { carFeature, onCarRequest, carById } from "./car.reducer";
import { servicesFeature, serviceRequest } from "./services.reducer";

export default combineReducers({
  userFeature,
  userSuccess,
  userById,
  carFeature,
  onCarRequest,
  carById,
  servicesFeature,
  serviceRequest,
});
