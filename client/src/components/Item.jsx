import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'
import Stats from './ItemAttributes/Stats';
import Spells from './ItemAttributes/Spells';
import Requirements from './ItemAttributes/Requirements';
import Sets from './ItemAttributes/Sets';
import '../styling/Item.css'

const Item = (props) => {
  const { item } = props;
  let { id, show, level, preview_item } = item
  const {
    name,
    armor,
    binding,
    item_subclass,
    quality,
    requirements,
    set,
    spells,
    stats,
    unique_equipped,
    weapon,
  } = preview_item;
  let [itemContainerSize, setItemContainerSize] = useState("large")
  const itemContainerToggle = classNames({
    itemContainer: true,
    itemContainerRare: quality.name === "Rare",
    itemContainerEpic: quality.name === "Epic",
    itemContainerLegendary: quality.name === "Legendary",
    itemContainerArtifact: quality.name === "Artifact",
    itemContainerLarge: itemContainerSize === "large",
    itemContainerSmall: itemContainerSize === "small",
  });

  const handleChangeSize = () => {
    if (itemContainerSize === "large") {
      setItemContainerSize("small")
    } else {
      setItemContainerSize("large")
    }
  }


  return (
    <>
      {show &&
        <div className={itemContainerToggle}>
          <h4>{name}</h4>
          <p>Level: {level}</p>
          {binding && <p>{binding.name}</p>}
          {item_subclass && <p>{item_subclass.name}</p>}
          {armor && <p>Armor: {armor.value}</p>}
          {weapon && <p>{weapon.dps.display_string}</p>}
          {weapon && <p>{weapon.damage.display_string}</p>}
          {weapon && <p>Attack {weapon.attack_speed.display_string}</p>}
          {stats && <Stats stats={stats} />}
          {spells && <Spells spells={spells} />}
          {requirements && <Requirements requirements={requirements} />}
          {set && <Sets set={set} />}
          {unique_equipped && <p>{unique_equipped}</p>}

          <button
            type="button"
            onClick={handleChangeSize}
          >Change Size</button>
        </div>
      }
    </>
  )
}

Item.propTypes = {
  item: PropTypes.object,
  // hideItem: PropTypes.func,
}

export default Item;
