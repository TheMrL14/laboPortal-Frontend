import {
  authenticatedDeleteRequest,
  authenticatedPostRequest,
  getRequest,
} from "./apiUtils";

const endpoint = "/sops/";

export function getSops() {
  return getRequest(endpoint);
}

export function saveSop(sop) {
  return authenticatedPostRequest(endpoint, sop);
}

export function deleteSop(id) {
  return authenticatedDeleteRequest(endpoint, id);
}
