import React, { useState, useContext } from 'react';
import { MetaContext } from 'context/MetaContext';
import AddLink from 'components/Sidebar/AddLink';
import AddTurbo from 'components/Sidebar/AddTurbo';
import Scraper from 'components/Sidebar/Scraper';
import { NavLeft, Header, Content, Hamburger } from './styles';
import { FiPlusCircle, FiChevronLeft } from 'react-icons/fi';

const Sidebar = () => {
  const { settings } = useContext(MetaContext);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [activeView, setActiveView] = useState<
    'addTurbo' | 'addLink' | 'scraper'
  >('addTurbo');

  return (
    <NavLeft isExpanded={isExpanded}>
      <Header isExpanded={isExpanded}>
        <ul>
          <li
            className={activeView === 'addTurbo' ? 'active' : undefined}
            onClick={() => setActiveView('addTurbo')}
          >
            Add Turbo
          </li>
          <li
            className={activeView === 'addLink' ? 'active' : undefined}
            onClick={() => setActiveView('addLink')}
          >
            Add Link
          </li>
          {settings.enableScraper && (
            <li
              className={activeView === 'scraper' ? 'active' : undefined}
              onClick={() => setActiveView('scraper')}
            >
              Scraper
            </li>
          )}
        </ul>
        <Hamburger onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? (
            <FiChevronLeft style={{ marginTop: '6px' }} />
          ) : (
            <FiPlusCircle style={{ marginTop: '6px' }} />
          )}
        </Hamburger>
      </Header>
      <Content isExpanded={isExpanded}>
        {activeView === 'scraper' && <Scraper />}
        {activeView === 'addLink' && <AddLink />}
        {activeView === 'addTurbo' && <AddTurbo />}
      </Content>
    </NavLeft>
  );
};

export default Sidebar;
