import React from 'react';
import {
  Button, Col, Row,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { DateUtils } from 'react-day-picker';
import NavigationBar from '../../components/navigation_bar/NavigationBar';
import HistoryList from './history_list/HistoryList';
import CustomDaterangepicker from '../../components/custom_daterangepicker/CustomDaterangepicker';
import CustomModal from '../../components/custom_modal/CustomModal';
import './History.scss';

class History extends React.Component {
  constructor() {
    super();
    this.state = {
      history: [
        {
          date: 'Hari ini',
          totalAmount: 5000000,
          data: [
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
        },
        {
          date: '10 Oktober 2020',
          totalAmount: 5000000,
          data: [
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
        },
        {
          date: '09 Oktober 2020',
          totalAmount: 5000000,
          data: [
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
        },
      ],
      activeHistory: 'all',
      showAdvancedFilter: false,
      selectedDayRange: {
        from: undefined,
        to: undefined
      }
    };
  }

  handleSetActiveHistory = (value) => {
    const { activeHistory } = this.state;
    
    if (activeHistory === value) {
      this.setState({ activeHistory: 'all' })
    } else {
      this.setState({ activeHistory: value })
    }
  };

  handleDayrangeClick = (day, { disabled }) => {
    if (!disabled) {
      const { selectedDayRange } = this.state;
      const range = DateUtils.addDayToRange(day, selectedDayRange)

      if (range.from && !range.to) {
        this.setState({ selectedDayRange: { from: range.from, to: range.from } })
      } else {
        this.setState({ selectedDayRange: range });
      }
    } else {
      return;
    }
  }

  render() {
    const { history, activeHistory, showAdvancedFilter, selectedDayRange: { from, to } } = this.state;

    return (
      <div className="history-container">
        <Row className="p-3">
          <Col>
            <Link to="/">
              <div className="d-flex justify-content-start align-items-center">
                <img src="/images/icons/arrow-back.svg" alt="arrow-back-icon" />
                <p className="font-weight-bold fs-14 mb-0 mgl-20">Riwayat</p>
              </div>
            </Link>
            <div className="d-flex justify-content-center align-items-center">
              <div className="d-flex justify-content-center align-items-center mgy-24 mr-2 history-button-group">
                <Button
                  className="text-truncate fs-14 history-button"
                  onClick={() => this.handleSetActiveHistory('income')}
                  active={activeHistory === 'income'}
                >
                  Pemasukan
                </Button>
                <Button
                  className="text-truncate fs-14 history-button"
                  onClick={() => this.handleSetActiveHistory('expense')}
                  active={activeHistory === 'expense'}
                >
                  Pengeluaran
                </Button>
                <Button
                  className="text-truncate fs-14 history-button"
                  onClick={() => this.handleSetActiveHistory('transfer')}
                  active={activeHistory === 'transfer'}
                >
                  Transfer
                </Button>
              </div>
              <Button className={`filter-button ${(from && to) ? 'filtered' : ''}`} onClick={() => this.setState({ showAdvancedFilter: !showAdvancedFilter })}>
                {
                  (from && to) && (
                    <img src="/images/icons/filter-list-white.svg" alt="filter-list-white" />
                  )
                }
                {
                  !(from && to) && (
                    <img src="/images/icons/filter-list.svg" alt="filter-list" />
                  )
                }
              </Button>
            </div>
            <CustomModal
              show={showAdvancedFilter}
            >
              <>
                <CustomDaterangepicker
                  from={from}
                  to={to}
                  handleDayrangeClick={this.handleDayrangeClick}
                  className="m-3 text-center"
                />
                <div className="d-flex justify-content-center align-items-center mb-3">
                  <Button 
                    className="mr-2 footer-button cancel" 
                    onClick={() => setTimeout(() => this.setState({ showAdvancedFilter: !showAdvancedFilter }), 300)}>
                    Batal
                  </Button>
                  <Button 
                    className="footer-button done" 
                    onClick={() => setTimeout(() => this.setState({ showAdvancedFilter: !showAdvancedFilter }), 300)}>
                    Selesai
                  </Button>
                </div>
              </>
            </CustomModal>
            {
              history.map((data, index) => (
                <HistoryList history={data} key={index} />
              ))
            }
          </Col>
        </Row>
        <NavigationBar />
      </div>
    );
  }
}

export default History;
