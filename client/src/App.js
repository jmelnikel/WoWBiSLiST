import React, { useState, useEffect } from 'react';
import {
  clearItemsTable,
  setItemsTable,
  getArmorItems,
} from './APIs/database';
import {
  getClientAuthToken,
  getItemBaseData,
  getItemDetailsData,
} from './APIs/blizzard'
import reformatBaseData from './helpers'
// import ProgressBar from './components/ProgressBar'
import ItemsList from './components/ItemList'
import Filters from './components/Filters'
import './styling/App.css';



const App = () => {
  const [admin, setAdmin] = useState(false)
  const [clientAuthToken, setClientAuthToken] = useState("");
  const [progressBar, setProgressBar] = useState(0);
  const [itemsData, setItemsData] = useState([])
  let [filters, setFilters] = useState({
    itemClass: null,
  })

  useEffect(() => {
    getClientAuthToken()
      .then((clientAuthToken) => {
        setClientAuthToken(clientAuthToken.data.access_token);
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }, [admin]);

  useEffect(() => {
    const newData = itemsData.filter((filters) => {

    })
  }, [filters])





  const handleClearItemsTable = () => {
    clearItemsTable();
  };

  const handleSetItemsTable = async () => {
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
      const response = await getItemDetailsData({ clientAuthToken, id }, "item")
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
    setItemsTable(JSON.stringify(results));
    console.log("Items batch sent to be written to database.")
  };

  const handleGetArmorItems = async () => {
    const response = await getArmorItems()
    setItemsData(response.data)
  }
  return (
    <>
      {/* <button onClick={handleClearItemsTable}>
        Clear Items Table
      </button>
      <button onClick={handleSetItemsTable}>
        Set Items table
      </button>
      <ProgressBar completed={progressBar} /> */}


      <Filters itemsData={itemsData} filters={filters} setFilters={setFilters} />
      <button onClick={handleGetArmorItems}>
        Get all items from database
      </button>
      <ItemsList itemsData={itemsData} />
    </>
  );
};

export default App;
