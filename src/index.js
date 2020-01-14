// This file is the highest level of the component hierarchy

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

// This defines one general Context Provider that bundles up all other Contexts
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

// The whole App is wrapped inside the general Context Provider and rendered to the DOM
ReactDOM.render(
  <ContextProviders>
    <App />
  </ContextProviders>,
  document.getElementById('root')
);
