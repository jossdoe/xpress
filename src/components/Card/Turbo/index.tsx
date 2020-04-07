import React, { useContext } from 'react';
import { LinkDatabaseType } from 'types';
import { FirebaseContext } from 'context/FirebaseContext';
import { ModalContext } from 'context/ModalContext';
import {
  Item,
  Headline,
  Topic,
  Location,
  EditButton,
  StatusStack,
  StatusItem
} from './styles';
import Stack from 'components/layout/Stack';
import {
  FiLink2,
  FiCircle,
  FiCheckCircle,
  FiEdit,
  FiTag
} from 'react-icons/fi';
import { AiOutlineFolderOpen } from 'react-icons/ai';

type PropsType = {
  item: LinkDatabaseType;
};

const Turbo: React.FC<PropsType> = props => {
  const { setIsReady, setIsOnline, setIsPosted } = useContext(FirebaseContext);
  const { showEditTurboModal } = useContext(ModalContext);

  return (
    <Item>
      <EditButton onClick={() => showEditTurboModal(props.item)}>
        <FiEdit />
      </EditButton>
      <Headline>
        <span style={{ verticalAlign: 'middle' }}>
          {props.item.title + ' '}
        </span>
        {props.item.url && (
          <a
            href={props.item.url || '#'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLink2 style={{ verticalAlign: 'middle', opacity: 0.6 }} />
          </a>
        )}
      </Headline>
      <Stack marginBottom={10}>
        <Topic>
          <FiTag
            style={{ verticalAlign: 'middle', opacity: 0.6, marginRight: 6 }}
          />
          <span style={{ verticalAlign: 'middle' }}>
            {props.item.topic || 'No Topic'}
          </span>
        </Topic>
        <Location>
          <AiOutlineFolderOpen
            style={{ verticalAlign: 'middle', opacity: 0.6, marginRight: 6 }}
          />
          <span style={{ verticalAlign: 'middle' }}>
            {props.item.folder || 'No Folder'}
          </span>
        </Location>
      </Stack>
      <StatusStack>
        <StatusItem
          onClick={() => setIsReady(props.item.id, !props.item.isReady)}
          done={props.item.isReady}
        >
          {props.item.isReady ? (
            <FiCheckCircle
              style={{ verticalAlign: 'middle', marginRight: '3px' }}
            />
          ) : (
            <FiCircle style={{ verticalAlign: 'middle', marginRight: '3px' }} />
          )}
          <span style={{ verticalAlign: 'middle' }}>Redacted</span>
        </StatusItem>
        <StatusItem
          onClick={() => setIsOnline(props.item.id, !props.item.isOnline)}
          done={props.item.isOnline}
        >
          {props.item.isOnline ? (
            <FiCheckCircle
              style={{ verticalAlign: 'middle', marginRight: '3px' }}
            />
          ) : (
            <FiCircle style={{ verticalAlign: 'middle', marginRight: '3px' }} />
          )}
          <span style={{ verticalAlign: 'middle' }}>Online</span>
        </StatusItem>
        <StatusItem
          onClick={() => setIsPosted(props.item.id, !props.item.isPosted)}
          done={props.item.isPosted}
        >
          {props.item.isPosted ? (
            <FiCheckCircle
              style={{ verticalAlign: 'middle', marginRight: '3px' }}
            />
          ) : (
            <FiCircle style={{ verticalAlign: 'middle', marginRight: '3px' }} />
          )}
          <span style={{ verticalAlign: 'middle' }}>Posted</span>
        </StatusItem>
      </StatusStack>
    </Item>
  );
};

export default Turbo;
