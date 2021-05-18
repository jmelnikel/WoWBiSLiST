/* eslint-disable space-before-function-paren */
import axios from 'axios';


export const clearItemsTable = async () => {
  const url = "/NRRNOuPGB6Uk9gZKh5ycPpmPMxH2"
  const setItemResourcesAxios = axios.create({
    baseURL: "http://localhost:5000",
    // headers: { "Content-Type": "application/json" },
  });
  setItemResourcesAxios.post(url)
  console.log("Table: items - Cleared and Initialized")
}

export const setItemsTable = async (data) => {
  const url = "/WP40IlUnz0et3XDIjZE47FhLyrk2"
  const setItemResourcesAxios = axios.create({
    baseURL: "http://localhost:5000",
    headers: { "Content-Type": "application/json" },
  });
  await setItemResourcesAxios.post(url, data)
}

export const getArmorItems = async () => {
  const url = "/armor"
  const setItemArmorAxios = axios.create({
    baseURL: "http://localhost:5000",
    // headers: { "Content-Type": "application/json" },
  });
  return await setItemArmorAxios.get(url)
}