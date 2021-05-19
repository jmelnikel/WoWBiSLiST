import React, { useState, useEffect } from 'react';
import {
  clearItemsTable,
  setItemsTable,
  removePandCItems,
  getAllItems,
} from './APIs/database';
import {
  getClientAuthToken,
  getItemBaseData,
  getItemDetailsData,
} from './APIs/blizzard'
import reformatBaseData from './helpers'
import ProgressBar from './components/ProgressBar'
import WeaponSlotList from './components/WeaponSlotList'
import ArmorSlotList from './components/ArmorSlotList'
import './styling/App.css';
import _ from "lodash";


const App = () => {
  const [admin, setAdmin] = useState(false)
  const [clientAuthToken, setClientAuthToken] = useState("");
  const [progressBar, setProgressBar] = useState(0);
  let [itemsData, setItemsData] = useState([])



  useEffect(() => {
    getClientAuthToken()
      .then((clientAuthToken) => {
        setClientAuthToken(clientAuthToken.data.access_token);
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }, [admin]);

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

  const handleRemovePandCItems = async () => {
    removePandCItems()
  }

  const handleGetAllItems = async () => {
    const allItems = await getAllItems()
    setItemsData(allItems.data)
  }


  let itemsDataClone1 = _.cloneDeep(itemsData);
  let itemsDataClone2 = _.cloneDeep(itemsData);
  return (
    <>
      <button onClick={handleClearItemsTable}>
        Clear Items Table
      </button>
      <button onClick={handleSetItemsTable}>
        Set Items table
      </button>
      <ProgressBar completed={progressBar} />
      <button onClick={handleRemovePandCItems}>
        Remove Poor and Common Items
      </button>
      <button onClick={handleGetAllItems}>
        Get all Items
      </button>

      <h1>Number of Total Items: {itemsData.length}</h1>
      <WeaponSlotList
        itemsData={itemsDataClone1 = itemsDataClone1.filter((item) => {
          return item.item_class === "Weapon";
        })}
      />
      <h2>Number of Weapons: {itemsDataClone2.length}</h2>
      <ArmorSlotList
        itemsData={itemsDataClone2 = itemsDataClone2.filter((item) => {
          return item.item_class === "Armor";
        })}
      />
      <h2>Number of Weapons: {itemsDataClone2.length}</h2>
    </>
  );
};

export default App;
