import React from 'react'
import PropTypes from 'prop-types'
import ItemList from './ItemList'
import '../styling/slot.css';

const Slot = (props) => {
  let { slot, itemsData } = props;

  const itemsDataBySlot = itemsData.filter((item) => {
    return item.preview_item.inventory_type.type === slot.type;
  })

  return (
    <li className="slot--li">
      <h2>{slot.name}</h2>
      <ItemList itemsData={itemsDataBySlot} />
    </li>
  )
}

Slot.propTypes = {
  itemsData: PropTypes.arrayOf(PropTypes.object),
}

export default Slot;

