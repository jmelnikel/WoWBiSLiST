import React from 'react'
import PropTypes from 'prop-types'

const Sets = (props) => {
  let { set } = props;
  let { effects, item_set, items } = set;

  effects = effects.map((effect, index) => {
    return <p key={index}>{effect.display_string}</p>
  });

  items = items.map((item, index) => {
    return <p key={index}>{item.item.name}</p>
  });

  if (set) {
    set =
      <>
        <h5>{item_set.name}</h5>
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