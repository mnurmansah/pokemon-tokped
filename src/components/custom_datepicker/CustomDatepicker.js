import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'react-bootstrap';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './CustomDatepicker.scss';

const CustomDatepicker = ({
  show, close, selectedDay, handleDayClick,
}) => (
  <Modal show={show} backdrop="static" dialogClassName="custom-datepicker">
    <div className="text-center m-3">
      <div>
        <DayPicker
          selectedDays={selectedDay}
          onDayClick={handleDayClick}
          disabledDays={[
            {
              after: new Date(),
            },
          ]}
        />
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <Button className="mr-2 footer-button cancel" onClick={close}>Batal</Button>
        <Button className="footer-button done" onClick={close}>Selesai</Button>
      </div>
    </div>
  </Modal>
);

CustomDatepicker.defaultProps = {
  selectedDay: null,
};

CustomDatepicker.propTypes = {
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  handleDayClick: PropTypes.func.isRequired,
  selectedDay: PropTypes.instanceOf(Date),
};

export default CustomDatepicker;
