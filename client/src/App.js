import React, { useState, useEffect } from 'react';
import {
  clearItemsTable,
  writeDetailDataItemsTable,
  deleteDuplicateRowsItemsTable,
  getAllItems,
} from './APIs/database';
import {
  getClientAuthToken,
  getItemsBaseData,
  getItemsDetailData,
} from './APIs/blizzard'
import {
  reformatBaseData,
  playAlert,
  splitItemsData,
} from './helpers';
import ProgressBar from './components/ProgressBar';
// import beanEater from './assets/images/beanEater.svg'
import MainArmorSlotsList from './components/SlotListGroups/MainArmorSlotsList'
import OtherArmorSlotsList from './components/SlotListGroups/OtherArmorSlotsList'
import './styling/App.css';

const App = () => {
  const [admin, setAdmin] = useState(false)
  const [clientAuthToken, setClientAuthToken] = useState("");
  const [progressBar, setProgressBar] = useState("0");
  let [itemsBaseData, setItemsBaseData] = useState([]);
  let [itemsDetailData, setItemsDetailData] = useState([]);
  let [itemsData, setItemsData] = useState([]);
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

  useEffect(() => {
    getAllItems()
      .then((response) => {
        const itemsData = response.data;
        setItemsData(itemsData);
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }, [])


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
  };


  //   type: "OFFHAND",
  //   name: "Off Hand"
  // },
  // {
  //   type: "RELIC",
  //   name: "Relic"
  // },
  // {
  //   type: "MAINHAND",
  //   name: "Main Hand"
  // },
  // {
  //   type: "ONEHAND",
  //   name: "One Hand"
  // },
  // {
  //   type: "TWOHAND",
  //   name: "Two Hand"
  // },

  // "Held In Off-hand",
  // "Ranged",
  // "RANGEDRIGHT",
  // "Thrown",
  // "Non-equippable"

  // Ranged slots are hard coded in: Ranged, RANGEDRIGHT,THROWN.


  return (
    <>
      {false
        ?
        <section>
          <h2>Last items table reset: May 30, 2012 (Patch 2.5.1)</h2>
          <div style={{ display: "flex", flexDirection: "column", width: "30%" }}>
            <button onClick={handleGetItemsBaseData}>
              Get Items Base Data
            </button>
            <button onClick={handleGetItemsDetailData}>
              Get Items Detail Data
            </button>

            {/* <button onClick={handleRemoveTestItems}>
              Remove Test Items
            </button> */}


            <button onClick={() => { clearItemsTable() }}>
              Clear Items Table
            </button>
            <button onClick={() => { writeDetailDataItemsTable(JSON.stringify(itemsDetailData)) }}>
              Write Detail Data Items Table
            </button>
            <button onClick={() => { deleteDuplicateRowsItemsTable() }}>
              Delete Duplicate Rows
            </button>
          </div>
          <ProgressBar completed={progressBar} />
          <h2>Total Number of Items Detail Data in State: {itemsDetailData.length}</h2>
        </section>
        :
        <section>
          <MainArmorSlotsList itemsData={splitItemsData(itemsData, "Armor")} />
          {/* <button onClick={async () => {
            // setLoading(true)
            const allItems = await getAllItems();
            const itemsData = allItems.data;
            setItemsData(itemsData);
            // setLoading(false)
          }}>
            Apply Filter
          </button> */}

          {/* <OtherArmorSlotsList itemsData={splitItemsData(itemsData, "Armor")} /> */}
          {/* <WeaponSlots itemsData={splitItemsData(itemsData, "Weapon")} /> */}

          {/* Main and Shield
2H weapon
Dual Wield
Held in off hand

Relics
Ranged

wands?? */}
          {/* Todo
Proptypes
Admin login
remove test items
testing before filtering
filters for each */}

        </section>
      }
    </>
  );
};

export default App;
