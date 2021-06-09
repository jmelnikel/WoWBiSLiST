import React from 'react'
import PropTypes from 'prop-types';

const Requirements = (props) => {
  let { requirements } = props;

  let requirementAttributes = [];
  if (requirements) {
    const attributes = Object.keys(requirements);
    requirementAttributes = attributes.map((attribute, index) => {
      return (
        <li key={index}>
          <p>{requirements[attribute].display_string}</p>
        </li>
      )
    })
  } else {
    return null;
  };

  return (
    <ul>
      {requirementAttributes}
    </ul>
  )
}

Requirements.propTypes = {
  requirements: PropTypes.object,
}




export default Requirements;