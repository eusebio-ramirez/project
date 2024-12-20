import React from "react";
import { Modal, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const ModalComponent = ({ title, onCloseModal, renderBody }) => {
  return (
    <Modal
      show={true}
      onHide={onCloseModal}
      centered
      className="custom-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{renderBody}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCloseModal}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

ModalComponent.propTypes = {
  title: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  renderBody: PropTypes.node.isRequired,
};

export default ModalComponent;