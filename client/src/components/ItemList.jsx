import React from 'react'
import PropTypes from 'prop-types'
import Item from './Item'

const ItemList = (props) => {
  let { itemsData } = props;
  itemsData = itemsData.map((item, index) => {
    return <Item key={index} item={item} />
  });

  return (
    <>
      {itemsData}
    </>
  )
}

ItemList.propTypes = {
  itemsData: PropTypes.arrayOf(PropTypes.object)
}

export default ItemList

