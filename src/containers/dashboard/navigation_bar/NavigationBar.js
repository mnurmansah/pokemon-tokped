import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.scss';

const NavigationBar = () => (
  <React.Fragment>
    <div className="navigation-bar">
      <div className="d-flex justify-content-around align-items-center navigation-button-group">
        <Link to="/"><img src="/images/icons/history.svg" alt="history-icon"></img></Link>
        <Link to="/"><img src="/images/icons/person.svg" alt="person-icon"></img></Link>
      </div>
      <Link to="/" className="add-button"><img src="/images/icons/add-white.svg" alt="add-icon"></img></Link>
    </div>
  </React.Fragment>
)

export default NavigationBar;