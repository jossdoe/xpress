// This Context handles all of the data flow that is connected to having scrapers
// set up in our project. It calls the APIs and normalizes/filters the data, so
// our app can properly consume it. Then it provides the data to the app.

import React, { useState, createContext, useEffect } from 'react';
import { settings, lists } from 'config/general.config';
import {
  ListTypes,
  ScraperItemType,
  RawScraperItemTypes,
  isRawLocalScraperItem,
  isLocalListType
} from 'types';

type ContextType = {
  isLoading: boolean;
  fetchedData: Array<ScraperItemType>;
  setActiveScraper: (list: ListTypes) => void;
  activeScraper: ListTypes;
};

export const ScraperContext = createContext<ContextType>({
  isLoading: true,
  fetchedData: [],
  setActiveScraper: (list: ListTypes) => {},
  activeScraper: lists[0]
});

const ScraperContextProvider: React.FC = props => {
  // Since there can only be one active Scraper view at a time, we can set all
  // the states just once.
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [fetchedData, setFetchedData] = useState<Array<ScraperItemType>>([]);
  const [activeScraper, setActiveScraper] = useState<ListTypes>(lists[0]);

  // The activateScraper function handles the data fetching as well as normalization and state
  // management. It runs automatically whenever the 'activeScraper'-state changes. All we need
  // to do to trigger it, is providing a valid list-Object to the state.
  useEffect(() => {
    activateScraper(activeScraper);
  }, [activeScraper]);

  const activateScraper = (list: ListTypes) => {
    setIsLoading(true);

    fetch(list.scraperUrl)
      .then(result => result.json())
      .then(data => {
        setFetchedData(filterFetchData(normalizeFetchData(data)));
        setIsLoading(false);
      })
      .catch(error => console.log('Error: ', error));
  };

  // This is the function you need to edit in order to match the data
  // structure of your API.
  // I have different structures in my APIs depending on whether they're
  // local or global. So I have set up an if-statement to check for type.
  // You can remove/simplify it, if you're only dealing with one kind of scraper.
  const normalizeFetchData = (data: Array<RawScraperItemTypes>) => {
    let returnData = data.map((item, index) => {
      if (isRawLocalScraperItem(item)) {
        let { id, time, location, dach, headline, url } = item;
        if (isLocalListType(activeScraper)) {
          if (!url.includes('https:')) url = activeScraper.frontpage + url;
        }

        const returnData: ScraperItemType = {
          id,
          time,
          headline,
          kicker: dach,
          category: location,
          url,
          metaData: { ...activeScraper }
        };

        return returnData;
      } else {
        let { link, title, time } = item;

        const returnData: ScraperItemType = {
          id: index,
          time,
          headline: title,
          kicker: activeScraper.title,
          category: activeScraper.title,
          url: link,
          metaData: { ...activeScraper }
        };

        return returnData;
      }
    });

    return returnData;
  };

  // This function can conditionally filter your data to not show certain entries.
  // If you don't want your data filtered, just leave it as is.
  const filterFetchData = (data: Array<ScraperItemType>) => {
    if (activeScraper.type === 'global' || settings.excludeFromScraper === '')
      return data;

    let returnData = data.filter(
      item => !item.url.includes(settings.excludeFromScraper)
    );

    return returnData;
  };

  return (
    <ScraperContext.Provider
      value={{
        isLoading,
        fetchedData,
        setActiveScraper,
        activeScraper
      }}
    >
      {props.children}
    </ScraperContext.Provider>
  );
};

export default ScraperContextProvider;
