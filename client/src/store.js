import {combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {configureStore} from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";
import { getpostReducer, postReducer } from "./reducers/postReducer";



const reducer=combineReducers({
  user:userReducer,
  videos:postReducer,
  video:getpostReducer
});
let initialState={};
const middleware=[thunk];
const store=configureStore(
    {reducer:reducer},
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
) 
export default store;