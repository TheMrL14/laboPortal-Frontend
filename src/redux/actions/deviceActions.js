import * as types from "./actionTypes";
import * as deviceApi from "../../api/deviceApi";

export function createDevice(device) {
  return { type: types.CREATE_SOP, device };
}

export function loadDevicesSucces(devices) {
  return { type: types.LOAD_DEVICES_SUCCES, devices };
}

export function loadDevices() {
  return function (dispatch) {
    return deviceApi
      .getDevices()
      .then((devices) => {
        dispatch(loadDevicesSucces(devices));
      })
      .catch((err) => {
        throw err;
      });
  };
}
