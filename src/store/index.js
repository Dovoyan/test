import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { customerReducer } from "./customerReducer";
import { composeWithDevTools } from 'redux-devtools-extension'
import { worklogReducer } from "./worklogReducer";

const rootReducer = combineReducers({
    customers: customerReducer,
    worklog: worklogReducer,
})

// eslint-disable-next-line no-undef
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));