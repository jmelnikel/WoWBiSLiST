import React, { useState, useEffect } from 'react';
import {
  clearItemsTable,
  writeItemsTable,

  removePandCItems,
  getAllItems,
} from './APIs/database';
import {
  getClientAuthToken,
  getItemsBaseData,
  getItemsDetailsData,
} from './APIs/blizzard'
import getItemId from './helpers';
import ProgressBar from './components/ProgressBar';
import Filters from './components/Filters/Filters';
// import beanEater from './assets/images/beanEater.svg'
import SlotList from './components/SlotList'
import './styling/App.css';
// import _ from "lodash";


const App = () => {
  const [admin, setAdmin] = useState(false)
  const [clientAuthToken, setClientAuthToken] = useState("");
  const [progressBar, setProgressBar] = useState("0");
  let [itemsData, setItemsData] = useState([])
  // const [loading, setLoading] = useState(false)

  useEffect(() => {
    getClientAuthToken()
      .then((clientAuthToken) => {
        setClientAuthToken(clientAuthToken.data.access_token);
        setAdmin(true)
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }, [admin]);

  const playAlert = () => {
    const audio = document.getElementById('audioAlert');
    audio.play()
  }

  const handleGetItemsData = async () => {
    const start = 1
    let results = []
    const itemsBaseData = await getItemsBaseData({ clientAuthToken, start, results })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw new Error(error.message);
      });

    const reformattedBaseData = getItemId(itemsBaseData);

    for (let array of reformattedBaseData) {
      for (let itemObject of array) {
        const id = itemObject.id
        const itemsDetailsData = await getItemsDetailsData({ clientAuthToken, id })
          .then((response) => {
            return response
          })
          .catch((error) => {
            throw new Error(error.message);
          });

        itemObject["preview-item"] = itemsDetailsData.data.preview_item;

      }
    }

    console.log("This is reformattedBaseData", reformattedBaseData)

    // setProgressBar((100 * (Number.parseInt(index, 10) + 1) / results.length).toFixed(1))


    // writeItemsTable(JSON.stringify(results));
    playAlert();
    console.log("Items batch sent to be written to database.")
  };

  return (
    <>
      {true
        ?
        <section>
          <h2>Last items table reset: May 20, 2012 (Patch 2.5.1)</h2>
          <button onClick={() => { clearItemsTable() }}>
            Clear Items Table
          </button>
          <button onClick={handleGetItemsData}>
            Get Items Data
          </button>
          {/* <button onClick={handleWriteItemsTable}>
            Write Items Table
          </button> */}
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
