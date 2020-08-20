import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import appReducerFunction from "../Redux/reducers/appReducer";

const rootReducer = combineReducers({
  battles: appReducerFunction,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
