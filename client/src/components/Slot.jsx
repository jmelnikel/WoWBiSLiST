import React from 'react'
import PropTypes from 'prop-types'
import ItemList from './ItemList'
import '../styling/slot.css';

const Slot = (props) => {
  let { slot, itemsData } = props;

  itemsData = itemsData.filter((item) => {
    return item.inventory_type === slot
  })

  return (
    <li className="slot--li">
      <h2>{slot}</h2>
      <ItemList itemsData={itemsData}
      />
      {/* <h2>Number of items: {itemsData.length}</h2> */}
    </li>
  )
}

Slot.propTypes = {
  itemsData: PropTypes.arrayOf(PropTypes.object),
}

export default Slot;

