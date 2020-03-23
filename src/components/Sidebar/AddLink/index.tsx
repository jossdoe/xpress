import React, { useContext, useState } from 'react';
import { LinkTypeFormTypes } from 'types';
import { FirebaseContext } from 'context/FirebaseContext';
import { MetaContext } from 'context/MetaContext';
import useRadioInput from 'forms/useRadioInput';
import useTextInput from 'forms/useTextInput';
import {
  Form,
  FieldSection,
  RadioSection,
  CheckboxSection,
  SubmitSection
} from './styles';

const AddLink = () => {
  const { postEntry } = useContext(FirebaseContext);
  const { lists } = useContext(MetaContext);

  const [titleValue, setTitleValue] = useState<string>('');
  const [urlValue, setUrlValue] = useState<string>('');
  const [switchValue, setSwitchValue] = useState<LinkTypeFormTypes>('social');
  const [listArray, setListArray] = useState<Array<string>>([]);

  const resetForm = () => {
    setTitleValue('');
    setUrlValue('');
    setSwitchValue('social');
    setListArray([]);
  };

  // Since our database is built in a way where one item corresponds to
  // one entry on a list, posting an item for two views at once  will have
  // to work through actually posting two entries.
  const postForm = () => {
    if (switchValue === 'both') {
      listArray.forEach(item => {
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
      listArray.forEach(item => {
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

  const handleCheckboxToggle = (value: string) => {
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
        {lists.map((list, index: number) => {
          return (
            <React.Fragment key={index}>
              <input
                type="checkbox"
                name="lists"
                value={list.title}
                id={list.title}
                checked={listArray.includes(list.title)}
                onChange={e => handleCheckboxToggle(e.target.value)}
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
