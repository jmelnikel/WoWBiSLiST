/* eslint-disable space-before-function-paren */
import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production' ? "/api" : "http://localhost:3001"

export const getUserLoginData = async (email) => {
  const url = `/api/user/${email}`
  const getUserLoginDataAxios = axios.create({ baseURL });

  const response = getUserLoginDataAxios.get(url);
  return response;
}



export const clearArmorTable = async () => {
  const url = "/api/clearArmorTable"
  const clearArmorTableAxios = axios.create({ baseURL });

  clearArmorTableAxios.get(url)
  console.log("Table: armor - Cleared and initialized")
}










export const writeDetailDataArmorTable = async (data) => {
  const url = process.env.REACT_APP_WRITE_DETAIL_DATA_ARMOR_TABLE_URL
  const writeDetailDataArmorTableAxios = axios.create({ baseURL });

  await writeDetailDataArmorTableAxios.post(url, data)
  console.log("Table: armor - Data sent to be written")
}

export const deleteDuplicateRowsArmorTable = async () => {
  const url = process.env.REACT_APP_DELETE_DUPLICATE_ROWS_ARMOR_TABLE_URL
  const deleteDuplicateRowsArmorTableAxios = axios.create({ baseURL });

  deleteDuplicateRowsArmorTableAxios.post(url)
  console.log("Table: armor - Duplicate data deleted")
}

export const clearWeaponTable = async () => {
  const url = process.env.REACT_APP_CLEAR_WEAPON_TABLE_URL
  const clearWeaponTableAxios = axios.create({ baseURL });

  clearWeaponTableAxios.post(url)
  console.log("Table: weapon - Cleared and initialized")
}

export const writeDetailDataWeaponTable = async (data) => {
  const url = process.env.REACT_APP_WRITE_DETAIL_DATA_WEAPON_TABLE_URL
  const writeDetailDataWeaponTableAxios = axios.create({ baseURL });

  await writeDetailDataWeaponTableAxios.post(url, data)
  console.log("Table: weapon - Data sent to be written")
}

export const deleteDuplicateRowsWeaponTable = async (data) => {
  const url = process.env.REACT_APP_DELETE_DUPLICATE_ROWS_WEAPON_TABLE_URL
  const deleteDuplicateRowsWeaponTableAxios = axios.create({ baseURL });

  deleteDuplicateRowsWeaponTableAxios.post(url)
  console.log("Table: weapon - Duplicate data deleted")
}

export const getArmorItems = async () => {
  const url = "/armor"
  const getArmorItemsAxios = axios.create({ baseURL });

  return await getArmorItemsAxios.get(url)
}

export const getWeaponItems = async () => {
  const url = "/weapon"
  const getWeaponItemsAxios = axios.create({ baseURL });

  return await getWeaponItemsAxios.get(url)
}