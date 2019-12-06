import React from 'react';
import ReactDOM from 'react-dom';

import {
  FirebaseContextProvider,
  MetaContextProvider,
  ModalContextProvider,
  ScraperContextProvider
} from 'context';

import { App } from 'components';

import 'styles/index.css';

function ContextProviders(props) {
  return (
    <MetaContextProvider>
      <FirebaseContextProvider>
        <ModalContextProvider>
          <ScraperContextProvider>{props.children}</ScraperContextProvider>
        </ModalContextProvider>
      </FirebaseContextProvider>
    </MetaContextProvider>
  );
}

ReactDOM.render(
  <ContextProviders>
    <App />
  </ContextProviders>,
  document.getElementById('root')
);
