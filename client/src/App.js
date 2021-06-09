import React, { useState, useEffect } from 'react';
import {
  clearArmorTable,
  writeDetailDataArmorTable,
  deleteDuplicateRowsArmorTable,
  clearWeaponTable,
  writeDetailDataWeaponTable,
  deleteDuplicateRowsWeaponTable,
  // getAllItems,
} from './APIs/database';
import {
  getClientAuthToken,
  getItemsBaseData,
  getItemsDetailData,
} from './APIs/blizzard'
import {
  reformatBaseData,
  playAlert,
  cleanBaseData,
} from './helpers';
import ProgressBar from './components/ProgressBar';
// import beanEater from './assets/images/beanEater.svg'
import MainArmorSlotsList from './components/SlotListGroups/MainArmorSlotsList'
import OtherArmorSlotsList from './components/SlotListGroups/OtherArmorSlotsList'
import WeaponSlotsList from './components/SlotListGroups/WeaponSlotsList'
import './styling/App.css';
import _ from 'lodash';

const App = () => {
  const [admin, setAdmin] = useState(false)
  const [clientAuthToken, setClientAuthToken] = useState("");
  const [progressBar, setProgressBar] = useState("0");
  const [itemsBaseData, setItemsBaseData] = useState([])
  const [cleanedBaseData, setCleanedBaseData] = useState([])
  let [armorBaseData, setArmorBaseData] = useState([]);
  let [armorDetailData, setArmorDetailData] = useState([]);
  let [weaponBaseData, setWeaponBaseData] = useState([]);
  let [weaponDetailData, setWeaponDetailData] = useState([]);
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

  // This function gets all Armor/Weapon base data, reformates the structure, and sets state as a flattened array of item objects.
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
    console.log("Recieved Items Base Data", reformattedBaseData.length)
    playAlert();
  };

  // This function removes POOR, COMMON, and UNCOMMON quality items and sets state as an array of item objects.
  const handleCleanBaseData = (itemsBaseData) => {
    const itemsBaseDataCopy = _.cloneDeep(itemsBaseData)
    const cleanedBaseData = cleanBaseData(itemsBaseDataCopy)
    setCleanedBaseData(cleanedBaseData)
    console.log("Data Cleaned", itemsBaseData.length)
  }

  // This function splits the data into Armor and Weapon and sets each into individual state.
  const handleSplitBaseData = (cleanedBaseData) => {
    const cleanedBaseDataCopy = _.cloneDeep(cleanedBaseData)
    const armorData = cleanedBaseDataCopy.filter((item) => {
      return item.item_class.name.en_US === "Armor"
    })
    setArmorBaseData(armorData)
    console.log("This is armorBaseData", armorData.length)

    const weaponData = cleanedBaseDataCopy.filter((item) => {
      return item.item_class.name.en_US === "Weapon"
    })
    setWeaponBaseData(weaponData)
    console.log("This is weaponBaseData", weaponData.length)
  }

  // Takes armorBaseData, gets and adds proveiw_item data, and sets to state.
  const handleGetArmorDetailData = async () => {
    const armorBaseDataCopy = _.cloneDeep(armorBaseData)
    for (let item of armorBaseDataCopy) {
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

    setArmorDetailData(armorBaseDataCopy)
    playAlert();
  }

  // Takes weaponBaseData, gets and adds proveiw_item data, and sets to state.
  const handleGetWeaponDetailData = async () => {
    const weaponBaseDataCopy = _.cloneDeep(weaponBaseData)
    for (let item of weaponBaseDataCopy) {
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
    setWeaponDetailData(weaponBaseDataCopy)
    playAlert();
  };

  return (
    <>
      {false
        ?
        <section>
          <h2>Last items table reset: June 08, 2012 (Patch 2.5.1)</h2>
          <div style={{ display: "flex", flexDirection: "column", width: "30%" }}>
            <button onClick={handleGetItemsBaseData}>
              Get Items Base Data
            </button>
            <button onClick={() => { handleCleanBaseData(itemsBaseData) }}>
              Clean Base Data
            </button>
            <button onClick={() => { handleSplitBaseData(cleanedBaseData) }}>
              Split Base Data
            </button>

            <br></br>

            <button onClick={handleGetArmorDetailData}>
              Get Armor Detail Data
            </button>
            <button onClick={() => { clearArmorTable() }}>
              Clear Armor Table
            </button>
            <button onClick={() => { writeDetailDataArmorTable(JSON.stringify(armorDetailData)) }}>
              Write Detail Data Armor Table
            </button>
            <button onClick={() => { deleteDuplicateRowsArmorTable() }}>
              Delete Armor Duplicate Rows
            </button>

            <br></br>

            <button onClick={handleGetWeaponDetailData}>
              Get Weapon Detail Data
            </button>
            <button onClick={() => { clearWeaponTable() }}>
              Clear Weapon Table
            </button>
            <button onClick={() => { writeDetailDataWeaponTable(JSON.stringify(weaponDetailData)) }}>
              Write Detail Data Weapon Table
            </button>
            <button onClick={() => { deleteDuplicateRowsWeaponTable() }}>
              Delete Weapon Duplicate Rows
            </button>

          </div>
          <ProgressBar completed={progressBar} />
          <h2>Total Number of armorDetailData in State: {armorDetailData.length}</h2>
          <h2>Total Number of weaponDetailData in State: {weaponDetailData.length}</h2>
          <h2>Total Number of items Detail Data in State: {armorDetailData.length + weaponDetailData.length}</h2>
        </section>
        :
        <section>
          {/* <MainArmorSlotsList itemsData={armorDetailData} /> */}
          {/* <OtherArmorSlotsList itemsData={armorDetailData} /> */}
          <WeaponSlotsList itemsData={weaponDetailData} />
        </section>
      }
    </>
  );
};

export default App;

// --Todo--
// rings and such in sets?
// Proptypes
// Admin login
// ?refactor functions above - try.
// testing before filtering