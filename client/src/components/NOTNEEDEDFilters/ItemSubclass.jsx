import React, { useState } from 'react'
import PropTypes from 'prop-types'


const ItemSubclass = (props) => {
  const { handleOnChange, filters } = props;
  let itemSubclasses = [
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

  itemSubclasses = itemSubclasses.map((type, index) => {
    return (
      <li key={index}>
        <input
          type="checkbox"
          id={type.type}
          name={type.name}
          checked={type.name === filters["item_subclass"]}
          onChange={() => {
            handleOnChange({
              "item_subclass": type.name,
            })
          }}
        />
        <label htmlFor={type.type}>{type.name}</label>
      </li>
    )
  })

  return (
    <ul>
      {itemSubclasses}
    </ul>
  )
}

ItemSubclass.propTypes = {
  handleOnChange: PropTypes.func,
  filters: PropTypes.object
}

export default ItemSubclass;

