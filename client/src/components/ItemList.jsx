import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Item from './Item'
import '../styling/itemList.css';


const ItemList = (props) => {
  let [itemsData, setItemsData] = useState([]);

  useEffect(() => {
    setItemsData(props.itemsData)
  }, [props]);

  // const removeItem = (id) => {
  //   const prevState = _.cloneDeep(itemsData);

  //   for (let item of prevState) {
  //     if (item.id === id) {
  //       item.show = false;
  //       setItemsData([...prevState, { show: false }])
  //       return;
  //     }
  //   }
  // };


  const items = itemsData.map((item, index) => {
    return (
      <li key={index} className="item--li">
        <Item
          item={item}
        // removeItem={removeItem}
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

