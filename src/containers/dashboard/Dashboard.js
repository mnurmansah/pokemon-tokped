import React from 'react';
import { Col, Jumbotron, Row } from 'react-bootstrap';
import AccountCard from './account_card/AccountCard';
import './Dashboard.scss'

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      accounts: [
        {
          name: 'Tunai',
          balance: 100000,
          background: 'linear-gradient(100.42deg, #6FCFB4 0.56%, #5D8A7D 97.77%)'
        },
        {
          name: 'Bank ABC',
          balance: 100000,
          background: 'linear-gradient(100.41deg, #F2C94C 0%, #BF9C32 100%)'
        },
        {
          name: 'Opo',
          balance: 100000,
          background: 'linear-gradient(100.41deg, #BB6BD9 0%, #8A27AF 100%)'
        },
        {
          name: 'Gojex',
          balance: 100000,
          background: 'linear-gradient(100.41deg, #56CCF2 0%, #2E8FAE 100%)'
        }
      ]
    }
  }

  render() {
    const { accounts } = this.state;

    return (
      <>
        <Jumbotron className="header-jumbotron">
          <div className="d-flex justify-content-between text-center header-top-section">
            <img src="/images/icons/sort_24px.svg" alt="sort-icon"></img>
            <p className="mb-0 fs-14">Yudhistira Putra Nugraha</p>
            <img src="/images/icons/mood_24px.svg" alt="mood-icon"></img>
          </div>
          <p className="mb-1 fs-12">Total Saldo :</p>
          <p className="mb-0 font-weight-bold total-balance fs-28">Rp 100.000.000</p>
        </Jumbotron>  
        <div className="account-card-container">
          <Row>
            <Col className="d-flex justify-content-between my-2">
              <p className="mb-0 fs-12">Daftar Akun</p>
              <img src="/images/icons/add_24px.svg" alt="mood-icon"></img>
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
        </div>
      </>
    )
  }
}

export default Dashboard;