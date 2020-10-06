import React from 'react';
import { Col, Row } from 'react-bootstrap';
import CustomButton from '../custom_button/CustomButton';
import './Error404.scss'

const Error404 = ({ history }) => (
  <>
    <Row>
      <Col className="d-flex flex-column align-items-center justify-content-center pd-28 error-404">
        <img src="/images/icons/404.svg" alt="404-illustration"></img>
        <p className="fs-12 mgy-27">Maaf, Halaman tidak ditemukan</p>
        <CustomButton
          onClick={() => { history.push('/') }}
          className={'not-found'}
          text={'Kembali'}
        />
      </Col>
    </Row>
  </>
)

export default Error404;