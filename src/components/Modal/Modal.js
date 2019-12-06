import React, { useContext } from 'react';
import { FirebaseContext, ModalContext, MetaContext } from 'context';
import { useCheckbox, useRadioInput, useTextInput } from 'hooks';
import {
  Background,
  Content,
  CloseButton,
  FieldSection,
  QuestionSection,
  RadioSection,
  CheckboxSection,
  SubmitSection
} from './Modal.styled';

const Modal = () => {
  const { postEntry, deleteEntry, editTurbo } = useContext(FirebaseContext);
  const { formData, isVisible, hideModal, modalType } = useContext(
    ModalContext
  );
  if (!isVisible) return null;

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
            type: formData.switchValue,
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

  const deleteTurbo = (id) => {
    deleteEntry(id);
    hideModal();
  };

  return (
    <Background>
      <Content>
        {modalType === 'turbo' && <TurboForm />}
        {modalType === 'entry' && <EntryForm />}

        <SubmitSection>
          <button className="submit" onClick={() => submitModal()}>
            Submit
          </button>
          <button className="cancel" onClick={() => hideModal()}>
            Cancel
          </button>

          {modalType === 'turbo' && (
            <button
              className="delete"
              onClick={() => deleteTurbo(formData.firebaseId)}
            >
              <span>
                <i className="fas fa-trash-alt" />
              </span>
            </button>
          )}
        </SubmitSection>

        <CloseButton onClick={() => hideModal()}>
          <i className="fas fa-times-circle" />
        </CloseButton>
      </Content>
    </Background>
  );
};

const TurboForm = () => {
  const { formData } = useContext(ModalContext);

  return (
    <>
      <FieldSection>
        {useTextInput(
          'title',
          'Headline',
          formData.titleValue,
          formData.setTitleValue
        )}
        {useTextInput(
          'topic',
          'Topic',
          formData.topicValue,
          formData.setTopicValue
        )}
        {useTextInput(
          'folder',
          'Folder',
          formData.folderValue,
          formData.setFolderValue
        )}
        {useTextInput('url', 'Link', formData.urlValue, formData.setUrlValue)}
      </FieldSection>

      <QuestionSection>
        <li>
          <div>Redacted?</div>
          <aside>
            <input
              type="checkbox"
              name="isReady"
              value="isReady"
              id="modalIsReady"
              checked={formData.isReady}
              onChange={() => formData.setIsReady(!formData.isReady)}
            />
            <label htmlFor="modalIsReady">
              <i
                className={formData.isReady ? 'fas fa-check' : 'fas fa-times'}
              />
            </label>
          </aside>
        </li>
        <li>
          <div>Online?</div>
          <aside>
            <input
              type="checkbox"
              name="isOnline"
              value="isOnline"
              id="modalIsOnline"
              checked={formData.isOnline}
              onChange={() => formData.setIsOnline(!formData.isOnline)}
            />
            <label htmlFor="modalIsOnline">
              <i
                className={formData.isOnline ? 'fas fa-check' : 'fas fa-times'}
              />
            </label>
          </aside>
        </li>
        <li>
          <div>Posted?</div>
          <aside>
            <input
              type="checkbox"
              name="isPosted"
              value="isPosted"
              id="modalIsPosted"
              checked={formData.isPosted}
              onChange={() => formData.setIsPosted(!formData.isPosted)}
            />
            <label htmlFor="modalIsPosted">
              <i
                className={formData.isPosted ? 'fas fa-check' : 'fas fa-times'}
              />
            </label>
          </aside>
        </li>
      </QuestionSection>
    </>
  );
};

const EntryForm = () => {
  const { formData } = useContext(ModalContext);
  const { lists } = useContext(MetaContext);

  const handleCheckboxToggle = (value) => {
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
      <FieldSection>
        {useTextInput(
          'modalTitle',
          'Headline',
          formData.titleValue,
          formData.setTitleValue
        )}
        {useTextInput(
          'modalUrl',
          'Link',
          formData.urlValue,
          formData.setUrlValue
        )}
      </FieldSection>

      <RadioSection>
        {useRadioInput(
          'modalSwitch',
          'modalSocial',
          'social',
          formData.switchValue,
          formData.setSwitchValue
        )}
        {useRadioInput(
          'modalSwitch',
          'modalFront',
          'front',
          formData.switchValue,
          formData.setSwitchValue
        )}
        {useRadioInput(
          'modalSwitch',
          'modalBoth',
          'both',
          formData.switchValue,
          formData.setSwitchValue
        )}
      </RadioSection>

      <CheckboxSection>
        <h4>Lists</h4>
        {lists.map((list, index) => {
          return (
            <React.Fragment key={index}>
              <input
                type="checkbox"
                name="modalLists"
                value={list.title}
                id={'modal' + list.title}
                checked={formData.listArray.includes(list.title)}
                onChange={(e) => handleCheckboxToggle(e.target.value)}
              />
              <label htmlFor={'modal' + list.title}>{list.title}</label>
            </React.Fragment>
          );
        })}
      </CheckboxSection>
    </>
  );
};

export default Modal;
