import React, { useState } from 'react'
import Slot from '../Slot';
import { getArmorItems } from '../../APIs/database';
import '../../styling/Filters.css'
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
          className="mainArmor--radio"
          type="radio"
          id={subClass}
          name="subClassFilter"
          value={subClass}
          checked={itemSubclassFilter === subClass}
          onChange={(event) => { handleOnChange("item_subclass", event.target.value) }}
        />
        <label className="mainArmor--label" htmlFor={subClass}>{subClass}</label>
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
          className="mainArmor--radio"
          type="radio"
          id={stat}
          name="statsFilter"
          value={stat}
          checked={statsFilter === stat}
          onChange={(event) => { handleOnChange("stats", event.target.value) }}
        />
        <label className="mainArmor--label" htmlFor={stat}>{stat}</label>
      </li>
    )
  });

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
      <section className="mainArmor--section">
        <h3>Armor Class: </h3>
        <ul className="mainArmor--ul">
          {subClassesFilterList}
        </ul>
      </section>

      <section className="mainArmor--section">
        <h3>Armor Attribute: </h3>
        <ul className="mainArmor--ul">
          {statsFilterList}
        </ul>
      </section>

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
      <ul>
        {mainArmorSlotsList}
      </ul>
    </form>
  )
}

export default MainArmorSlotsList;

