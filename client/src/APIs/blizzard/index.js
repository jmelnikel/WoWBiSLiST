/* eslint-disable space-before-function-paren */
import axios from 'axios';


export const getClientAuthToken = async () => {
  const URL = "https://us.battle.net/oauth/token";
  const data = "grant_type=client_credentials";
  const options = {
    auth: {
      username: process.env.REACT_APP_CLIENT_ID,
      password: process.env.REACT_APP_CLIENT_SECRET,
    },
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  };

  const response = axios.post(URL, data, options);
  return response;
};

export const getItemsBaseData = async ({ clientAuthToken, start, results }) => {
  console.log(`Starting range ${start} to ${start + 999}.`)
  const end = start + 999;
  const searchQuerybase = "https://us.api.blizzard.com/data/wow/search/item?namespace=static-classic-us&locale=en_US";
  const field = `&id=[${start},${end}]&item_class.name.en_US=Weapon||Armor`;
  const searchQuery = `${searchQuerybase}${field}&_pageSize=1000&orderby=id`;
  const getItemsBaseDataAxios = axios.create({
    baseURL: searchQuery,
    headers: {
      Authorization: `Bearer ${clientAuthToken}`,
    }
  });

  const response = await getItemsBaseDataAxios.get();
  if (response.data.results.length !== 0) {
    start = start + 1000
    results.push(response.data.results)
    await getItemsBaseData({ clientAuthToken, start, results })
  }
  return results
};

export const getItemsDetailsData = async ({ clientAuthToken, href }) => {
  const getItemsDetailsDataAxios = axios.create({
    baseURL: href,
    headers: {
      Authorization: `Bearer ${clientAuthToken}`,
    }
  });

  return await getItemsDetailsDataAxios.get();
}