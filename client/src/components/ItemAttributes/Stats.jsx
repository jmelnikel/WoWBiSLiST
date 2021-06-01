import React from 'react'
import PropTypes from 'prop-types'

const Stats = (props) => {
  let { stats } = props;

  if (stats) {
    stats = stats.map((stat, index) => {
      return (
        <li key={index}>
          <h4>{stat.display.display_string}</h4>
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

}

export default Stats;



