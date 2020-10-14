import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'react-bootstrap';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './CustomDaterangepicker.scss';

class CustomDaterangepicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: true
    }
  }

  componentDidMount() {
    this.setState({ isMobile: window.innerWidth < 576 });
    window.addEventListener('resize', this.handleWindowResize);
  }

  handleWindowResize = () => {
    this.setState({ isMobile: window.innerWidth < 576 })
  }

  render() {
    const { isMobile } = this.state;
    const { show, close, from, to, handleDayrangeClick } = this.props;

    return (
      <Modal show={show} backdrop="static" dialogClassName="custom-daterangepicker">
        <div className="text-center m-3">
          <div>
            <DayPicker
              selectedDays={[
                from,
                { from, to },
              ]}
              onDayClick={handleDayrangeClick}
              disabledDays={[
                {
                  after: new Date(),
                },
              ]}
              modifiers={{
                start: from,
                end: to,
              }}
              numberOfMonths={isMobile ? 1 : 2}
            />
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <Button className="mr-2 footer-button cancel" onClick={close}>Batal</Button>
            <Button className="footer-button done" onClick={close}>Selesai</Button>
          </div>
        </div>
      </Modal>
    )
  }
}

CustomDaterangepicker.defaultProps = {
  from: undefined,
  to: undefined,
};

CustomDaterangepicker.propTypes = {
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  handleDayrangeClick: PropTypes.func.isRequired,
  from: PropTypes.instanceOf(Date),
  to: PropTypes.instanceOf(Date),
};

export default CustomDaterangepicker;
