import React, { useState, useEffect } from 'react';
// import './api/wowhead';
import getClientAuthToken from './api/getClientAuthToken';
import { clearDatabase, getItemBaseData, getItemDetails, setItemResources } from './api/handleResetDatabase';
import reformatBaseData from './helpers'
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

  const handleSeedDatabase = async () => {
    const start = 1
    let results = []
    results = await getItemBaseData({ clientAuthToken, start, results }, "search/item")
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw new Error(error.message);
      });

    results = reformatBaseData(results);



    for (let index in results) {
      console.log(`Processing ${index} of ${results.length - 1}. This may take several minutes.`)
      const id = results[index].id
      const response = await getItemDetails({ clientAuthToken, id }, "item")
        .then((response) => {
          return response
        })
        .catch((error) => {
          throw new Error(error.message);
        });

      results[index].level = response.data.level
      results[index].media = response.data.media.key.href
      results[index].quality = response.data.quality.name
      results[index].required_level = response.data.required_level
    }
    console.log("This is results", results)










    // setItemResources(JSON.stringify(response));
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
