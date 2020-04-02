import React, { useContext } from 'react';
import { LinkDatabaseType } from 'types';
import { FirebaseContext } from 'context/FirebaseContext';
import { Item, ActionButton, Description } from './styles';
import { FiCircle, FiCheckCircle } from 'react-icons/fi';

type PropsType = {
  item: LinkDatabaseType;
};

const CardItem: React.FC<PropsType> = props => {
  const { setIsPosted } = useContext(FirebaseContext);

  return (
    <Item isPosted={props.item.isPosted}>
      <ActionButton
        isPosted={props.item.isPosted}
        onClick={() => setIsPosted(props.item.id, !props.item.isPosted)}
      >
        {props.item.isPosted && (
          <div>
            <FiCheckCircle style={{ verticalAlign: 'middle' }} />
          </div>
        )}
        {!props.item.isPosted && (
          <div>
            <FiCircle style={{ verticalAlign: 'middle' }} />
          </div>
        )}
      </ActionButton>
      <Description isPosted={props.item.isPosted}>
        <a
          href={props.item.url || '#'}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.item.title}
        </a>
      </Description>
    </Item>
  );
};

export default CardItem;
