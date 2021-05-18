import React from 'react'
import PropTypes from 'prop-types'

const ProgressBar = (props) => {
  const { completed } = props;

  const containerStyles = {
    height: "20px",
    width: '50%',
    backgroundColor: "#e0e0de",
    borderRadius: "50px",
    margin: "1.0rem 0",
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: "#0028ef",
    borderRadius: "50px",
    textAlign: 'right',
    transition: 'width 1s ease-in-out',
  }

  const labelStyles = {
    padding: "0.5rem",
    color: 'white',
    fontWeight: 'bold'
  }


  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  )
}

ProgressBar.propTypes = {
  completed: PropTypes.number,
}

export default ProgressBar;