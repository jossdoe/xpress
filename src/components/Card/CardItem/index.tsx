import React, { useContext } from 'react';
import { LinkDatabaseType } from 'types';
import { FirebaseContext } from 'context/FirebaseContext';
import { Item, ActionButton, Description } from './styles';

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
        {props.item.isPosted && <i className="fas fa-check" />}
        {!props.item.isPosted && <i className="far fa-square" />}
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
