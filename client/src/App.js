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
import reformatBaseData from './helpers';
import ProgressBar from './components/ProgressBar';
import Filters from './components/Filters/Filters';
// import beanEater from './assets/images/beanEater.svg'
import SlotList from './components/SlotList'
import './styling/App.css';
import _ from "lodash";


const App = () => {
  const [admin, setAdmin] = useState(false)
  const [clientAuthToken, setClientAuthToken] = useState("");
  const [progressBar, setProgressBar] = useState("0");
  let [itemsData, setItemsData] = useState([])
  // const [loading, setLoading] = useState(false)

  useEffect(() => {
    // getClientAuthToken()
    //   .then((clientAuthToken) => {
    //     setClientAuthToken(clientAuthToken.data.access_token);
    //     setAdmin(true)
    //   })
    //   .catch((error) => {
    //     throw new Error(error.message);
    //   });
  }, [admin]);

  const playAlert = () => {
    const audio = document.getElementById('audioAlert');
    audio.play()
  }

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
    playAlert();
    console.log("Items batch sent to be written to database.")
  };

  return (
    <>
      {admin
        ?
        <section>
          <h2>Last items table reset: May 20, 2012 (Patch 2.5.1)</h2>
          <button onClick={() => { clearItemsTable() }}>
            Clear Items Table
          </button>
          <button onClick={handleSetItemsTable}>
            Set Items table
          </button>
          <ProgressBar completed={progressBar} />
          <button onClick={() => { removePandCItems() }}>
            Remove Poor and Common Items
          </button>
          <h1>Number of Total Items: {itemsData.length}</h1>
        </section>
        :
        <section>
          <Filters />
          <button onClick={async () => {
            // setLoading(true)
            const allItems = await getAllItems();
            const itemsData = allItems.data;
            for (let item of itemsData) {
              item.show = true;
            }
            setItemsData(itemsData);
            // setLoading(false)
          }}>
            Get all Items
          </button>
          <br></br>
          <SlotList
            itemsData={itemsData}
          />
        </section>
      }
    </>
  );
};

export default App;
