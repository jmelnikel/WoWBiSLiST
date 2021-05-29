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

export const writeBaseDataItemsTable = async (data) => {
  const url = process.env.REACT_APP_WRITE_BASE_DATA_ITEMS_TABLE_URL
  const writeBaseDataItemsTableAxios = axios.create({
    baseURL: "http://localhost:5000",
    headers: { "Content-Type": "text/csv" },
  });
  await writeBaseDataItemsTableAxios.post(url, data)
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