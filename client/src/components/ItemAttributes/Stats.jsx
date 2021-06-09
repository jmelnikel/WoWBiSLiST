import React from 'react'
import PropTypes from 'prop-types'

const Stats = (props) => {
  let { stats } = props;

  if (stats) {
    stats = stats.map((stat, index) => {
      return (
        <li key={index}>
          <p>{stat.display.display_string}</p>
        </li>
      )
    });
  } else {
    return null;
  };


  return (
    <ul>
      {stats}
    </ul>
  )
}

Stats.propTypes = {
  stats: PropTypes.array,
}

export default Stats;
