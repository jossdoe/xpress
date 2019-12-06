import React, { useContext, useState } from 'react';
import { MetaContext, ScraperContext } from 'context';
import { ScraperItem } from 'components';
import { Container, Settings, Title, List, Spinner } from './Scraper.styled';

const Scraper = () => {
  const {
    isLoading,
    fetchedData,
    activeScraper,
    setActiveScraper
  } = useContext(ScraperContext);
  const { settings, lists, globals } = useContext(MetaContext);
  const [isVisibleSettings, setIsVisibleSettings] = useState(false);

  if (!settings.enableScraper) return null;

  return (
    <Container>
      {isVisibleSettings && (
        <Settings>
          <button onClick={() => setIsVisibleSettings(false)}>
            <i className="fas fa-times"></i>
          </button>
          <nav>
            <h2>Source</h2>
            <h4>List Scrapers</h4>
            <ul>
              {lists.map((list, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setActiveScraper(list);
                    setIsVisibleSettings(false);
                  }}
                >
                  {list.title}
                </li>
              ))}
            </ul>
            <h4>Others</h4>
            <ul>
              {globals.map((global, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setActiveScraper(global);
                    setIsVisibleSettings(false);
                  }}
                >
                  {global.title}
                </li>
              ))}
            </ul>
          </nav>
        </Settings>
      )}

      <Title>
        <span onClick={() => setIsVisibleSettings(true)}>
          <i className="fas fa-exchange-alt" />
        </span>
        {activeScraper.title}
      </Title>

      {isLoading && !isVisibleSettings && (
        <Spinner>
          <span />
        </Spinner>
      )}

      {!isLoading && (
        <List>
          {fetchedData.map((item) => (
            <ScraperItem key={item.id} item={item} />
          ))}
        </List>
      )}
    </Container>
  );
};

export default Scraper;
