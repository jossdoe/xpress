import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { FirebaseContext } from 'context';
import {
  Login,
  Navbar,
  Sidebar,
  SocialView,
  FrontpagesView,
  TurbosView,
  Modal,
  Error404
} from 'components';
import { Main } from './App.styled';

function App() {
  const { isLoggedIn } = useContext(FirebaseContext);

  return (
    <Router>
      <Navbar />
      <Main>
        {isLoggedIn && <Sidebar />}
        <Switch>
          <Route path="/" exact>
            {isLoggedIn && <Redirect to="/turbos" />}
            {!isLoggedIn && <Redirect to="/login" />}
          </Route>
          <Route path="/turbos">
            {!isLoggedIn && <Redirect to="/login" />}
            {isLoggedIn && <TurbosView />}
          </Route>
          <Route path="/frontpages">
            {!isLoggedIn && <Redirect to="/login" />}
            {isLoggedIn && <FrontpagesView />}
          </Route>
          <Route path="/social">
            {!isLoggedIn && <Redirect to="/login" />}
            {isLoggedIn && <SocialView />}
          </Route>
          <Route path="/login">
            {isLoggedIn && <Redirect to="/turbos" />}
            <Login />
          </Route>
          <Route>
            <Error404 />
          </Route>
        </Switch>
      </Main>
      <Modal />
    </Router>
  );
}

export default App;
