import React from 'react';
import { Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../styling/Modals.css'

const MoreInfo = (props) => {
  const { showMoreInfo, handleCloseMoreInfo } = props;

  return (
    <Modal show={showMoreInfo} onHide={handleCloseMoreInfo}>
      <Modal.Header
        style={{
          backgroundColor: "rgb(25, 25, 25)",
          border: "solid rgb(47, 47, 242) 4px",
          borderBottom: "solid #FFEC1C 1px",
        }}>
        <Modal.Title>More Information FAQ</Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          backgroundColor: "rgb(25, 25, 25)",
          border: "solid rgb(47, 47, 242) 4px",
          borderTop: "none",
          borderBottom: "solid #FFEC1C 4px"
        }}>
        <div className="moreInfo--container">
          <p>Q: How do I contact you?</p>
          <p>A: I can't make the site better without you. Your constructive feedback and ideas are always welcome. I can be reached at: wowbislisttest@gmail.com</p>
          <br></br>
          <p>Q: What new things are to come?</p>
          <p>A: The next phase is for you to be able to create a shopping list of your items that will tell you where to get them; all nicely organized by drop location. The final phase will allow you to upload your character so that your current items will show at the beginning of each slot and you can better compare and plan your BiS list.</p>
          <br></br>
          <p>Q: Why does it take so long for the items to show after applying the filters?</p>
          <p>A: There are over 6000 items coming to you. It takes a split second to get them to your computer, but a while for your browser to process and layout all those items on and off your screen. Thank you for your patience!</p>
        </div>
      </Modal.Body>
    </Modal >
  )
}

MoreInfo.propTypes = {
  showMoreInfo: PropTypes.bool,
  handleCloseMoreInfo: PropTypes.func,
}

export default MoreInfo;

