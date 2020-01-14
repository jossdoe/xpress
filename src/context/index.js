// bundling exports to simplify imports across the app
// this allows us to import everything from 'context'

import FirebaseContextProvider, { FirebaseContext } from './FirebaseContext';
import MetaContextProvider, { MetaContext } from './MetaContext';
import ModalContextProvider, { ModalContext } from './ModalContext';
import ScraperContextProvider, { ScraperContext } from './ScraperContext';

export {
  FirebaseContext,
  FirebaseContextProvider,
  MetaContext,
  MetaContextProvider,
  ModalContext,
  ModalContextProvider,
  ScraperContext,
  ScraperContextProvider
};
