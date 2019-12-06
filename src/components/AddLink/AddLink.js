import React, { useContext, useState } from 'react';
import { useRadioInput, useTextInput } from 'hooks';
import { FirebaseContext, MetaContext } from 'context';

import {
  Form,
  FieldSection,
  RadioSection,
  CheckboxSection,
  SubmitSection
} from './AddLink.styled';

const AddLink = () => {
  const { postEntry } = useContext(FirebaseContext);
  const { lists } = useContext(MetaContext);

  const [titleValue, setTitleValue] = useState('');
  const [urlValue, setUrlValue] = useState('');
  const [switchValue, setSwitchValue] = useState('social');
  const [listArray, setListArray] = useState([]);

  const resetForm = () => {
    setTitleValue('');
    setUrlValue('');
    setSwitchValue('social');
    setListArray([]);
  };

  const postForm = () => {
    if (switchValue === 'both') {
      listArray.forEach((item) => {
        postEntry({
          type: 'social',
          list: item,
          title: titleValue,
          url: urlValue,
          topic: '',
          folder: '',
          isReady: true,
          isOnline: true,
          isPosted: false
        });

        postEntry({
          type: 'front',
          list: item,
          title: titleValue,
          url: urlValue,
          topic: '',
          folder: '',
          isReady: true,
          isOnline: true,
          isPosted: false
        });
      });
    } else {
      listArray.forEach((item) => {
        postEntry({
          type: switchValue,
          list: item,
          title: titleValue,
          url: urlValue,
          topic: '',
          folder: '',
          isReady: true,
          isOnline: true,
          isPosted: false
        });
      });
    }

    resetForm();
  };

  const handleCheckboxToggle = (value) => {
    const localArray = [...listArray];

    if (!localArray.includes(value)) {
      localArray.push(value);
      setListArray(localArray);
    } else {
      const index = localArray.indexOf(value);
      localArray.splice(index, 1);
      setListArray(localArray);
    }
  };

  return (
    <Form>
      <FieldSection>
        {useTextInput('title', 'Headline', titleValue, setTitleValue)}
        {useTextInput('url', 'Link', urlValue, setUrlValue)}
      </FieldSection>
      <RadioSection>
        {useRadioInput(
          'switch',
          'social',
          'social',
          switchValue,
          setSwitchValue
        )}
        {useRadioInput('switch', 'front', 'front', switchValue, setSwitchValue)}
        {useRadioInput('switch', 'both', 'both', switchValue, setSwitchValue)}
      </RadioSection>
      <CheckboxSection>
        <h4>Lists</h4>
        {lists.map((list, index) => {
          return (
            <React.Fragment key={index}>
              <input
                type="checkbox"
                name="lists"
                value={list.title}
                id={list.title}
                checked={listArray.includes(list.title)}
                onChange={(e) => handleCheckboxToggle(e.target.value)}
              />
              <label htmlFor={list.title}>{list.title}</label>
            </React.Fragment>
          );
        })}
      </CheckboxSection>
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

export default AddLink;
