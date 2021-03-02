import { CREATE_SOP, LOAD_SOPS_SUCCES } from "../actions/actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_SOP:
      return [...state, { ...action.sop }];
    case LOAD_SOPS_SUCCES:
      return action.sops;
    default:
      return state;
  }
};
