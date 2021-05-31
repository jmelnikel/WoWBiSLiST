import React from 'react'
import PropTypes from 'prop-types'
import Slot from './Slot';
import ItemList from './ItemList'
import '../styling/xSlotList.css';

const SlotList = (props) => {
  let { itemsData } = props;

  let slots = [
    {
      type: "HEAD",
      name: "Head"
    },
    {
      type: "NECK",
      name: "Neck"
    },
    {
      type: "SHOULDER",
      name: "Shoulders"
    },
    // {
    //   type: "BACK",
    //   name: "Back"
    // },
    // {
    //   type: "CHEST",
    //   name: "Chest"
    // },
    // {
    //   type: "WRIST",
    //   name: "Wrist"
    // },
    // {
    //   type: "HAND",
    //   name: "Hands"
    // },
    // {
    //   type: "WAIST",
    //   name: "Waist"
    // },
    // {
    //   type: "LEGS",
    //   name: "Legs"
    // },
    // {
    //   type: "FEET",
    //   name: "Feet"
    // },
    // {
    //   type: "FINGER",
    //   name: "Finger"
    // },
    // {
    //   type: "TRINKET",
    //   name: "Trinket"
    // },
    // {
    //   type: "OFFHAND",
    //   name: "Off Hand"
    // },
    // {
    //   type: "RELIC",
    //   name: "Relic"
    // },
    // {
    //   type: "TABARD",
    //   name: "Tabard"
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
  ]
  // Ranged slots are hard coded in: Ranged, RANGEDRIGHT,THROWN.


  slots = slots.map((slot, index) => {
    return < Slot key={index} slot={slot} itemsData={itemsData} ></Slot>
  });

  return (
    <ul className="xSlotList--ul">
      {slots}
      {/* <li className="slot--li">
        <h2>Ranged</h2>
        <ItemList itemsData={itemsData = itemsData.filter((item) => {
          return (
            item.inventory_type === "Ranged" ||
            item.inventory_type === "RANGEDRIGHT" ||
            item.inventory_type === "Thrown"
          );
        })}
        />
      </li> */}
    </ul >
  )
}

SlotList.propTypes = {
  itemsData: PropTypes.arrayOf(PropTypes.object),
}

export default SlotList;