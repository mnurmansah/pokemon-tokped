import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import './CustomModal.scss';

const CustomModal = ({
  show, children, backdrop, onHide,
}) => (
  <Modal
    show={show}
    dialogClassName="custom-modal"
    backdrop={backdrop ? 'static' : true}
    onHide={onHide}
  >
    { children }
  </Modal>
);

CustomModal.defaultProps = {
  backdrop: false,
  onHide: () => {},
};

CustomModal.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
  backdrop: PropTypes.bool,
  onHide: PropTypes.func,
};

export default CustomModal;
