import React from 'react';
import { Link } from 'react-router-dom';
import {
  Col, Row, FormControl,
} from 'react-bootstrap';
import CustomButton from '../../components/custom_button/CustomButton';
import './ForgotPassword.scss';

const ForgotPassword = () => (
  <>
    <Row>
      <Col className="d-flex flex-column align-items-left justify-content-center pd-28 forgotpassword">
        <img src="/images/icons/forgot-password.svg" alt="forgot-password" />
        <br />
        <div className="float-left">
          <img src="/images/icons/text-forgot-password.svg" alt="sort-icon" />
        </div>
        <br />
        <FormControl
          autoFocus
          type="email"
          placeholder="Email"
        />
        <br />
        <CustomButton
          onClick={() => { }}
          className="kirim-email"
          text="Kirim Email"
        />
        <br />
        <p className="text-center fs-13">
          Sudah memiliki akun?
          <Link to="/login"> masuk </Link>
        </p>
      </Col>
    </Row>

  </>
);

export default ForgotPassword;
