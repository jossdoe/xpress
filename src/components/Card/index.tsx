import React from 'react';
import { LinkDatabaseType } from 'types';
import CardItem from 'components/Card/CardItem';
import Turbo from 'components/Card/Turbo';
import { CardComponent } from './styles';

type PropsType = {
  listData: {
    title: string;
    frontpage: string;
    entries: Array<LinkDatabaseType>;
  };
  itemType?: 'turbo';
};

const Card: React.FC<PropsType> = props => {
  return (
    <CardComponent>
      <header>{props.listData.title}</header>
      <ul>
        {props.listData.entries.map(item => {
          // Card Items are designed the same way for 'Social' and 'Frontpages'.
          // They're only different for 'Turbos'.
          if (props.itemType === 'turbo')
            return <Turbo key={item.id} item={item} />;
          return <CardItem key={item.id} item={item} />;
        })}
      </ul>
    </CardComponent>
  );
};

export default Card;
