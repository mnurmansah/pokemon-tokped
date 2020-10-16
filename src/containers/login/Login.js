import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button, FormGroup, FormControl,
} from 'react-bootstrap';
import './Login.scss';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (<>
    <div className="image-sizing text-center">
        <img src="/images/icons/wallet_24px.svg" alt="sort-icon"></img>
        <br></br>
        <img src="/images/icons/text_dompet_dhuafa_24px.svg" alt="sort-icon"></img>
    </div>
    <div className="pd-0">
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <p><img src="/images/icons/text_selamat_datang_24px.svg" alt="sort-icon"></img></p>
          <FormControl
            autoFocus
            type="email"
            value={email}
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password">
          <FormControl
            value={password}
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <div >
        <Button className="button-color" block disabled={!validateForm()} type="submit">
          Masuk
        </Button>
        </div>
      </form>
    </div>
    <p className="text-center mgt-10 fs-13"><Link to="/forgotpassword" > Lupa kata sandi ? </Link></p>
    <p className="text-center mgt-9 fs-13">Tidak memiliki akun? <Link to="/register" > Daftar </Link></p>
    </>
  );
}
