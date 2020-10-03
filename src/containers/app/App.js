import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Dashboard from '../dashboard/Dashboard';
import './App.scss';

function App() {
  return (
    <Container className="app-container">
      <Row>
        <Col>
          <Dashboard />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
