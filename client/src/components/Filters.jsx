import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Filters = (props) => {
  const { setFilters } = props;

  const [formData, setFormData] = useState({})

  let radioButtons = [{
    id: "all",
    value: "All",
  }, {
    id: "armor",
    value: "Armor",
  }, {
    id: "weapon",
    value: "Weapon",
  }];

  radioButtons = radioButtons.map((button, index) => {
    const { id, value } = button;
    return (
      <div key={index}>
        <input
          type="radio"
          id={id}
          name="itemClass"
          value={value}
          onChange={(event) => {
            console.log(event.target.value)
            handleOnChange("itemClass", event.target.value)
          }}

        />
        <label htmlFor={id}>{value}</label>
      </div>
    );
  });

  const handleOnChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    setFilters({ ...formData, [field]: value })
  }

  return (
    <form>
      <section>
        {radioButtons}
      </section>

    </form>
  )
}

Filters.propTypes = {
  // itemsData: PropTypes.arrayOf(PropTypes.object),
  // filters: PropTypes.object,
  setFilters: PropTypes.func.isRequired,
}

export default Filters


