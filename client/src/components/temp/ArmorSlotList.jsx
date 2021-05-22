import React from 'react'
import PropTypes from 'prop-types'
import Slot from '../Slot'
import '../styling/xSlotList.css';

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
    "Waist",
    "Legs",
    "Feet",
    "Finger",
    "Trinket",
    "Off Hand",
    "Held In Off-hand",
    "Relic",
    "Tabard",
    // "Non-equippable",
  ]

  slots = slots.map((slot, index) => {
    return <Slot key={index} slot={slot} itemsData={itemsData}></Slot>
  })

  return (
    <ul className="xSlotList--ul">
      {slots}
    </ul>
  )
}

ArmorSlotList.propTypes = {
  itemsData: PropTypes.arrayOf(PropTypes.object),
}

export default ArmorSlotList;

