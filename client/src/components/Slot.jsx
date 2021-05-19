import React from 'react'
import PropTypes from 'prop-types'
import ItemList from './ItemList'

const Slot = (props) => {
  let { slot, itemsData } = props;

  return (
    <li>
      <h2>Slot: {slot}</h2>
      <ItemList itemsData={itemsData = itemsData.filter((item) => {
        return item.inventory_type === slot;
      })}
      />
      <h2>Number of items: {itemsData.length}</h2>
    </li>
  )
}

Slot.propTypes = {
  itemsData: PropTypes.arrayOf(PropTypes.object),
}

export default Slot;

