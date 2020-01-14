import React from 'react';
import { CardItem, Turbo } from 'components';
import { CardComponent } from './Card.styled';

const Card = (props) => {
  return (
    <CardComponent>
      <header>{props.listData.title}</header>
      <ul>
        {props.listData.entries.map((item) => {
          // Card Items are designed the same way for 'Social' and 'Frontpages'.
          // They're only different for 'Turbos'.
          if (props.itemType !== 'turbo')
            return <CardItem key={item.id} item={item} />;
          else return <Turbo key={item.id} item={item} />;
        })}
      </ul>
    </CardComponent>
  );
};

export default Card;
