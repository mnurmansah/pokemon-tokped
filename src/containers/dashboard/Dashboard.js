import React from 'react';
import {
  Accordion, Col, Jumbotron, Row,
} from 'react-bootstrap';
import AccountCard from './account_card/AccountCard';
import QuickHistory from './quick_history/QuickHistory';
import NavigationBar from '../../components/navigation_bar/NavigationBar';
import './Dashboard.scss';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      accounts: [
        {
          name: 'Tunai',
          balance: 100000,
          background: 'linear-gradient(100.42deg, #6FCFB4 0.56%, #5D8A7D 97.77%)',
        },
        {
          name: 'Bank ABC',
          balance: 100000,
          background: 'linear-gradient(100.41deg, #F2C94C 0%, #BF9C32 100%)',
        },
        {
          name: 'Opo',
          balance: 100000,
          background: 'linear-gradient(100.41deg, #BB6BD9 0%, #8A27AF 100%)',
        },
        {
          name: 'Gojex',
          balance: 100000,
          background: 'linear-gradient(100.41deg, #56CCF2 0%, #2E8FAE 100%)',
        },
      ],
      history: [
        {
          name: 'Gaji',
          day: 'Today',
          time: '15.00',
          type: 'income',
          amount: 5000000,
        },
        {
          name: 'Makan Odading Mang Oleh',
          day: 'Today',
          time: '15.00',
          type: 'expense',
          amount: 20000,
        },
        {
          name: 'Transfer Bank ke Opo',
          day: 'Today',
          time: '15.00',
          type: 'transfer',
          amount: 50000,
        },
        {
          name: 'Gaji',
          day: 'Today',
          time: '15.00',
          type: 'income',
          amount: 5000000,
        },
      ],
    };
  }

  render() {
    const { accounts, history } = this.state;

    return (
      <div className="dashboard-container">
        <Jumbotron className="mb-0 pd-16 header-jumbotron">
          <div className="d-flex justify-content-between text-center pdb-24">
            <img src="/images/icons/sort.svg" alt="sort-icon" />
            <p className="mb-0 fs-14">Yudhistira Putra Nugraha</p>
            <img src="/images/icons/mood.svg" alt="mood-icon" />
          </div>
          <p className="mb-1 fs-12">Total Saldo :</p>
          <p className="mb-0 font-weight-bold total-balance fs-28">Rp 100.000.000</p>
        </Jumbotron>
        <div className="pdx-16">
          <Row>
            <Col className="d-flex justify-content-between my-2">
              <p className="mb-0 fs-12">Daftar Akun</p>
              <img src="/images/icons/add.svg" alt="add-icon" />
            </Col>
          </Row>
          <Row>
            {
              accounts.map((account, index) => (
                <Col xs={6} className={index % 2 === 0 ? 'pr-1' : 'pl-1'} key={index}>
                  <AccountCard
                    account={account}
                  />
                </Col>
              ))
            }
          </Row>
          <Row>
            <Col>
              <div className="d-flex justify-content-between fs-12 pdt-20">
                <p className="mb-0">Riwayat Saldo</p>
                <div className="d-flex justify-content-center font-weight-bold">
                  <Link to="/history" className="mb-0 mr-2">Muat Lebih</Link>
                  <img src="/images/icons/chevron-right.svg" alt="chevron-right-icon" />
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Accordion className="pdt-16">
                {
                  history.map((data, index) => (
                    <QuickHistory history={data} index={index + 1} key={index} />
                  ))
                }
              </Accordion>
            </Col>
          </Row>
        </div>
        <NavigationBar />
      </div>
    );
  }
}

export default Dashboard;
