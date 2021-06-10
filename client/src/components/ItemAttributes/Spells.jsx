import React from 'react'
import PropTypes from 'prop-types'

const Spells = (props) => {
  let { spells } = props;

  if (spells) {
    spells = spells.map((spell, index) => {
      return (
        <li key={index} style={{ listStyle: "none" }}>
          <p>{spell.description}</p>
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