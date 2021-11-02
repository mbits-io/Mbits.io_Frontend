import React from "react";
import { Modal } from "react-bootstrap";

export default function JoinUsModel(props) {
  return (
    <Modal {...props} size="lg">
      <Modal.Body>
        <div style={{ marginTop: "120px" }}>
          <div className="close-icon" onClick={props.onHide}>
            X
          </div>
          <iframe
            src="https://cdn.forms-content.sg-form.com/3cce492d-be35-11ea-8a2c-be88fdd64839"
            height="430px"
            width="68%"
            frameBorder="0"
          />
        </div>
      </Modal.Body>
    </Modal>
  );
}
