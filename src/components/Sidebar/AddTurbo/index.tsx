import React, { useState, useContext } from 'react';
import { FirebaseContext } from 'context/FirebaseContext';
import { MetaContext } from 'context/MetaContext';
import useTextInput from 'forms/useTextInput';
import {
  Form,
  RadioSection,
  FieldSection,
  SubmitSection,
  QuestionSection
} from './styles';

const AddTurbo = () => {
  const { postEntry } = useContext(FirebaseContext);
  const { lists } = useContext(MetaContext);

  const [activeList, setActiveList] = useState<string>(lists[0].title);
  const [titleValue, setTitleValue] = useState<string>('');
  const [topicValue, setTopicValue] = useState<string>('');
  const [folderValue, setFolderValue] = useState<string>('');
  const [urlValue, setUrlValue] = useState<string>('');
  const [isReady, setIsReady] = useState<boolean>(false);
  const [isOnline, setIsOnline] = useState<boolean>(false);
  const [isPosted, setIsPosted] = useState<boolean>(false);

  const resetForm = () => {
    setActiveList(lists[0].title);
    setTitleValue('');
    setTopicValue('');
    setFolderValue('');
    setUrlValue('');
    setIsReady(false);
    setIsOnline(false);
    setIsPosted(false);
  };

  const postForm = () => {
    postEntry({
      type: 'turbo',
      list: activeList,
      title: titleValue,
      url: urlValue,
      topic: topicValue,
      folder: folderValue,
      isReady,
      isOnline,
      isPosted
    });

    resetForm();
  };

  return (
    <Form>
      <FieldSection>
        {useTextInput('title', 'Headline', titleValue, setTitleValue)}
        {useTextInput('topic', 'Topic', topicValue, setTopicValue)}
        {useTextInput('folder', 'Folder', folderValue, setFolderValue)}
        {useTextInput('url', 'Link', urlValue, setUrlValue)}
      </FieldSection>
      <RadioSection>
        {lists.map((list, index) => {
          return (
            <React.Fragment key={index}>
              <input
                type="radio"
                name="lists"
                value={list.title}
                id={list.title}
                checked={activeList === list.title}
                onChange={e => setActiveList(e.target.value)}
              />
              <label htmlFor={list.title}>{list.title}</label>
            </React.Fragment>
          );
        })}
      </RadioSection>
      <QuestionSection>
        <li>
          <div>Redacted?</div>
          <aside>
            <input
              type="checkbox"
              name="isReady"
              value="isReady"
              id="isReady"
              checked={isReady}
              onChange={() => setIsReady(!isReady)}
            />
            <label htmlFor="isReady">
              <i className={isReady ? 'fas fa-check' : 'fas fa-times'} />
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
              id="isOnline"
              checked={isOnline}
              onChange={() => setIsOnline(!isOnline)}
            />
            <label htmlFor="isOnline">
              <i className={isOnline ? 'fas fa-check' : 'fas fa-times'} />
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
              id="isPosted"
              checked={isPosted}
              onChange={() => setIsPosted(!isPosted)}
            />
            <label htmlFor="isPosted">
              <i className={isPosted ? 'fas fa-check' : 'fas fa-times'} />
            </label>
          </aside>
        </li>
      </QuestionSection>
      <SubmitSection>
        <button className="submit" onClick={() => postForm()}>
          Submit
        </button>
        <button className="reset" onClick={() => resetForm()}>
          Reset
        </button>
      </SubmitSection>
    </Form>
  );
};

export default AddTurbo;
