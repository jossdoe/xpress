import React, { useContext } from 'react';
import { LinkDatabaseType } from 'types';
import { FirebaseContext } from 'context/FirebaseContext';
import { Item, ActionButton, Description } from './styles';
import { FiCircle, FiCheckCircle } from 'react-icons/fi';

type PropsType = {
  item: LinkDatabaseType;
};

const CardItem: React.FC<PropsType> = (props) => {
  const { setIsPosted } = useContext(FirebaseContext);

  // This is a little helper function to decode HTML characters that would
  // otherwise not be displayed properly. We're basically creating a textarea
  // without rendering it to the user, then using copy and paste.
  const decodeHtml = (html: string) => {
    var txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  };

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
          {decodeHtml(props.item.title)}
        </a>
      </Description>
    </Item>
  );
};

export default CardItem;
