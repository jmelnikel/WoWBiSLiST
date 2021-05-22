import React from 'react';
import PropTypes from 'prop-types';
import '../styling/item.css';

const Item = (props) => {
  const { removeItem } = props;
  const {
    id,
    name,
    // level,
    // required_level,
    // item_class,
    // item_subclass,
    // inventory_type,
    // quality
    show,
  } = props.item;

  return (
    <>
      {show &&
        <li className="item--li">
          <a href="void" data-wowhead={`item=${id}`}>{name}</a>
          <button
            onClick={() => {
              removeItem(id)
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

