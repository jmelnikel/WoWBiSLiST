import React from 'react'
import PropTypes from 'prop-types'
import ItemList from './ItemList'
import '../styling/slotsAndItems.css';

const Slot = (props) => {
  let { slot, itemsData } = props;

  const itemsDataBySlot = itemsData.filter((item) => {
    return item.preview_item.inventory_type.name === slot;
  })

  return (
    <li className="slot--li">
      <h5 className="slot--title">{slot}</h5>
      <ItemList itemsData={itemsDataBySlot} />
    </li>
  )
}

Slot.propTypes = {
  itemsData: PropTypes.arrayOf(PropTypes.object),
  slot: PropTypes.string,
}

export default Slot;

