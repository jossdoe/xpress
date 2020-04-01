import React, { useContext, useState } from 'react';
import { LinkTypeFormTypes } from 'types';
import { FirebaseContext } from 'context/FirebaseContext';
import { MetaContext } from 'context/MetaContext';
import Stack from 'components/layout/Stack';
import InputLabel from 'components/forms/InputLabel';
import TextInput from 'components/forms/TextInput';
import LinkRadioGroup from 'components/forms/LinkRadioGroup';
import CheckboxRow from 'components/forms/CheckboxRow';
import SubmitButton from 'components/forms/SubmitButton';

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
  // one entry on a list, posting an item for two views at once will have
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
    <div style={{ padding: 20 }}>
      <Stack space={4} marginBottom={20}>
        <div>
          <InputLabel>Headline</InputLabel>
          <TextInput
            variant="dark"
            type="text"
            name="title"
            id="title"
            value={titleValue}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setTitleValue(e.currentTarget.value)
            }
          />
        </div>
        <div>
          <InputLabel>Link</InputLabel>
          <TextInput
            variant="dark"
            type="text"
            name="url"
            id="url"
            value={urlValue}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setUrlValue(e.currentTarget.value)
            }
          />
        </div>
      </Stack>
      <Stack space={2} marginBottom={20}>
        <InputLabel>Choose Context</InputLabel>
        <LinkRadioGroup
          groupName="switch"
          choices={['social', 'front', 'both']}
          switchValue={switchValue}
          setSwitchValue={setSwitchValue}
        />
      </Stack>
      <Stack space={2} marginBottom={40}>
        <InputLabel>Choose Lists</InputLabel>
        {lists.map((list, index) => (
          <React.Fragment key={index}>
            <CheckboxRow
              labelText={list.title}
              groupName="lists"
              value={list.title}
              checked={listArray.includes(list.title)}
              changeHandler={handleCheckboxToggle}
            />
          </React.Fragment>
        ))}
      </Stack>
      <Stack align="right">
        <SubmitButton onClick={() => postForm()}>Save</SubmitButton>
      </Stack>
    </div>
  );
};

export default AddLink;
