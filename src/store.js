import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from './reducers';

const preLoadedState = {};

const middleware = [thunk];

// function reducerFunc() {
// 	console.log("this is reducer");
// }

const store = createStore(rootReducer, preLoadedState, applyMiddleware(...middleware));

export default store;
