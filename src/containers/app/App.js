import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.scss';
import Login from '../login/Login';

function App() {
  return (
    <Container className="p-3">
      <Row>
        <Col>
          <Router>
            <Switch>
              <Route path="/" exact><Login /></Route>
            </Switch>
          </Router>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
