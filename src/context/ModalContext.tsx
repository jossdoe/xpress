// This Context handles all the data that is used by the different
// modal views. Since we have several components that need to be
// able to produce and consume a modal, we provide all the data flow
// through this global context, including form states.
import React, { useState, createContext } from 'react';
import {
  ModalFormDataType,
  ScraperItemType,
  LinkDatabaseType,
  ModalFormDataDummy
} from 'types';

type ContextType = {
  isVisible: boolean;
  showAddEntryModal: (data: ScraperItemType) => void;
  showEditTurboModal: (data: LinkDatabaseType) => void;
  hideModal: () => void;
  modalType: 'entry' | 'turbo';
  formData: ModalFormDataType;
};

export const ModalContext = createContext<ContextType>({
  isVisible: false,
  showAddEntryModal: (data: ScraperItemType) => {},
  showEditTurboModal: (data: LinkDatabaseType) => {},
  hideModal: () => {},
  modalType: 'entry',
  formData: ModalFormDataDummy // Located in types-file because of space
});

const ModalContextProvider: React.FC = props => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // 'modalType' can either be 'entry' or 'turbo' depending on the
  // content the user wants to edit. This directly controls the architecture
  // of the component in 'components/Modal/Modal.js'.
  const [modalType, setModalType] = useState<ContextType['modalType']>('entry');

  // States for Form Data in Modal
  const [firebaseId, setFirebaseId] = useState('');
  const [titleValue, setTitleValue] = useState('');
  const [topicValue, setTopicValue] = useState('');
  const [folderValue, setFolderValue] = useState('');
  const [urlValue, setUrlValue] = useState('');
  const [isReady, setIsReady] = useState(false);
  const [isOnline, setIsOnline] = useState(false);
  const [isPosted, setIsPosted] = useState(false);
  const [switchValue, setSwitchValue] = useState<'both' | 'social' | 'front'>(
    'social'
  );
  const [listArray, setListArray] = useState<Array<string>>([]);

  // Bundling the form states together for easier export to and
  // consumption in the component.
  const formData: ModalFormDataType = {
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
    setFirebaseId('');
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

  // These two functions trigger the rendering of a Modal and
  // set its initial form data as well as the type of view that
  // needs to be rendered.
  const showAddEntryModal = (data: ScraperItemType) => {
    resetModalFields();

    if (data) {
      setTitleValue(data.kicker + ': ' + data.headline);
      setUrlValue(data.url);

      // If we add an entry from a local scraper, we want to pre-select
      // the corresponding list as the target list.
      if (data.metaData.type === 'local') {
        let newArray = [...listArray];
        newArray.push(data.metaData.title);
        setListArray(newArray);
      }
    }

    setModalType('entry');
    setIsVisible(true);
  };

  const showEditTurboModal = (data: LinkDatabaseType) => {
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
