import logger from "redux-logger";
import rootReducer from "./root-reducer";
import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import createSageMiddleware from "redux-saga";
import rootSaga from "./root-saga";
const sageMiddleware = createSageMiddleware();

const middlewares = [sageMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
sageMiddleware.run(rootSaga);
export const persistor = persistStore(store);
