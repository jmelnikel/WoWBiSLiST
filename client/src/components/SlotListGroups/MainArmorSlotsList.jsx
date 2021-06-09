import React, { useState } from 'react'
import Slot from '../Slot';
import { getArmorItems } from '../../APIs/database';
import _ from 'lodash';

const MainArmorSlotsList = () => {
  const [itemSubclassFilter, setItemSubclassFilter] = useState("");
  const [statsFilter, setStatsFilter] = useState("");
  const [itemlevelFilter, setItemlevelFilter] = useState(0);
  const [filterData, setFilterData] = useState([]);

  const subClassesFilterList = [
    "Cloth",
    "Leather",
    "Mail",
    "Plate",
  ].map((subClass, index) => {
    return (
      <li key={index}>
        <input
          type="radio"
          id={subClass}
          name="subClassFilter"
          value={subClass}
          checked={itemSubclassFilter === subClass}
          onChange={(event) => { handleOnChange("item_subclass", event.target.value) }}
        />
        <label htmlFor={subClass}>{subClass}</label>
      </li>
    )
  });

  const statsFilterList = [
    "Strength",
    "Agility",
    "Intellect",
    "Spirit",
    "Stamina",
  ].map((stat, index) => {
    return (
      <li key={index}>
        <input
          type="radio"
          id={stat}
          name="statsFilter"
          value={stat}
          checked={statsFilter === stat}
          onChange={(event) => { handleOnChange("stats", event.target.value) }}
        />
        <label htmlFor={stat}>{stat}</label>
      </li>
    )
  });

  const itemLevelFilterField = <input
    type="number"
    name="itemLevel"
    value={itemlevelFilter}
    onChange={(event) => { handleOnChange("itemLevel", event.target.value) }}
  />

  const mainArmorSlotsList = [
    "Head",
    "Shoulder",
    "Chest",
    "Wrist",
    "Hands",
    "Waist",
    "Legs",
    "Feet",
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
    if (field === "item_subclass") {
      setItemSubclassFilter(value)
    } else if (field === "stats") {
      setStatsFilter(value)
    } else if (field === "itemLevel") {
      setItemlevelFilter(value)
    }
  };

  const applyFilter = async (event) => {
    event.preventDefault();
    const response = await getArmorItems()
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw new Error(error.message);
      });

    let filterDataCopy = _.cloneDeep(response.data);

    if (itemSubclassFilter) {
      filterDataCopy = filterDataCopy.filter((item) => {
        return item.preview_item.item_subclass.name === itemSubclassFilter
      })
    }

    if (statsFilter) {
      filterDataCopy = filterDataCopy.filter((item) => {
        const array = item.preview_item.stats;
        const statsArray = [];

        if (array) {
          for (let element of array) {
            statsArray.push(element.type.name)
          }

          if (statsArray.includes(statsFilter)) {
            return true;
          } else {
            return false
          }
        }
      })
    }

    if (itemlevelFilter) {
      filterDataCopy = filterDataCopy.filter((item) => {
        return item.level >= itemlevelFilter
      })
    }

    setFilterData(filterDataCopy);
  }

  const handleClearFilter = () => {
    setItemSubclassFilter("")
    setStatsFilter("")
    setItemlevelFilter(0)
    setFilterData([])
  }

  return (
    <form>
      <ul>
        {subClassesFilterList}
      </ul>
      <ul>
        {statsFilterList}
      </ul>
      {itemLevelFilterField}
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
      {mainArmorSlotsList}
    </form>
  )
}

export default MainArmorSlotsList;

