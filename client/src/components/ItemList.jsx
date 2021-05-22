import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Item from './Item'
import '../styling/itemList.css';
import _ from "lodash";

const ItemList = (props) => {
  let [itemsData, setItemsData] = useState([]);

  useEffect(() => {
    setItemsData(props.itemsData)
  }, [props]);

  const removeItem = (id) => {
    const prevState = _.cloneDeep(itemsData);

    for (let item of prevState) {
      if (item.id === id) {
        item.show = false;
        setItemsData([...prevState, { show: false }])
        return;
      }
    }
  };


  return (
    <ul className="itemList--ul">
      {itemsData.map((item, index) => {
        return (
          <Item
            key={index}
            item={item}
            removeItem={removeItem}
          />
        )
      })}
    </ul>
  )
}

ItemList.propTypes = {
  itemsData: PropTypes.arrayOf(PropTypes.object)
}

export default ItemList

