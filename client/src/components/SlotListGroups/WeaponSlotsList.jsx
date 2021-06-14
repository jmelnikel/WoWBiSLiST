import React, { useState } from 'react'
import Slot from '../Slot';
import ItemList from '../ItemList'
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
    setFilterData(filterDataCopy);
  }

  const handleClearFilter = () => {
    setItemlevelFilter(0)
    setFilterData([])
  }

  const rangedItems = filterData.filter((item) => {
    return (
      item.preview_item.inventory_type.name === "Ranged" ||
      item.preview_item.inventory_type.name === "Thrown" ||
      item.preview_item.inventory_type.type === "RANGEDRIGHT"
    )
  })

  return (
    <form>
      <section className="mainArmor--section">
        <h4>Minimum Item Level: </h4>
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
          className="mainArmor--section__button"
          type="submit"
          onClick={(event) => { applyFilter(event) }}
        >Apply Filter
        </button>
        <button
          className="mainArmor--section__button"
          type="button"
          onClick={handleClearFilter}
        >Clear Filter
        </button>
        <p>Please Note: "Apply Filter" can take up to 20 secs to render.</p>
      </section>

      <ul>
        {WeaponSlotsList}
        <li className="slot--li">
          <h5 className="slot--title">Ranged</h5>
          <ItemList itemsData={rangedItems} />
        </li>
      </ul>
    </form>
  )
}

export default WeaponSlotsList;

// "Ranged",
// "RANGEDRIGHT", need .type
// "Thrown",