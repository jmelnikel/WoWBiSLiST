import React, { useState, useEffect } from 'react';
import { CSVLink } from "react-csv";
import {
  clearItemsTable,
  writeBaseDataItemsTable,
  getAllItems,
} from './APIs/database';
import {
  getClientAuthToken,
  getItemsBaseData,
  // getItemsDetailsData,
} from './APIs/blizzard'
import reformatBaseData from './helpers';
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
  const headers = [
    "id",
    "name",
    "quality",
    "level",
    "required_level",
    "item_class",
    "item_subclass",
    "inventory_type",
    // "preview_item",
  ];

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

    const reformattedBaseData = reformatBaseData(itemsBaseData);

    // for (let itemObject of reformattedBaseData) {
    //   const id = itemObject.id
    //   const itemsDetailsData = await getItemsDetailsData({ clientAuthToken, id })
    //     .then((response) => {
    //       return response
    //     })
    //     .catch((error) => {
    //       throw new Error(error.message);
    //     });
    //   const preview_item = JSON.stringify(itemsDetailsData.data.preview_item);
    //   itemObject["preview-item"] = preview_item;
    //   setProgressBar((100 * (id / 38506)).toFixed(1))
    // }

    // console.log("This is reformattedBaseData", reformattedBaseData)
    setItemsData(reformattedBaseData)

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
          <div style={{ display: "flex", flexDirection: "column", width: "30%" }}>
            <button onClick={handleGetItemsData}>
              Get Items Data
            </button>
            <CSVLink
              data={itemsData}
              headers={headers}
              filename={"itemsData.csv"}
            >Download Items Data CSV
            </CSVLink>
            <button onClick={() => { clearItemsTable() }}>
              Clear Items Table
            </button>
            <button onClick={() => { writeBaseDataItemsTable() }}>
              Write Base Data Items Table
          </button>
          </div>
          <ProgressBar completed={progressBar} />
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
