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
  handleSplitBaseData,
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
  const [itemsBaseData, setItemsBaseData] = useState([])
  const [cleanedBaseData, setCleanedBaseData] = useState([])
  let [armorBaseData, setArmorBaseData] = useState([]);
  let [weaponBaseData, setWeaponBaseData] = useState([]);
  let [armorDetailData, setArmorDetailData] = useState([]);


  let [weaponDetailData, setWeaponDetailData] = useState([]);
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

  // useEffect(() => {
  //   getAllItems()
  //     .then((response) => {
  //       const itemsData = response.data;
  //       setItemsData(itemsData);
  //     })
  //     .catch((error) => {
  //       throw new Error(error.message);
  //     });
  // }, [])


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
    for (let i = itemsBaseData.length - 1; i >= 0; i--) {
      const quality = itemsBaseData[i].quality.type;
      if (quality === "POOR" || quality === "COMMON" || quality === "UNCOMMON") {
        itemsBaseData.splice(i, 1)
      }
    }
    setCleanedBaseData(itemsBaseData)
    console.log("Data Cleaned", itemsBaseData.length)
  }

  // This function splits the data into Armor and Weapon and sets each into individual state.
  const handleSplitBaseData = (cleanedBaseData) => {
    const armorData = cleanedBaseData.filter((item) => {
      return item.item_class.name.en_US === "Armor"
    })
    setArmorBaseData(armorData)
    console.log("This is armorBaseData", armorData.length)

    const weaponData = cleanedBaseData.filter((item) => {
      return item.item_class.name.en_US === "Weapon"
    })
    setWeaponBaseData(weaponData)
    console.log("This is weaponBaseData", weaponData.length)
  }

  // Takes armorBaseData, gets and adds proveiw_item data and sets to state.
  const handleGetArmorDetailData = async () => {
    for (let item of armorBaseData) {
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

    setArmorDetailData(armorBaseData)
    playAlert();
  }






  const handleGetWeaponDetailData = async (item_class) => {
    for (let item of weaponBaseData) {
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

    setWeaponDetailData(weaponBaseData)
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

  // ?refactor functions above - try.

  return (
    <>
      {true
        ?
        <section>
          <h2>Last items table reset: May 30, 2012 (Patch 2.5.1)</h2>
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




            {/* <button onClick={handleRemoveTestItems}>
              Remove Test Items
            </button> */}





          </div>
          <ProgressBar completed={progressBar} />
          <h2>Total Number of armorDetailData in State: {armorDetailData.length}</h2>
          <h2>Total Number of weaponDetailData in State: {weaponDetailData.length}</h2>
          <h2>Total Number of items Detail Data in State: {armorDetailData.length + weaponDetailData.length}</h2>
        </section>
        :
        <section>
          {/* <MainArmorSlotsList itemsData={splitItemsData(itemsData, "Armor")} /> */}
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
