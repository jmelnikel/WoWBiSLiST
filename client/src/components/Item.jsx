import React from 'react';
import PropTypes from 'prop-types';
import '../styling/item.css';

const Item = (props) => {
  // const { removeItem } = props;
  const { show, preview_item } = props.item


  return (
    <>
      {show &&
        <li className="item--li" style={{ width: "150px" }}>
          <h4>{preview_item.name}</h4>
          {/* <a href="void" data-wowhead={`item=${id}`}>{name}</a> */}
          <button
            onClick={() => {
              // removeItem(id)
            }}
          >Remove Item</button>
        </li>
      }
    </>
  )
}

Item.propTypes = {
  item: PropTypes.object
}

export default Item

