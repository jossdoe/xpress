import React, { useState, createContext } from 'react';
import { settings, lists, globals } from 'config/general.config';

export const MetaContext = createContext();

const MetaContextProvider = (props) => {
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
