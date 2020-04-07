import React, { useContext, useState } from 'react';
import { MetaContext } from 'context/MetaContext';
import { ScraperContext } from 'context/ScraperContext';
import ScraperItem from 'components/Sidebar/Scraper/ScraperItem';
import {
  Container,
  Settings,
  SourceButton,
  List,
  Spinner,
  ExitSettingsButton
} from './styles';
import { FiHash } from 'react-icons/fi';
import { IoIosCloseCircle } from 'react-icons/io';
import Stack from 'components/layout/Stack';

const Scraper = () => {
  const {
    isLoading,
    fetchedData,
    activeScraper,
    setActiveScraper
  } = useContext(ScraperContext);
  const { settings, lists, globals } = useContext(MetaContext);
  const [isVisibleSettings, setIsVisibleSettings] = useState<boolean>(false);

  if (!settings.enableScraper) return null;

  return (
    <Container>
      <Settings isVisible={isVisibleSettings}>
        <main
          style={{
            position: 'relative',
            backgroundColor: '#fafafa',
            padding: '20px',
            borderRadius: '5px',
            boxShadow: '2px 4px 6px #0000001a, 2px 4px 18px #0000001a'
          }}
        >
          <Stack
            marginBottom={4}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <h2>Choose Source</h2>
            <ExitSettingsButton
              style={{
                paddingLeft: '50px'
              }}
              onClick={() => setIsVisibleSettings(false)}
            >
              <IoIosCloseCircle />
            </ExitSettingsButton>
          </Stack>
          <Stack space={3} marginBottom={10}>
            <h4># List Scrapers</h4>
            <ul>
              <Stack space={2}>
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
              </Stack>
            </ul>
          </Stack>
          <Stack space={3}>
            <h4># Others</h4>
            <ul>
              <Stack space={2}>
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
              </Stack>
            </ul>
          </Stack>
        </main>
      </Settings>

      <div
        style={{
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <SourceButton onClick={() => setIsVisibleSettings(true)}>
          <FiHash />
        </SourceButton>
        <h2 style={{ flex: 1 }}>{activeScraper.title}</h2>
      </div>

      {isLoading && !isVisibleSettings && (
        <Spinner style={{ margin: '40px auto' }}>
          <span />
        </Spinner>
      )}

      {!isLoading && (
        <List>
          <Stack space={6}>
            {fetchedData.map(item => (
              <ScraperItem key={item.id} item={item} />
            ))}
          </Stack>
        </List>
      )}
    </Container>
  );
};

export default Scraper;
