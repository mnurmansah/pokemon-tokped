import React from 'react';
import PropTypes from 'prop-types';
import {
  Accordion, Card, Col, Row,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './QuickHistory.scss';

const QuickHistory = ({
  history: {
    name, day, time, type, amount,
  }, index,
}) => (
  <Card className="mb-2 quick-history-card">
    <Accordion.Toggle as={Card.Header} eventKey={index} className="py-1 px-2">
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
    </Accordion.Toggle>
    <Accordion.Collapse eventKey={index}>
      <Card.Body className="d-flex justify-content-end p-2">
        <Link to="/" className="mr-2 quick-history create"><img src="/images/icons/create.svg" alt="create-icon" /></Link>
        <Link to="/" className="quick-history delete"><img src="/images/icons/close.svg" alt="delete-icon" /></Link>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
);

QuickHistory.propTypes = {
  history: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default QuickHistory;
