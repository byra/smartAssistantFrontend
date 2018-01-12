import {createStore, applyMiddleware} from "redux";
import {reducer} from "./reducers";
import thunk from "redux-thunk";
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import {initialState} from "./initialState";

const middleware = applyMiddleware(logger, thunk, promise());
export const store = createStore(reducer, initialState, middleware);