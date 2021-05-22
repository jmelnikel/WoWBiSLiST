import React from 'react'
import PropTypes from 'prop-types'

const LevelRangeFilter = (props) => {
  const {
    lowerRange,
    setLowerRange,
    upperRange,
    setUpperRange,
  } = props;

  const handleLowerRangeCHange = (value) => {
    setLowerRange(value)
  }
  const handleUpperRangeCHange = (value) => {
    setUpperRange(value)
  }


  return (
    <section>
      <label for="levelRange">Select item level range:</label>
      <div id="levelRange">
        <input
          type="number"
          name="lowerRange"
          value={lowerRange}
          onChange={(event) => { handleLowerRangeCHange(event.target.value) }}
          min="1"
          max="100"
        />
        <input
          type="number"
          name="upperRange"
          value={upperRange}
          onChange={(event) => { handleUpperRangeCHange(event.target.value) }}
          min="1"
          max="100"
        />
      </div>
    </section>
  )
}

LevelRangeFilter.propTypes = {

}

export default LevelRangeFilter;

