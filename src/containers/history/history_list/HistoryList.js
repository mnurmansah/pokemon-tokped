import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, Col, Row,
} from 'react-bootstrap';
import './HistoryList.scss';

const HistoryList = ({
  history: {
    name, day, time, type, amount,
  },
}) => (
  <Card className="mb-2 history-list-card">
    <Row>
      <Col xs={6}>
        <p className="mb-0 text-truncate fs-12">{ name }</p>
        <p className="mb-0 fs-8">
          { day }
          ,
          {' '}
          { time }
        </p>
      </Col>
      <Col xs={6} className="d-flex justify-content-end align-items-center">
        <img src={`/images/icons/${type}.svg`} alt={`${type}-icon`} />
        <p className="mb-0 ml-2 font-weight-bold fs-12">
          Rp
          {' '}
          { amount }
        </p>
      </Col>
    </Row>
  </Card>
);

HistoryList.propTypes = {
  history: PropTypes.object.isRequired,
};

export default HistoryList;
