import React, { useContext, useState } from 'react';
import { FirebaseContext } from 'context';
import { Wrapper, Form } from './Login.styled';

const Login = () => {
  const { logIn } = useContext(FirebaseContext);
  const [inputUser, setInputUser] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  return (
    <Wrapper>
      <header>
        <section>
          <img src={process.env.PUBLIC_URL + '/login-logo.png'} alt="Xpress" />
          <span>Xpress</span>
        </section>
      </header>
      <Form>
        <input
          type="text"
          placeholder="Username"
          value={inputUser}
          onChange={(e) => setInputUser(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
        />
      </Form>
      <button onClick={() => logIn(inputUser, inputPassword)}>Anmelden</button>
    </Wrapper>
  );
};

export default Login;
