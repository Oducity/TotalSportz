import displayFormData from "./displayFormData.mjs";

const queryString = window.location.search;
const urlParam = new URLSearchParams(queryString);

displayFormData(urlParam);
