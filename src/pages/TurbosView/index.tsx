import React, { useContext } from 'react';
import { LinkDatabaseType } from 'types';
import { FirebaseContext } from 'context/FirebaseContext';
import { MetaContext } from 'context/MetaContext';
import Card from 'components/Card';
import { Content } from './styles';

type ListArrayType = {
  title: string;
  frontpage: string;
  isVisible: boolean;
  entries: Array<LinkDatabaseType>;
};

const TurbosView = () => {
  const { lists, viewState } = useContext(MetaContext);
  const { turbosEntries } = useContext(FirebaseContext);

  // We're sorting through the list-metadata as well as the turbos entries
  // and merge them into an array of lists, each with only the entries that
  // belong in each list.
  const sortedData: Array<ListArrayType> = [];

  lists.forEach(list => {
    const pushData = {
      title: list.title,
      frontpage: list.frontpage,
      isVisible: viewState.isVisible[list.title],
      entries: turbosEntries.filter(entry => entry.list === list.title)
    };

    sortedData.push(pushData);
  });

  return (
    <Content>
      {sortedData.map((list, index) => {
        if (!list.isVisible) return null;
        return <Card key={index} listData={list} itemType="turbo" />;
      })}
    </Content>
  );
};

export default TurbosView;
