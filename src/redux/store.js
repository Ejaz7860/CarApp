import { configureStore } from "@reduxjs/toolkit";
import rootSaga from "./saga-api/rootSaga";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers/rootReducer";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer:rootReducer,
  middleware: () => [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export default store;
