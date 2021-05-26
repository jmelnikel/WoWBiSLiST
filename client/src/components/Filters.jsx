import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import _ from "lodash";

const Filters = (props) => {
  const {
    filters,
    setFilters,
  } = props;

  const handleOnChange = (field, value) => {
    const prevState = _.cloneDeep(filters);
    setFilters({ ...prevState, [field]: value })
  }

  return (
    <form>
      <section>
        <label htmlFor="levelRange">Select item level range:</label>
        <div id="levelRange">
          <input
            type="number"
            name="lowerRange"
            value={filters && filters.lowerRange}
            onChange={(event) => { handleOnChange("lowerRange", event.target.value) }}
            min="0"
            max="100"
          />
          <input
            type="number"
            name="upperRange"
            value={filters && filters.upperRange}
            onChange={(event) => { handleOnChange("upperRange", event.target.value) }}
            min="0"
            max="100"
          />
        </div>
      </section>
    </form>
  )
}

Filters.propTypes = {
  filters: PropTypes.object,
  setFilters: PropTypes.func.isRequired,
}

export default Filters;

