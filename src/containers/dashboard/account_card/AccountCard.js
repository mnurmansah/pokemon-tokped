import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import './AccountCard.scss';

const AccountCard = ({ account: { name, balance, background, detail, owned }, onClick }) => (
  <Card
    className="mgb-8 account-card"
    style={{ background }}
  >
    <Card.Body className="pd-8" onClick={onClick} > { detail } 
      <Card.Title className="font-weight-normal fs-14">
        { name }
      <Card.Text className="text-right font-weight-bold fs-14">
        { balance }
      </Card.Text>
      </Card.Title>
      <Card.Text className="fs-14 mb-0 text-center font-weight-bold footer-button done">
       Owned : { owned } 
      </Card.Text>
    </Card.Body>
  </Card>
);

AccountCard.defaultProps = {
  onClick: {},
}

AccountCard.propTypes = {
  account: PropTypes.object.isRequired,
  onClick: PropTypes.func
};

export default AccountCard;
