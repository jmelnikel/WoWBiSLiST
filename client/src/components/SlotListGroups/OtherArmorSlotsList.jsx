import React from 'react'
import PropTypes from 'prop-types'
import Slot from '../Slot'

const OtherArmorSlotsList = (props) => {
  const { itemsData } = props;

  const otherArmorSlotsList = [
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
  return (
    <div>
      {otherArmorSlotsList}
    </div>
  )
}

OtherArmorSlotsList.propTypes = {
  itemsData: PropTypes.arrayOf(PropTypes.object),
}

export default OtherArmorSlotsList;