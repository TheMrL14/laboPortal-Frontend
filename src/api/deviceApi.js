import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://localhost:5000/api" + "/devices/";

export function getDevices() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveDevice(device) {
  return fetch(baseUrl + (device.id || ""), {
    method: device.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(device),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteDevice(id) {
  return fetch(baseUrl + id, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
