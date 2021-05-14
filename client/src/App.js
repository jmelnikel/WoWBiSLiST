import React, { useState, useEffect } from 'react';
// import './api/wowhead';
import getClientAuthToken from './api/getClientAuthToken';
import { clearDatabase, getItemBaseData, getItemDetails, setItemResources } from './api/handleResetDatabase';
import './App.css';

const App = () => {
  const [clientAuthToken, setClientAuthToken] = useState("");
  // const [tempData, setTempData] = useState("");

  useEffect(() => {
    getClientAuthToken()
      .then((clientAuthToken) => {
        setClientAuthToken(clientAuthToken.data.access_token);
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }, []);

  const handleClearDatabase = () => {
    clearDatabase();
  };

  const handleSeedDatabase = () => {
    const start = 1
    let results = []
    getItemBaseData({ clientAuthToken, start, results }, "search/item")
      .then((response) => {
        console.log("This is response", response)
        setItemResources(JSON.stringify(response));
      })
      .catch((error) => {
        throw new Error(error.message);
      });
    getItemDetails({ clientAuthToken, start, results }, "item")
      .then((response) => {
        // console.log("This is response", response)
      })
      .catch((error) => {
        throw new Error(error.message);
      });

  };

  return (
    <>
      <button onClick={handleClearDatabase}>
        Clear Database
      </button>
      <button onClick={handleSeedDatabase}>
        Reset Database
      </button>
      <div>
        {/* <a href="#" data-wowhead="item=22418" ></a> */}
        {/* {tempData} */}
      </div>
    </>
  );
};

export default App;
