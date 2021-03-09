import { combineReducers } from "redux";
import devices from "./deviceReducer";
import sops from "./sopReducer";

const rootReducer = combineReducers({
  devices,
  sops,
});

export default rootReducer;
