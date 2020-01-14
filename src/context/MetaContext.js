// This Context is meant to provide all the meta data of lists and
// general settings to the app, including the data from our
// 'general.config.js' and the visibility state of lists.

import React, { useState, createContext } from 'react';
import { settings, lists, globals } from 'config/general.config';

export const MetaContext = createContext();

const MetaContextProvider = (props) => {
  // Since we're defining the number and properties of lists in the config,
  // we need to create their visibility states dynamically here. 'useState'
  // doesn't allow that, because it doesn't work with conditional statements.
  // So we store the visibility states in a single Object that we check into
  // a single state and define a function to manipulate its properties.
  let initialVisibility = {};
  lists.forEach((list) => {
    initialVisibility[list.title] = true;
  });

  const [isVisible, setIsVisible] = useState(initialVisibility);

  const setVisibility = (list, value) => {
    let newVisibility = { ...isVisible };
    newVisibility[list] = value;
    setIsVisible(newVisibility);
  };

  const exportData = {
    settings,
    lists,
    globals,
    viewState: {
      isVisible,
      setVisibility
    }
  };

  return (
    <MetaContext.Provider value={exportData}>
      {props.children}
    </MetaContext.Provider>
  );
};

export default MetaContextProvider;
