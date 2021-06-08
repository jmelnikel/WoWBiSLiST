import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Slot from '../Slot';
import { getArmorItems } from '../../APIs/database';
import _ from 'lodash';

const MainArmorSlotsList = () => {
  // const [armorData, setArmorData] = useState([]);
  const [itemSubclassFilter, setItemSubclassFilter] = useState(null);
  const [statsFilter, setStatsFilter] = useState(null);
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
          // checked={filter[subClass]}
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
          // checked={filter[stats]}
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
      setItemSubclassFilter([value])
    } else if (field === "stats") {
      setStatsFilter([value])
    } else if (field === "itemLevel") {
      setItemlevelFilter(value)
    }
  };

  const handleApplyFilter = async (event) => {
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
        return item.preview_item.item_subclass.name === itemSubclassFilter[0]
      })
    }






    if (itemlevelFilter) {
      filterDataCopy = filterDataCopy.filter((item) => {
        return item.level >= itemlevelFilter
      })
    }

    console.log(filterDataCopy)
    setFilterData(filterDataCopy);
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
        onClick={(event) => { handleApplyFilter(event) }}
      >Apply Filter
      </button>
      {mainArmorSlotsList}
    </form>
  )
}

MainArmorSlotsList.propTypes = {
  itemsData: PropTypes.arrayOf(PropTypes.object),
}

export default MainArmorSlotsList;

