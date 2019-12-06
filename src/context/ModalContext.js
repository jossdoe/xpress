import React, { useState, createContext } from 'react';

export const ModalContext = createContext();

const ModalContextProvider = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [modalType, setModalType] = useState('entry');

  // States for Form Data in Modal
  const [firebaseId, setFirebaseId] = useState(null);
  const [titleValue, setTitleValue] = useState('');
  const [topicValue, setTopicValue] = useState('');
  const [folderValue, setFolderValue] = useState('');
  const [urlValue, setUrlValue] = useState('');
  const [isReady, setIsReady] = useState(false);
  const [isOnline, setIsOnline] = useState(false);
  const [isPosted, setIsPosted] = useState(false);
  const [switchValue, setSwitchValue] = useState('social');
  const [listArray, setListArray] = useState([]);

  const formData = {
    firebaseId,
    setFirebaseId,
    titleValue,
    setTitleValue,
    topicValue,
    setTopicValue,
    folderValue,
    setFolderValue,
    urlValue,
    setUrlValue,
    isReady,
    setIsReady,
    isOnline,
    setIsOnline,
    isPosted,
    setIsPosted,
    switchValue,
    setSwitchValue,
    listArray,
    setListArray
  };

  const resetModalFields = () => {
    setFirebaseId(null);
    setTitleValue('');
    setTopicValue('');
    setFolderValue('');
    setUrlValue('');
    setIsReady(false);
    setIsOnline(false);
    setIsPosted(false);
    setSwitchValue('social');
    setListArray([]);
  };

  const hideModal = () => {
    setIsVisible(false);
    resetModalFields();
  };

  const showAddEntryModal = (data) => {
    resetModalFields();

    if (data) {
      setTitleValue(data.kicker + ': ' + data.headline);
      setUrlValue(data.url);

      if (data.metaData.type === 'local') {
        let newArray = [...listArray];
        newArray.push(data.metaData.title);
        setListArray(newArray);
      }
    }

    setModalType('entry');
    setIsVisible(true);
  };

  const showEditTurboModal = (data) => {
    resetModalFields();

    if (data) {
      setFirebaseId(data.id);
      setTitleValue(data.title);
      setTopicValue(data.topic);
      setFolderValue(data.folder);
      setUrlValue(data.url);
      setIsReady(data.isReady);
      setIsOnline(data.isOnline);
      setIsPosted(data.isPosted);
    }

    setModalType('turbo');
    setIsVisible(true);
  };

  return (
    <ModalContext.Provider
      value={{
        isVisible,
        showAddEntryModal,
        showEditTurboModal,
        hideModal,
        modalType,
        formData
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
