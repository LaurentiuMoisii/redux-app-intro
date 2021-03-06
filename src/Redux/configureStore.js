import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./Reducers";
import immutableStateInvariantMiddleware from "redux-immutable-state-invariant";

export default function configureStore(intialState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    return createStore(
        rootReducer, 
        intialState, 
        composeEnhancers(applyMiddleware(immutableStateInvariantMiddleware()))
    );
}