import React from "react";
import PropTypes from "prop-types";

import { Modal, Button } from "react-bootstrap";
import Icon from "./Icon";

const QuoteDetailDialog = ({
  onHide,
  imageFileName,
  imageAlt,
  header,
  subheader,
  content,
  extraInfo,
  ...restProps
}) => {
  return (
    <Modal
      {...restProps}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{header}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="mx-auto">  
         <form name="contact" method="POST" data-netlify="true">
            <p>
              <label htmlFor="name">Your Name: <input id="name" type="text" name="name" /></label>   
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
      
             </Modal.Body>
      <Modal.Footer>
        <div className="mx-auto">
          <Button variant="primary" onClick={onHide}>
            <Icon iconName="CloseIcon" />
            &nbsp; Exit Quote
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

QuoteDetailDialog.propTypes = {
  onHide: PropTypes.func,
  imageFileName: PropTypes.string,
  imageAlt: PropTypes.string,
  header: PropTypes.string,
  subheader: PropTypes.string,
  content: PropTypes.string,
  extraInfo: PropTypes.any,
};

QuoteDetailDialog.defaultProps = {
  onHide: null,
  imageFileName: "",
  imageAlt: null,
  header: "",
  subheader: "",
  content: "",
  extraInfo: null,
};

export default QuoteDetailDialog;
