import React from 'react'
import PropTypes from 'prop-types'
import Slot from './Slot';
import ItemList from './ItemList'

const WeaponSlotList = (props) => {
  let { itemsData } = props;
  let slots = [
    "Main Hand",
    "One-Hand",
    "Off Hand",
    "Two-Hand",
  ]
  // Ranged slots are hard coded in: Ranged, RANGEDRIGHT,THROWN.


  slots = slots.map((slot, index) => {
    return <Slot key={index} slot={slot} itemsData={itemsData}></Slot>
  })

  return (
    <ul style={{
      display: "flex",
      flexDirection: "column",
    }}>
      {slots}

      <li>
        <h2>Slot: Ranged</h2>
        <ItemList itemsData={itemsData = itemsData.filter((item) => {
          return (
            item.inventory_type === "Ranged" ||
            item.inventory_type === "RANGEDRIGHT" ||
            item.inventory_type === "THROWN"
          );
        })}
        />
        <h2>Number of items: {itemsData.length}</h2>
      </li>
    </ul>
  )
}

WeaponSlotList.propTypes = {
  itemsData: PropTypes.arrayOf(PropTypes.object),
}

export default WeaponSlotList

