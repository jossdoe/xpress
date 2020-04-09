// The Modal is a bit complex, so I've split it up into three components
// that are all defined inside this file:
//
// ## Modal
// ## TurboForm
// ## EntryForm
//
// This is the main starting point that binds all parts together and
// renders them to the DOM. Based on the 'modalType'-state that gets
// imported from the ModalContext, we either render the TurboForm-
// component or the EntryForm-component. Other than that, the code is
// fairly straightforward.
import React, { useContext, useState } from 'react';
import { FirebaseContext } from 'context/FirebaseContext';
import { MetaContext } from 'context/MetaContext';
import { ModalContext } from 'context/ModalContext';
import {
  Background,
  Content,
  CloseButton,
  DeleteQuestion,
  DeleteButton,
  CancelButton
} from './styles';
import Stack from 'components/layout/Stack';
import SubmitButton from 'components/forms/SubmitButton';
import TextInput from 'components/forms/TextInput';
import InputLabel from 'components/forms/InputLabel';
import CheckboxRow from 'components/forms/CheckboxRow';
import CheckboxTag from 'components/forms/CheckboxTag';
import LinkRadioGroup from 'components/forms/LinkRadioGroup';
import { IoIosCloseCircle } from 'react-icons/io';

const Modal = () => {
  const { postEntry, deleteEntry, editTurbo } = useContext(FirebaseContext);
  const { formData, isVisible, hideModal, modalType } = useContext(
    ModalContext
  );
  const [isVisibleDeletion, setIsVisibleDeletion] = useState<boolean>(false);
  if (!isVisible) return null;

  // Submitting the modal needs to take three things into account:
  // a) Which modalType-value is provided by the ModalContext? ('entry' or 'turbo')
  // b) Do we submit entries to one view or two? (checking for 'both'-value)
  // c) Do we submit entries to several lists or just one? (solved through forEach-method)
  const submitModal = () => {
    if (modalType === 'entry') {
      if (formData.switchValue === 'both') {
        formData.listArray.forEach((item) => {
          postEntry({
            type: 'social',
            list: item,
            title: formData.titleValue,
            url: formData.urlValue,
            topic: '',
            folder: '',
            isReady: true,
            isOnline: true,
            isPosted: false
          });

          postEntry({
            type: 'front',
            list: item,
            title: formData.titleValue,
            url: formData.urlValue,
            topic: '',
            folder: '',
            isReady: true,
            isOnline: true,
            isPosted: false
          });
        });
      } else {
        formData.listArray.forEach((item) => {
          postEntry({
            type: formData.switchValue === 'social' ? 'social' : 'front',
            list: item,
            title: formData.titleValue,
            url: formData.urlValue,
            topic: '',
            folder: '',
            isReady: true,
            isOnline: true,
            isPosted: false
          });
        });
      }
      hideModal();
    } else if (modalType === 'turbo') {
      editTurbo(formData.firebaseId, {
        title: formData.titleValue,
        topic: formData.topicValue,
        folder: formData.folderValue,
        url: formData.urlValue,
        isReady: formData.isReady,
        isOnline: formData.isOnline,
        isPosted: formData.isPosted
      });
      hideModal();
    } else {
      hideModal();
    }
  };

  const deleteTurbo = (id: string) => {
    setIsVisibleDeletion(false);
    deleteEntry(id);
    hideModal();
  };

  return (
    <Background>
      <Content>
        {modalType === 'turbo' && (
          <TurboForm
            deleteTurbo={deleteTurbo}
            isVisibleDeletion={isVisibleDeletion}
            setIsVisibleDeletion={setIsVisibleDeletion}
          />
        )}
        {modalType === 'entry' && <EntryForm />}
        <Stack spaceRight={4} style={{ textAlign: 'right' }}>
          <SubmitButton onClick={() => submitModal()}>Save</SubmitButton>
          {modalType === 'turbo' && (
            <DeleteButton onClick={() => setIsVisibleDeletion(true)}>
              Delete
            </DeleteButton>
          )}
        </Stack>
        <CloseButton onClick={() => hideModal()}>
          <IoIosCloseCircle />
        </CloseButton>
      </Content>
    </Background>
  );
};

