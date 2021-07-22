import React, { useState } from 'react'
import MoreInfo from '../Modals/MoreInfo'

const Footer = () => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const handleShowMoreInfo = () => setShowMoreInfo(true);
  const handleCloseMoreInfo = () => setShowMoreInfo(false);

  return (
    <>
      <footer className="App--footer__container">
        <p style={{ color: "white" }}>Version 1.0.0</p>
        <button
          className="App--footer__button"
          type="button"
          onClick={handleShowMoreInfo}
        >More Info
        </button>
      </footer>

      <MoreInfo
        showMoreInfo={showMoreInfo}
        handleCloseMoreInfo={handleCloseMoreInfo}
      />
    </>
  )
}

export default Footer;
