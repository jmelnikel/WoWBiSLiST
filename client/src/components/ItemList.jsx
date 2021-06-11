import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Item from './Item'
import '../styling/slotsAndItems.css';
import _ from 'lodash';


const ItemList = (props) => {
  const { itemsData } = props;
  let [itemsListData, setItemsListData] = useState([]);

  useEffect(() => {
    setItemsListData(itemsData)
  }, [itemsData]);

  const items = itemsListData.map((item, index) => {
    return (
      <li key={index} className="itemList--li">
        <Item
          item={item}
        />
      </li>
    )
  })

  return (
    <ul className="itemList--ul">
      {items}
    </ul>
  )
}

ItemList.propTypes = {
  itemsData: PropTypes.arrayOf(PropTypes.object)
}

export default ItemList