const TurboForm: React.FC<{
  deleteTurbo: (id: string) => void;
  isVisibleDeletion: boolean;
  setIsVisibleDeletion: (value: boolean) => void;
}> = (props) => {
  const { formData } = useContext(ModalContext);

  return (
    <>
      <Stack space={4} marginBottom={20}>
        <div>
          <InputLabel>Headline</InputLabel>
          <TextInput
            variant="light"
            type="text"
            value={formData.titleValue}
            onChange={(e) => formData.setTitleValue(e.currentTarget.value)}
          />
        </div>
        <div>
          <InputLabel>Topic</InputLabel>
          <TextInput
            variant="light"
            type="text"
            value={formData.topicValue}
            onChange={(e) => formData.setTopicValue(e.currentTarget.value)}
          />
        </div>
        <div>
          <InputLabel>Folder</InputLabel>
          <TextInput
            variant="light"
            type="text"
            value={formData.folderValue}
            onChange={(e) => formData.setFolderValue(e.currentTarget.value)}
          />
        </div>
        <div>
          <InputLabel>Link</InputLabel>
          <TextInput
            variant="light"
            type="text"
            value={formData.urlValue}
            onChange={(e) => formData.setUrlValue(e.currentTarget.value)}
          />
        </div>
      </Stack>
      <Stack spaceRight={4} marginBottom={30}>
        <span>
          <CheckboxTag
            variant="dark"
            labelText="Redacted"
            name="turboModalIsReady"
            value="isReady"
            checked={formData.isReady}
            changeHandler={(value: boolean) => formData.setIsReady(value)}
          />
        </span>
        <span>
          <CheckboxTag
            variant="dark"
            labelText="Online"
            name="turboModalIsOnline"
            value="isOnline"
            checked={formData.isOnline}
            changeHandler={(value: boolean) => formData.setIsOnline(value)}
          />
        </span>
        <span>
          <CheckboxTag
            variant="dark"
            labelText="Posted"
            name="turboModalIsPosted"
            value="isPosted"
            checked={formData.isPosted}
            changeHandler={(value: boolean) => formData.setIsPosted(value)}
          />
        </span>
      </Stack>
      {props.isVisibleDeletion && (
        <Background>
          <DeleteQuestion>
            <Stack marginBottom={30}>Do you really want to delete this?</Stack>
            <Stack spaceRight={6} style={{ textAlign: 'right' }}>
              <SubmitButton
                onClick={() => props.deleteTurbo(formData.firebaseId)}
              >
                Yes
              </SubmitButton>
              <CancelButton onClick={() => props.setIsVisibleDeletion(false)}>
                Cancel
              </CancelButton>
            </Stack>
          </DeleteQuestion>
        </Background>
      )}
    </>
  );
};

const EntryForm = () => {
  const { formData } = useContext(ModalContext);
  const { lists } = useContext(MetaContext);

  const handleCheckboxToggle = (value: string) => {
    const localArray = [...formData.listArray];

    if (!localArray.includes(value)) {
      localArray.push(value);
      formData.setListArray(localArray);
    } else {
      const index = localArray.indexOf(value);
      localArray.splice(index, 1);
      formData.setListArray(localArray);
    }
  };

  return (
    <>
      <Stack space={4} marginBottom={20}>
        <div>
          <InputLabel>Headline</InputLabel>
          <TextInput
            variant="light"
            type="text"
            value={formData.titleValue}
            onChange={(e) => formData.setTitleValue(e.currentTarget.value)}
          />
        </div>
        <div>
          <InputLabel>Link</InputLabel>
          <TextInput
            variant="light"
            type="text"
            value={formData.urlValue}
            onChange={(e) => formData.setUrlValue(e.currentTarget.value)}
          />
        </div>
      </Stack>
      <Stack marginBottom={30} style={{ display: 'flex' }}>
        <Stack space={2} style={{ flex: 1, paddingRight: 10 }}>
          <InputLabel>Choose Context</InputLabel>
          <LinkRadioGroup
            groupName="modalEntrySwitch"
            choices={['social', 'front', 'both']}
            switchValue={formData.switchValue}
            setSwitchValue={formData.setSwitchValue}
          />
        </Stack>
        <Stack space={2} style={{ flex: 1, paddingLeft: 10 }}>
          <InputLabel>Choose Lists</InputLabel>
          {lists.map((list, index) => (
            <div key={index}>
              <CheckboxRow
                variant="dark"
                labelText={list.title}
                groupName="modalEntryLists"
                value={list.title}
                checked={formData.listArray.includes(list.title)}
                changeHandler={handleCheckboxToggle}
              />
            </div>
          ))}
        </Stack>
      </Stack>
    </>
  );
};

export default Modal;
