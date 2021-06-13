import React from 'react';
import { Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';

const MoreInfo = (props) => {
  const { show, handleClose } = props;

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title style={{ color: "black" }}>More Information FAQ</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ color: "black" }}>
        <p>Q: How do I contact you?</p>
        <p>A: I can't make the site better without you. Your constructive feedback and ideas are always welcome. I can be reached at: Enter email here</p>
        <br></br>
        <p>Q: What new things are to come?</p>
        <p>A: The next phase is for you to be able to create a shopping list of your items that will tell you where to get them; all nicely organized by drop location. The final phase will allow you to upload your character so that your current items will show at the beginning of each slot and you can better compare and plan your BiS list.</p>
        <br></br>
        <p>Q: Why does it take so long for the items to show after applying the filters?</p>
        <p>A: There are over 8000 items coming to you. It takes a split second to get to your computer, but a while for your browser to process and layout all those items on and off your screen. I have a few ideas to reduce the time and I'll try to implement them as soon as I can. Thank you for your patience!</p>
      </Modal.Body>
    </Modal>
  )
}

MoreInfo.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
}

export default MoreInfo

