import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import isVisibleReducer from "./isVisibleReducer";
import bankAccout from "./bankAccout"



// combineReducer : 여러개의 reducer를 하나로 합침
const rootReducer = combineReducers({
    counter : counterReducer,
    isVisible : isVisibleReducer,
    bank : bankAccout
});

export default rootReducer;