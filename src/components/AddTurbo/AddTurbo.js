import React, { useState, useContext } from 'react';
import { useTextInput } from 'hooks';
import { FirebaseContext, MetaContext } from 'context';

import {
  Form,
  RadioSection,
  FieldSection,
  SubmitSection,
  QuestionSection
} from './AddTurbo.styled';

const AddTurbo = () => {
  const { postEntry } = useContext(FirebaseContext);
  const { lists } = useContext(MetaContext);

  const [activeList, setActiveList] = useState(lists[0].title);
  const [titleValue, setTitleValue] = useState('');
  const [topicValue, setTopicValue] = useState('');
  const [folderValue, setFolderValue] = useState('');
  const [urlValue, setUrlValue] = useState('');
  const [isReady, setIsReady] = useState(false);
  const [isOnline, setIsOnline] = useState(false);
  const [isPosted, setIsPosted] = useState(false);

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
                onChange={(e) => setActiveList(e.target.value)}
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
