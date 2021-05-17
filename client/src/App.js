import React, { useState, useEffect } from 'react';
import getClientAuthToken from './api/getClientAuthToken';
import {
  clearDatabase,
  getItemBaseData,
  getItemDetails,
  setItemResources,
} from './api/handleResetDatabase';
import reformatBaseData from './helpers'
import ProgressBar from './components/ProgressBar'
import './App.css';
import 'normalize.css';

const App = () => {
  const [clientAuthToken, setClientAuthToken] = useState("");
  const [progressBar, setProgressBar] = useState(0);


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
    results = await getItemBaseData({ clientAuthToken, start, results }, "item")
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw new Error(error.message);
      });

    results = reformatBaseData(results);

    for (let index in results) {
      const id = results[index].id
      const response = await getItemDetails({ clientAuthToken, id }, "item")
        .then((response) => {
          return response
        })
        .catch((error) => {
          throw new Error(error.message);
        });

      results[index].level = response.data.level
      results[index].quality = response.data.quality.name
      results[index].required_level = response.data.required_level

      setProgressBar((100 * (Number.parseInt(index, 10) + 1) / results.length).toFixed(1))
    }
    setItemResources(JSON.stringify(results));
    console.log("Items batch sent to be written to database.")
  };

  return (
    <>
      <button onClick={handleClearDatabase}>
        Clear Database
      </button>
      <button onClick={handleSeedDatabase}>
        Reset Database
      </button>
      <ProgressBar completed={progressBar} />
    </>
  );
};

export default App;
