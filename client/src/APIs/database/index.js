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

export const writeDetailDataItemsTable = async (data) => {
  const url = process.env.REACT_APP_WRITE_DETAIL_DATA_ITEMS_TABLE_URL
  const writeDetailDataItemsTableAxios = axios.create({
    baseURL: "http://localhost:5000",
    headers: { "Content-Type": "application/json" },
  });
  await writeDetailDataItemsTableAxios.post(url, data)
}

export const deleteDuplicateRowsItemsTable = async (data) => {
  const url = process.env.REACT_APP_DELETE_DUPLICATE_ROWS_ITEM_TABLE_URL
  const deleteDuplicateRowsItemsTableAxios = axios.create({
    baseURL: "http://localhost:5000",
    // headers: { "Content-Type": "application/json" },
  });
  deleteDuplicateRowsItemsTableAxios.post(url)
  console.log("Table: items - Cleared and Initialized")
}


export const getAllItems = async () => {
  const url = "/items"
  const getAllItemsAxios = axios.create({
    baseURL: "http://localhost:5000",
    // headers: { "Content-Type": "application/json" },
  });
  return await getAllItemsAxios.get(url)
}