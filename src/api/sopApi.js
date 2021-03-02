import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "localhost:8080/api" + "/sops/";

export function getSops() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveSop(sop) {
  return fetch(baseUrl + (sop.id || ""), {
    method: sop.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(sop),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteSop(id) {
  return fetch(baseUrl + id, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
