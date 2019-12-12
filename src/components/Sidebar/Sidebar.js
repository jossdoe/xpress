import React, { useState, useContext } from 'react';
import { AddLink, AddTurbo, Scraper } from 'components';
import { NavLeft, Header, Content, Hamburger } from './Sidebar.styled';
import { MetaContext } from 'context';

const Sidebar = () => {
  const { settings } = useContext(MetaContext);
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeView, setActiveView] = useState('scraper');

  return (
    <NavLeft isExpanded={isExpanded}>
      <Header isExpanded={isExpanded}>
        <ul>
          <li
            className={activeView === 'addTurbo' ? 'active' : null}
            onClick={() => setActiveView('addTurbo')}
          >
            Add Turbo
          </li>
          <li
            className={activeView === 'addLink' ? 'active' : null}
            onClick={() => setActiveView('addLink')}
          >
            Add Link
          </li>
          {settings.enableScraper && (
            <li
              className={activeView === 'scraper' ? 'active' : null}
              onClick={() => setActiveView('scraper')}
            >
              Scraper
            </li>
          )}
        </ul>
        <Hamburger onClick={() => setIsExpanded(!isExpanded)}>
          <i className={isExpanded ? 'fas fa-angle-left' : 'fas fa-bars'} />
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
