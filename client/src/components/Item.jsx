import React from 'react'
import PropTypes from 'prop-types'

const item = (props) => {
  const { name, level, item_class } = props.item;
  return (
    <>
      <p>{name}</p>
      <p>{level}</p>
      <p>{item_class}</p>
    </>
  )
}

item.propTypes = {
  item: PropTypes.object
}

export default item

