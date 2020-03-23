// This component only consumes all the login-data. The actual
// logic can be found inside 'context/FirebaseContext.js'.
import React, { useContext, useState } from 'react';
import { FirebaseContext } from 'context/FirebaseContext';
import { Wrapper, Form, ErrorNotice, Spinner } from './styles';

const Login = () => {
  const { logIn, loginIsInvalid, loginIsLoading } = useContext(FirebaseContext);

  const [inputUser, setInputUser] = useState<string>('');
  const [inputPassword, setInputPassword] = useState<string>('');

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
          onChange={e => setInputUser(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={inputPassword}
          onChange={e => setInputPassword(e.target.value)}
        />
      </Form>
      {loginIsInvalid && (
        <ErrorNotice>
          <div>
            <i className="fas fa-exclamation-triangle" /> Login failed
          </div>
        </ErrorNotice>
      )}
      {loginIsLoading ? (
        <Spinner>
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </Spinner>
      ) : (
        <button onClick={() => logIn(inputUser, inputPassword)}>Sign In</button>
      )}
    </Wrapper>
  );
};

export default Login;
