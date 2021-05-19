import React from 'react'
import PropTypes from 'prop-types'
import Slot from './Slot'

const ArmorSlotList = (props) => {
  let { itemsData } = props;
  let slots = [
    "Head",
    "Neck",
    "Shoulder",
    "Back",
    "Chest",
    "Wrist",
    "Hands",
    "Legs",
    "Feet",
    "Finger",
    "Trinket",
  ]

  slots = slots.map((slot, index) => {
    return <Slot key={index} slot={slot} itemsData={itemsData}></Slot>
  })

  return (
    <ul>
      {slots}
    </ul>
  )
}

ArmorSlotList.propTypes = {
  itemsData: PropTypes.arrayOf(PropTypes.object),
}

export default ArmorSlotList;

