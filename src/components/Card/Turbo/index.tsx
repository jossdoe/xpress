import React, { useContext } from 'react';
import { LinkDatabaseType } from 'types';
import { FirebaseContext } from 'context/FirebaseContext';
import { ModalContext } from 'context/ModalContext';
import { Item, Headline, Topic, Location, Button, EditButton } from './styles';

type PropsType = {
  item: LinkDatabaseType;
};

const Turbo: React.FC<PropsType> = props => {
  const { setIsReady, setIsOnline, setIsPosted } = useContext(FirebaseContext);
  const { showEditTurboModal } = useContext(ModalContext);

  return (
    <Item>
      <Headline>
        {props.item.title + ' '}
        {props.item.url && (
          <a
            href={props.item.url || '#'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-link" />
          </a>
        )}
      </Headline>
      <Topic>{props.item.topic || 'No Topic'}</Topic>
      <Location>{props.item.folder || 'No Folder'}</Location>
      <Button
        done={props.item.isReady}
        onClick={() => setIsReady(props.item.id, !props.item.isReady)}
      >
        {'Redacted '}
        {props.item.isReady ? (
          <i className="fas fa-check" />
        ) : (
          <i className="fas fa-times" />
        )}
      </Button>
      <Button
        done={props.item.isOnline}
        onClick={() => setIsOnline(props.item.id, !props.item.isOnline)}
      >
        {'Online '}
        {props.item.isOnline ? (
          <i className="fas fa-check" />
        ) : (
          <i className="fas fa-times" />
        )}
      </Button>
      <Button
        done={props.item.isPosted}
        onClick={() => setIsPosted(props.item.id, !props.item.isPosted)}
      >
        {'Posted '}
        {props.item.isPosted ? (
          <i className="fas fa-check" />
        ) : (
          <i className="fas fa-times" />
        )}
      </Button>
      <EditButton onClick={() => showEditTurboModal(props.item)}>
        <i className="fas fa-pen-square" />
      </EditButton>
    </Item>
  );
};

export default Turbo;
