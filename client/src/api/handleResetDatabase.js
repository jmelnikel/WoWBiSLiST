/* eslint-disable space-before-function-paren */
/* eslint-disable */
import axios from 'axios';


export const clearDatabase = async () => {
  const url = "/NRRNOuPGB6Uk9gZKh5ycPpmPMxH2"
  const setItemResourcesAxios = axios.create({
    baseURL: "http://localhost:5000",
    // headers: { "Content-Type": "application/json" },
  });
  setItemResourcesAxios.post(url)
  console.log("Database Cleared and Initialized")
}

export const getItemBaseData = async ({ clientAuthToken, start, results }) => {
  console.log(`Starting range ${start} to ${start + 999}.`)
  const end = start + 999;
  const searchQuerybase = "https://us.api.blizzard.com/data/wow/search/item?namespace=static-classic-us&locale=en_US";
  const field = `&id=[${start},${end}]&item_class.name.en_US=Weapon||Armor`;
  const searchQuery = `${searchQuerybase}${field}&_pageSize=1000&orderby=id`;
  const getItemBaseDataAxios = axios.create({
    baseURL: searchQuery,
    headers: {
      Authorization: `Bearer ${clientAuthToken}`,
    }
  });

  const response = await getItemBaseDataAxios.get();
  if (response.data.results.length !== 0) {
    start = start + 1000
    results.push(response.data.results)
    await getItemBaseData({ clientAuthToken, start, results })
  }
  return results
};

export const getItemDetails = async ({ clientAuthToken, id }) => {
  const searchQuery = `https://us.api.blizzard.com/data/wow/item/${id}?namespace=static-classic-us&locale=en_US`;

  const getItemDetailsAxios = axios.create({
    baseURL: searchQuery,
    headers: {
      Authorization: `Bearer ${clientAuthToken}`,
    }
  });

  return await getItemDetailsAxios.get();
}

export const setItemResources = async (data) => {
  const url = "/WP40IlUnz0et3XDIjZE47FhLyrk2"
  const setItemResourcesAxios = axios.create({
    baseURL: "http://localhost:5000",
    headers: { "Content-Type": "application/json" },
  });
  await setItemResourcesAxios.post(url, data)
}

