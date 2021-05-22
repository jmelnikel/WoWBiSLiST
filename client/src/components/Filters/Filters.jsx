import React, { useState } from 'react'
import PropTypes from 'prop-types'
import LevelRangeFilter from './LevelRangeFilter'

const Filters = (props) => {
  const [filters, setFilters] = useState({})
  let [lowerRange, setLowerRange] = useState(null)
  let [upperRange, setUpperRange] = useState(null)

  useEffect(() => {
    if (lowerRange > upperRange) {
      return Error
    } else {
      const prevState = _.cloneDeep(itemsData);
      setItemsData([...prevState, { show: false }])
    }
  }, [lowerRange, upperRange])


  return (
    <div>
      <LevelRangeFilter
        lowerRange={lowerRange}
        setLowerRange={setLowerRange}
        upperRange={upperRange}
        setUpperRange={setUpperRange}
      />
    </div>
  )
}

// Filters.propTypes = {

// }

export default Filters;

