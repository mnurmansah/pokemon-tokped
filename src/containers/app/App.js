import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Dashboard from '../dashboard/Dashboard';

function App() {
  return (
    <Container className="p-3">
      <Row>
        <Col>
          <Router>
            <Switch>
              {/* Add route for new page here */}
              <Route path="/" exact><Dashboard /></Route>
            </Switch>
          </Router>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
