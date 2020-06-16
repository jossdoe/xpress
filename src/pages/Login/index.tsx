// This component only consumes all the login-data. The actual
// logic can be found inside 'context/FirebaseContext.js'.
import React, { useContext, useState } from 'react';
import { settings } from 'config/general.config';
import { FirebaseContext } from 'context/FirebaseContext';
import { Wrapper, ErrorNotice, Spinner } from './styles';
import Stack from 'components/layout/Stack';
import InputLabel from 'components/forms/InputLabel';
import TextInput from 'components/forms/TextInput';
import SubmitButton from 'components/forms/SubmitButton';
import { ReactComponent as LogoSVG } from 'assets/roundlogo.svg';
import { ReactComponent as AppNameSVG } from 'assets/appname.svg';
import { IoMdCloseCircle } from 'react-icons/io';

const Login = () => {
  const { logIn, loginIsInvalid, loginIsLoading } = useContext(FirebaseContext);

  // Check if App is in Demo mode and has demo credentials provided – use them if true
  const initialUser =
    settings.demo?.isEnabled && settings.demo.user ? settings.demo.user : '';
  const initialPassword =
    settings.demo?.isEnabled && settings.demo.password
      ? settings.demo.password
      : '';
  const [inputUser, setInputUser] = useState<string>(initialUser);
  const [inputPassword, setInputPassword] = useState<string>(initialPassword);

  return (
    <Wrapper>
      <form
        onSubmit={(e: React.FormEvent) => {
          e.preventDefault();
          logIn(inputUser, inputPassword);
        }}
      >
        <Stack space={15} marginTop={80} marginBottom={25}>
          <LogoSVG />
          <br />
          <AppNameSVG />
        </Stack>
        <Stack space={6} marginBottom={25}>
          <div>
            <InputLabel htmlFor="login-user">Username</InputLabel>
            <TextInput
              variant="light"
              id="login-user"
              type="text"
              value={inputUser}
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                setInputUser(e.currentTarget.value)
              }
            />
          </div>
          <div>
            <InputLabel htmlFor="login-password">Password</InputLabel>
            <TextInput
              variant="light"
              id="login-password"
              type="password"
              value={inputPassword}
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                setInputPassword(e.currentTarget.value)
              }
            />
          </div>
          {loginIsInvalid && (
            <ErrorNotice>
              <IoMdCloseCircle
                style={{
                  height: '15px',
                  verticalAlign: 'text-bottom',
                  marginRight: '3px'
                }}
              />{' '}
              Login failed
            </ErrorNotice>
          )}
        </Stack>
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
          <SubmitButton
            onClick={(e: React.FormEvent) => {
              e.preventDefault();
              logIn(inputUser, inputPassword);
            }}
          >
            Sign In
          </SubmitButton>
        )}
      </form>
    </Wrapper>
  );
};

export default Login;
