// This file is the highest level of the component hierarchy
import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import FirebaseContextProvider from 'context/FirebaseContext';
import MetaContextProvider from 'context/MetaContext';
import ModalContextProvider from 'context/ModalContext';
import ScraperContextProvider from 'context/ScraperContext';
import { FirebaseContext } from 'context/FirebaseContext';
import Error404 from 'pages/404';
import FrontpagesView from 'pages/FrontpagesView';
import Login from 'pages/Login';
import Modal from 'components/Modal';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import SocialView from 'pages/SocialView';
import TurbosView from 'pages/TurbosView';
import { Main } from './styles/App';
import 'styles/index.css';

// This defines one general Context Provider that bundles up all other Contexts
const ContextProviders: React.FC = props => {
  return (
    <MetaContextProvider>
      <FirebaseContextProvider>
        <ModalContextProvider>
          <ScraperContextProvider>{props.children}</ScraperContextProvider>
        </ModalContextProvider>
      </FirebaseContextProvider>
    </MetaContextProvider>
  );
};

const App = () => {
  const { isLoggedIn } = useContext(FirebaseContext);

  return (
    <Router>
      <Navbar />
      <Main>
        {isLoggedIn && <Sidebar />}
        <Switch>
          <Route path="/" exact>
            {isLoggedIn && <Redirect to="/social" />}
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
            {isLoggedIn && <Redirect to="/social" />}
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
};

// The whole App is wrapped inside the general Context Provider and rendered to the DOM
ReactDOM.render(
  <ContextProviders>
    <App />
  </ContextProviders>,
  document.getElementById('root')
);
