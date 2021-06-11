import React, { useState } from 'react'
import Slot from '../Slot';
import { getWeaponItems } from '../../APIs/database';
import _ from 'lodash';

const WeaponSlotsList = () => {
  const [itemlevelFilter, setItemlevelFilter] = useState(0);
  const [filterData, setFilterData] = useState([]);

  const WeaponSlotsList = [
    "Two-Hand",
    "Main Hand",
    "One-Hand",
    "Off Hand",
    // "Ranged",
    // "RANGEDRIGHT", need .type
    // "Thrown",
  ].map((slot, index) => {
    return (
      <Slot
        key={index}
        slot={slot}
        itemsData={filterData}
      />
    )
  });

  const handleOnChange = (field, value) => {
    if (field === "itemLevel") {
      setItemlevelFilter(value)
    }
  };

  const applyFilter = async (event) => {
    event.preventDefault();
    const response = await getWeaponItems()
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw new Error(error.message);
      });

    let filterDataCopy = _.cloneDeep(response.data);

    if (itemlevelFilter) {
      filterDataCopy = filterDataCopy.filter((item) => {
        return item.level >= itemlevelFilter
      })
    }
    console.log(filterDataCopy)
    setFilterData(filterDataCopy);
  }

  const handleClearFilter = () => {
    setItemlevelFilter(0)
    setFilterData([])
  }

  return (
    <form>
      <section className="mainArmor--section">
        <h3>Minimum Item Level: </h3>
        <input
          className="mainArmor--levelNumber"
          type="number"
          name="itemLevel"
          value={itemlevelFilter}
          onChange={(event) => { handleOnChange("itemLevel", event.target.value) }}
        />
      </section>

      <section className="mainArmor--section__buttons">
        <button
          type="submit"
          onClick={(event) => { applyFilter(event) }}
        >Apply Filter
        </button>
        <button
          type="button"
          onClick={handleClearFilter}
        >Clear Filter
        </button>
      </section>


      {WeaponSlotsList}
    </form>
  )
}

export default WeaponSlotsList;

  // "Held In Off-hand",
  // Ranged slots are hard coded in: Ranged, RANGEDRIGHT,THROWN or Thrown??.
  // "Non-equippable"

// Main and Shield - are shields in armor?
// 2H weapon
// Dual Wield
// Held in off hand

// Relics, idols, libram, etc?
// Ranged

// wands??