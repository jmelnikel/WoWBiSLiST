/* eslint-disable space-before-function-paren */
import axios from 'axios';


export const clearItemsTable = async () => {
  const url = process.env.REACT_APP_CLEAR_ITEM_TABLE_URL
  const clearItemsTableAxios = axios.create({
    baseURL: "http://localhost:5000",
    // headers: { "Content-Type": "application/json" },
  });
  clearItemsTableAxios.post(url)
  console.log("Table: items - Cleared and Initialized")
}

export const writeItemsTable = async (data) => {
  const url = process.env.REACT_APP_WRITE_ITEM_TABLE_URL
  const writeItemsTableAxios = axios.create({
    baseURL: "http://localhost:5000",
    headers: { "Content-Type": "application/json" },
  });
  await writeItemsTableAxios.post(url, data)
}

export const removePandCItems = async () => {
  const url = "/removePandC"
  const removePandCAxios = axios.create({
    baseURL: "http://localhost:5000",
    // headers: { "Content-Type": "application/json" },
  });
  return await removePandCAxios.delete(url)
}

export const getAllItems = async () => {
  const url = "/items"
  const getAllItemsAxios = axios.create({
    baseURL: "http://localhost:5000",
    // headers: { "Content-Type": "application/json" },
  });
  return await getAllItemsAxios.get(url)
}