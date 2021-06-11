import React from 'react'
import PropTypes from 'prop-types'
import InventoryType from './InventoryType'

const Filters = (props) => {
  const { filters, setFilters } = props

  const handleOnChange = (params) => {
    setFilters(params)
  }

  return (
    <form>
      <InventoryType handleOnChange={handleOnChange} filters={filters} />
    </form>
  )
}

Filters.propTypes = {
  filters: PropTypes.object,
  setFilters: PropTypes.func,
}

export default Filters

