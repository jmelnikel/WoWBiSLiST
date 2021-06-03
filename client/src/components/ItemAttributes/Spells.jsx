import React from 'react'
import PropTypes from 'prop-types'

const Spells = (props) => {
  let { spells } = props;

  if (spells) {
    spells = spells.map((spell, index) => {
      return (
        <li key={index}>
          <h4>{spell.description}</h4>
        </li>
      )
    });
  } else {
    return null;
  };


  return (
    <ul>
      {spells}
    </ul>
  )
}

Spells.propTypes = {
  spells: PropTypes.array,
}

export default Spells;