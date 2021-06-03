import React from 'react';
import PropTypes from 'prop-types';
import Stats from './ItemAttributes/Stats';
import Spells from './ItemAttributes/Spells';
import Requirements from './ItemAttributes/Requirements';
import Sets from './ItemAttributes/Sets';

const Item = (props) => {
  // const { removeItem } = props;
  const { item } = props
  const { show, level, preview_item } = item
  const {
    name,
    armor,
    stats,
    spells,
    binding,
    item_subclass,
    requirements,
    set,
    unique_equipped,
  } = preview_item;
  console.log("This si firing")
  return (
    <>
      {show &&
        <>
          {/* <h4>{name}</h4>
          <h4>Level: {level}</h4>
          {binding && <h4>{binding.name}</h4>}
          {item_subclass && <h4>{item_subclass.name}</h4>}
          {armor && <h4>Armor: {armor.value}</h4>}
          {stats && <Stats stats={stats} />}
          {spells && <Spells spells={spells} />}
          {requirements && <Requirements requirements={requirements} />}
          {set && <Sets set={set} />}
          {unique_equipped && <h4>{unique_equipped}</h4>} */}

          {/* <button
            onClick={() => {
              removeItem(id)
            }}
          >Remove Item</button> */}
        </>
      }
    </>
  )
}

Item.propTypes = {
  item: PropTypes.object,
}

export default Item;
