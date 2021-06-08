import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Slot from '../Slot'
import { getArmorItems } from '../../APIs/database';
import _ from 'lodash';

const OtherArmorSlotsList = () => {
  const [itemlevelFilter, setItemlevelFilter] = useState(0);
  const [filterData, setFilterData] = useState([]);

  const itemLevelFilterField = <input
    type="number"
    name="itemLevel"
    value={itemlevelFilter}
    onChange={(event) => { handleOnChange("itemLevel", event.target.value) }}
  />

  const otherArmorSlotsList = [
    "Neck",
    "Back",
    // "Tabard",
    "Finger",
    "Trinket",
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
      {otherArmorSlotsList}
    </form>

  )
}

OtherArmorSlotsList.propTypes = {
  itemsData: PropTypes.arrayOf(PropTypes.object),
}

export default OtherArmorSlotsList;