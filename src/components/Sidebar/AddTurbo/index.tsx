import React, { useState, useContext } from 'react';
import { FirebaseContext } from 'context/FirebaseContext';
import { MetaContext } from 'context/MetaContext';
import Stack from 'components/layout/Stack';
import InputLabel from 'components/forms/InputLabel';
import CheckboxTag from 'components/forms/CheckboxTag';
import SubmitButton from 'components/forms/SubmitButton';
import TextInput from 'components/forms/TextInput';
import TurboRadioGroup from 'components/forms/TuboRadioGroup';

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
          <InputLabel>Topic</InputLabel>
          <TextInput
            variant="dark"
            type="text"
            name="topic"
            id="topic"
            value={topicValue}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setTopicValue(e.currentTarget.value)
            }
          />
        </div>
        <div>
          <InputLabel>Folder</InputLabel>
          <TextInput
            variant="dark"
            type="text"
            name="folder"
            id="folder"
            value={folderValue}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setFolderValue(e.currentTarget.value)
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
        <InputLabel>Choose List</InputLabel>
        <TurboRadioGroup
          lists={lists}
          activeList={activeList}
          setActiveList={setActiveList}
        />
      </Stack>
      <Stack space={4} spaceRight={4} marginBottom={40}>
        <InputLabel>Status Tags</InputLabel>
        <CheckboxTag
          labelText="Redacted"
          name="isRedacted"
          checked={isReady}
          changeHandler={setIsReady}
        />
        <CheckboxTag
          labelText="Online"
          name="isOnline"
          checked={isOnline}
          changeHandler={setIsOnline}
        />
        <CheckboxTag
          labelText="Posted"
          name="isPosted"
          checked={isPosted}
          changeHandler={setIsPosted}
        />
      </Stack>
      <Stack align="right">
        <SubmitButton onClick={() => postForm()}>Save</SubmitButton>
      </Stack>
    </div>
  );
};

export default AddTurbo;
