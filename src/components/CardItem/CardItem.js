import React, { useContext } from 'react';
import { Item, ActionButton, Description } from './CardItem.styled';
import { FirebaseContext } from 'context';

const CardItem = (props) => {
  const { setIsPosted } = useContext(FirebaseContext);

  return (
    <Item>
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
