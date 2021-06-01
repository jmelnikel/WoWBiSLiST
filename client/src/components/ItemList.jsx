import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Item from './Item'
import '../styling/itemList.css';


const ItemList = (props) => {
  const { itemsData } = props;
  let [itemsListData, setItemsListData] = useState([]);

  useEffect(() => {
    setItemsListData(itemsData)
  }, [itemsData]);

  // const removeItem = (id) => {
  //   const prevState = _.cloneDeep(itemsListData);

  //   for (let item of prevState) {
  //     if (item.id === id) {
  //       item.show = false;
  //       setItemsLstData([...prevState, { show: false }])
  //       return;
  //     }
  //   }
  // };


  const items = itemsListData.map((item, index) => {
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

