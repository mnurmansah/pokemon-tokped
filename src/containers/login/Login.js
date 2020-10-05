import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Login.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (<>
    <div className="text-center header-top-section">
        <img src="/images/icons/wallet_24px.svg" alt="sort-icon"></img>
        <br></br>
        <img src="/images/icons/text_dompet_dhuafa_24px.svg" alt="sort-icon"></img>
    </div>
    <br></br><br></br>
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <FormLabel><img src="/images/icons/text_selamat_datang_24px.svg" alt="sort-icon"></img></FormLabel>
          <br></br>
          <FormLabel>Email</FormLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormLabel>Kata Sandi</FormLabel>
          <FormControl
            value={password}
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
    <p className="text-center mgt-8 fs-13">Lupa Kata Sandi?</p>
    <p className="text-center fs-13">Tidak memiliki akun? <Link to="/register" > Daftar </Link></p>
    </>
  );
}