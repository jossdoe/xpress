import React, { useContext } from 'react';
import { ModalContext, MetaContext } from 'context';
import { defaultStyle, styles } from 'config/scraperstyles.config';
import {
  Item,
  Location,
  Headline,
  Time,
  Kicker,
  AddButton
} from './ScraperItem.styled';

const ScraperItem = (props) => {
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
  const decodeHtml = (html) => {
    var txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  };

  return (
    <Item borderLeft={colors.borderLeft}>
      <AddButton onClick={() => showAddEntryModal(props.item)}>
        <i className="fas fa-plus" />
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
