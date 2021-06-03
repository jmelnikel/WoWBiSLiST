import React from 'react'
import PropTypes from 'prop-types'

const Sets = (props) => {
  let { set } = props;
  let { effects, item_set, items } = set;

  effects = effects.map((effect, index) => {
    return <h4 key={index}>{effect.display_string}</h4>
  });

  items = items.map((item, index) => {
    return <h4 key={index}>{item.item.name}</h4>
  });

  if (set) {
    set =
      <>
        <h4>{item_set.name}</h4>
        {items}
        {effects}
      </>
  } else {
    return null;
  };

  return (
    <div>
      {set}
    </div>
  )
}

Sets.propTypes = {
  set: PropTypes.object,
}

export default Sets;