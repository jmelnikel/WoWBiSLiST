import React, { useState } from 'react'
import PropTypes from 'prop-types'


const InventoryType = (props) => {
  const { handleOnChange, filters } = props;
  let inventoryTypes = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Cloth",
      type: "cloth",
    },
    {
      name: "Leather",
      type: "leather",
    },
    {
      name: "Mail",
      type: "mail",
    },
    {
      name: "Plate",
      type: "plate",
    },
  ]

  inventoryTypes = inventoryTypes.map((type, index) => {
    return (
      <li key={index}>
        <input
          type="checkbox"
          id={type.type}
          name={type.type}
          checked={type.type === filters["inventory_type"]}
          onChange={() => {
            handleOnChange({
              "inventory_type": type.type,
            })
          }}
        />
        <label htmlFor={type.type}>{type.name}</label>
      </li>
    )
  })

  return (
    <ul>
      {inventoryTypes}
    </ul>
  )
}

InventoryType.propTypes = {
  handleOnChange: PropTypes.func,
  filters: PropTypes.object
}

export default InventoryType;

