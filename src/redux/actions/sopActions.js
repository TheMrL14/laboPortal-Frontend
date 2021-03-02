import * as types from "./actionTypes";
import * as sopApi from "../../api/sopApi";

export function createSop(sop) {
  return { type: types.CREATE_SOP, sop };
}

export function loadSopsSucces(sops) {
  return { type: types.LOAD_SOPS_SUCCES, sops };
}

export function loadSops() {
  return function (dispatch) {
    return sopApi
      .getSops()
      .then((sops) => {
        dispatch(loadSopsSucces(sops));
      })
      .catch((err) => {
        throw err;
      });
  };
}
