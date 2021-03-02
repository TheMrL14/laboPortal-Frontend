import { combineReducers } from "redux";
import devices from "./deviceReducer";

const rootReducer = combineReducers({
  devices,
});

export default rootReducer;
