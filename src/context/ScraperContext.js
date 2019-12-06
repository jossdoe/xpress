import React, { useState, createContext, useEffect, useContext } from 'react';
import { MetaContext } from 'context/MetaContext';
import { settings } from 'config/general.config';

export const ScraperContext = createContext();

const ScraperContextProvider = (props) => {
  const { lists } = useContext(MetaContext);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedData, setFetchedData] = useState([]);
  const [activeScraper, setActiveScraper] = useState(lists[0]);

  useEffect(() => {
    activateScraper(activeScraper);
  }, [activeScraper]);

  const activateScraper = (list) => {
    setIsLoading(true);

    fetch(list.scraperUrl)
      .then((result) => result.json())
      .then((data) => {
        setFetchedData(filterFetchData(normalizeFetchData(data)));
        setIsLoading(false);
      })
      .catch((error) => console.log('Error: ', error));
  };

  const normalizeFetchData = (data) => {
    let returnData = data.map((item, index) => {
      if (activeScraper.type === 'local') {
        let { id, time, location, dach, headline, url } = item;
        if (!url.includes('https:')) url = activeScraper.frontpage + url;

        return {
          id,
          time,
          headline,
          kicker: dach,
          category: location,
          url,
          metaData: { ...activeScraper }
        };
      } else if (activeScraper.type === 'global') {
        let { link, title, time } = item;

        return {
          id: index,
          time,
          headline: title,
          kicker: activeScraper.title,
          category: activeScraper.title,
          url: link,
          metaData: { ...activeScraper }
        };
      } else {
        return 'Error while normalizing Fetch-Data!';
      }
    });

    return returnData;
  };

  const filterFetchData = (data) => {
    if (activeScraper.type === 'global' || settings.excludeFromScraper === '')
      return data;

    let returnData = data.filter(
      (item) => !item.url.includes(settings.excludeFromScraper)
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
