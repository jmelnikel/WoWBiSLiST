import React, { useState } from 'react'
import Slot from '../Slot'
import { getArmorItems } from '../../APIs/database';
import _ from 'lodash';

const OtherArmorSlotsList = () => {
  const [itemlevelFilter, setItemlevelFilter] = useState(0);
  const [filterData, setFilterData] = useState([]);

  const otherArmorSlotsList = [
    "Neck",
    "Back",
    // "Tabard",
    "Finger",
    "Trinket",
    "Off Hand",
    "Held In Off-hand",
    "Relic",
    // "Non-equippable",
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
    const response = await getArmorItems()
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
      </section>
      <ul>
        {otherArmorSlotsList}
      </ul>
    </form>

  )
}

export default OtherArmorSlotsList;