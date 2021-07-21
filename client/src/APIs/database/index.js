/* eslint-disable space-before-function-paren */
require('dotenv').config()
import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production' ? "/api" : "http://localhost:3001/api"

export const getUserLoginData = async (email) => {
  const url = `/user/${email}`
  const getUserLoginDataAxios = axios.create({ baseURL });

  const response = getUserLoginDataAxios.get(url);
  return response;
}











export const clearArmorTable = async () => {
  const url = "/clearArmorTable"
  const clearArmorTableAxios = axios.create({ baseURL });

  clearArmorTableAxios.get(url)
  console.log("Table: armor - Cleared and initialized")
}

export const writeDetailDataArmorTable = async (data) => {
  const url = "/writeDetailDataArmorTable"
  const writeDetailDataArmorTableAxios = axios.create({ baseURL });

  await writeDetailDataArmorTableAxios.post(url, data)
  console.log("Table: armor - Data sent to be written")
}

export const deleteDuplicateRowsArmorTable = async () => {
  const url = "/deleteDuplicateRowsArmorTable"
  const deleteDuplicateRowsArmorTableAxios = axios.create({ baseURL });

  deleteDuplicateRowsArmorTableAxios.get(url)
  console.log("Table: armor - Duplicate data deleted")
}

export const clearWeaponTable = async () => {
  const url = "/clearWeaponTable"
  const clearWeaponTableAxios = axios.create({ baseURL });

  clearWeaponTableAxios.get(url)
  console.log("Table: weapon - Cleared and initialized")
}

export const writeDetailDataWeaponTable = async (data) => {
  const url = "/writeDetailDataWeaponTable"
  const writeDetailDataWeaponTableAxios = axios.create({ baseURL });

  await writeDetailDataWeaponTableAxios.post(url, data)
  console.log("Table: weapon - Data sent to be written")
}

export const deleteDuplicateRowsWeaponTable = async (data) => {
  const url = "/deleteDuplicateRowsWeaponTable"
  const deleteDuplicateRowsWeaponTableAxios = axios.create({ baseURL });

  deleteDuplicateRowsWeaponTableAxios.get(url)
  console.log("Table: weapon - Duplicate data deleted")
}

export const getArmorItems = async () => {
  const url = "/getArmorItems"
  const getArmorItemsAxios = axios.create({ baseURL });

  return await getArmorItemsAxios.get(url)
}

export const getWeaponItems = async () => {
  const url = "/getWeaponItems"
  const getWeaponItemsAxios = axios.create({ baseURL });

  return await getWeaponItemsAxios.get(url)
}