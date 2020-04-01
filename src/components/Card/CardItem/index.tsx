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
        onClick={() => setIsPosted(props.item.id, !props.item.isPosted)}
      >
        {props.item.isPosted && <FiCheckCircle />}
        {!props.item.isPosted && <FiCircle />}
      </ActionButton>
      <Description>
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
