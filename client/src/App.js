import React, { useState, useEffect } from 'react';
import { CSVLink } from "react-csv";
import {
  clearItemsTable,
  // writeBaseDataItemsTable,
  writeDetailDataItemsTable,
  getAllItems,
} from './APIs/database';
import {
  getClientAuthToken,
  getItemsBaseData,
  getItemsDetailData,
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
  let [itemsBaseData, setItemsBaseData] = useState([])
  let [itemsDetailData, setItemsDetailData] = useState([])
  let [itemsData, setItemsData] = useState([])
  // const [loading, setLoading] = useState(false);

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

  const handleGetItemsBaseData = async () => {
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

    setItemsBaseData(reformattedBaseData)
    playAlert();
  };

  const handleGetItemsDetailData = async () => {
    for (let item of itemsBaseData) {
      const id = item.id
      const results = await getItemsDetailData({ clientAuthToken, id })
        .then((response) => {
          return response
        })
        .catch((error) => {
          throw new Error(error.message);
        });

      item["preview_item"] = results.data.preview_item
      setProgressBar((100 * (id / 38506)).toFixed(1))
    }

    setItemsDetailData(itemsBaseData)
    playAlert();
  }

  return (
    <>
      {false
        ?
        <section>
          <h2>Last items table reset: May 30, 2012 (Patch 2.5.1)</h2>
          <div style={{ display: "flex", flexDirection: "column", width: "30%" }}>
            <button onClick={() => { clearItemsTable() }}>
              Clear Items Table
            </button>
            <button onClick={handleGetItemsBaseData}>
              Get Items Base Data
            </button>
            {/* <CSVLink
              data={itemsBaseData}
              headers={headers}
              filename={"itemsData.csv"}
            >Download Items Data CSV
            </CSVLink> */}

            {/* <button onClick={() => { writeBaseDataItemsTable(JSON.stringify(itemsBaseData)) }}>
              Write Base Data Items Table
            </button> */}
            <button onClick={handleGetItemsDetailData}>
              Get Items Detail Data
            </button>
            <button onClick={() => { writeDetailDataItemsTable(JSON.stringify(itemsDetailData)) }}>
              Write Detail Data Items Table
            </button>
          </div>
          <ProgressBar completed={progressBar} />
          {/* <h2>Total Number of Items Base Data in State: {itemsBaseData.length}</h2> */}
          <h2>Total Number of Items Detail Data in State: {itemsDetailData.length}</h2>
        </section>
        :
        <section>
          {/* <Filters /> */}
          <button onClick={async () => {
            // setLoading(true)
            const allItems = await getAllItems();
            const itemsData = allItems.data;
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
