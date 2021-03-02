import { CREATE_DEVICE, LOAD_DEVICES_SUCCES } from "../actions/actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_DEVICE:
      return [...state, { ...action.device }];
    case LOAD_DEVICES_SUCCES:
      return action.devices;
    default:
      return state;
  }
};
