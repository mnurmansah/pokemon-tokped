import React from 'react';
import { Button } from 'react-bootstrap';
import './CustomButton.scss';

const CustomButton = ({ onClick, text, disabled = false, className, fluid = false }) => (
  <Button
    onClick={onClick}
    disabled={disabled}
    className={`custom-button${fluid ? 'fluid' : ''} ${className}`}
  >
    { text }
  </Button>
)

export default CustomButton;