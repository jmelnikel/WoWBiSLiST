import React from 'react'
import PropTypes from 'prop-types'

const item = (props) => {
  const { id, name, level, required_level, item_class, item_subclass, inventory_type, quality } = props.item;
  return (
    <li>
      <a href="#" data-wowhead={`item=${id}`}>{name}</a>
      {/* <h2>Name: {name}</h2>
      <p>Id: {id}</p>
      <p>Level: {level}</p>
      <p>Required Level: {required_level}</p>
      <p>Item Class: {item_class}</p>
      <p>Item Subclass{item_subclass}</p>
      <p>Inventory Type: {inventory_type}</p>
      <p>Quality: {quality}</p> */}
    </li>
  )
}

item.propTypes = {
  item: PropTypes.object
}

export default item

