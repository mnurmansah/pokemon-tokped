import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Error404 from '../../components/error_404/Error404';
import History from '../history/History';
import Login from '../login/Login';
import ForgotPassword from '../forgot_password/ForgotPassword';
import Register from '../register/Register';
import Dashboard from '../dashboard/Dashboard';
import SaldoAwal from '../saldo_awal/SaldoAwal';

const history = createBrowserHistory();

function App() {
  return (
    <Container className="pd-20">
      <Row>
        <Col>
          <Router history={history}>
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/history" exact component={History} />
              <Route path="/login" exact component={Login} />
              <Route path="/register" exact component={Register} />
              <Route path="/forgot-password" exact component={ForgotPassword} />
              <Route path="/saldo-awal" exact component={SaldoAwal} />
              <Route path="*" component={Error404} />
            </Switch>
          </Router>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
