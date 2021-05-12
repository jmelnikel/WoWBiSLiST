/* eslint-disable space-before-function-paren */
import axios from 'axios';


const getClientAuthToken = async () => {
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

export default getClientAuthToken;