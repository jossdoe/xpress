import React, { useContext } from 'react';
import { MetaContext, FirebaseContext } from 'context';
import { Card } from 'components';
import { Content } from './SocialView.styled';

const SocialView = () => {
  const { lists, viewState } = useContext(MetaContext);
  const { socialEntries } = useContext(FirebaseContext);

  // We're sorting through the list-metadata as well as the social entries
  // and merge them into an array of lists, each with only the entries that
  // belong in each list.
  const sortedData = [];

  lists.forEach((list) => {
    const pushData = {
      title: list.title,
      frontpage: list.frontpage,
      ticker: list.ticker,
      isVisible: viewState.isVisible[list.title],
      entries: socialEntries.filter((entry) => entry.list === list.title)
    };

    sortedData.push(pushData);
  });

  return (
    <Content>
      {sortedData.map((list, index) => {
        if (!list.isVisible) return null;
        return <Card key={index} listData={list} />;
      })}
    </Content>
  );
};

export default SocialView;
