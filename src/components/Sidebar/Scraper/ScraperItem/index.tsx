import React, { useContext } from 'react';
import { ScraperItemType } from 'types';
import { defaultStyle, styles } from 'config/scraperstyles.config';
import { MetaContext } from 'context/MetaContext';
import { ModalContext } from 'context/ModalContext';
import { Item, Location, Headline, Time, Kicker, AddButton } from './styles';
import { FiPlusCircle } from 'react-icons/fi';

type PropsType = {
  item: ScraperItemType;
};

const ScraperItem: React.FC<PropsType> = props => {
  const { showAddEntryModal } = useContext(ModalContext);
  const { settings } = useContext(MetaContext);
  let { time, headline, kicker, category, url } = props.item;

  let colors = defaultStyle;

  // This is where the conditional styles come in, if you have them enabled.
  // Compare this code to the structure of the scraperstyles.config.js to
  // understand how the styling works.
  if (settings.enableScraperColors) {
    for (let style of styles) {
      if (style.checkElement === 'url' && url.includes(style.included)) {
        colors = style;
        break;
      } else if (
        style.checkElement === 'kicker' &&
        kicker.includes(style.included)
      ) {
        colors = style;
        break;
      }
    }
  }

  // This is a little helper function to decode HTML characters that would
  // otherwise not be displayed properly. We're basically creating a textarea
  // without rendering it to the user, then using copy and paste.
  const decodeHtml = (html: string) => {
    var txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  };

  return (
    <Item borderLeft={colors.borderLeft}>
      <AddButton onClick={() => showAddEntryModal(props.item)}>
        <FiPlusCircle />
      </AddButton>
      <Time>{decodeHtml(time)}</Time>
      <Location
        bgColor={colors.categoryBackground}
        fontColor={colors.categoryFontColor}
      >
        {decodeHtml(category)}
      </Location>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Kicker>{decodeHtml(kicker)}</Kicker>
        <Headline>{decodeHtml(headline)}</Headline>
      </a>
    </Item>
  );
};

export default ScraperItem;
