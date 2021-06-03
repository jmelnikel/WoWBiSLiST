import React from 'react'
import PropTypes from 'prop-types'
import Slot from './Slot';
import ItemList from './ItemList'
import '../styling/xSlotList.css';

const SlotList = (props) => {
  let { itemsData } = props;

  const armorSlots = [
    "Head",
    "Shoulder",
    "Chest",
    "Wrist",
    "Hands",
    "Waist",
    "Legs",
    "Feet",
  ].map((slot, index) => {
    return (
      <Slot
        key={index}
        slot={slot}
        itemsData={itemsData}
      />
    )
  });

  const otherArmorSlots = [
    "Neck",
    "Back",
    "Tabard",
    "Finger",
    "Trinket",
  ].map((slot, index) => {
    return (
      <Slot
        key={index}
        slot={slot}
        itemsData={itemsData}
      />
    )
  });





  //   type: "OFFHAND",
  //   name: "Off Hand"
  // },
  // {
  //   type: "RELIC",
  //   name: "Relic"
  // },
  // {
  //   type: "MAINHAND",
  //   name: "Main Hand"
  // },
  // {
  //   type: "ONEHAND",
  //   name: "One Hand"
  // },
  // {
  //   type: "TWOHAND",
  //   name: "Two Hand"
  // },

  // "Held In Off-hand",
  // "Ranged",
  // "RANGEDRIGHT",
  // "Thrown",
  // "Non-equippable"

  // Ranged slots are hard coded in: Ranged, RANGEDRIGHT,THROWN.

  return (
    <ul className="xSlotList--ul">
      {armorSlots}
      {otherArmorSlots}
    </ul >
  )
}

SlotList.propTypes = {
  itemsData: PropTypes.arrayOf(PropTypes.object),
}

export default SlotList;