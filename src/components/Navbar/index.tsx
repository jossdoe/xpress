import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FirebaseContext } from 'context/FirebaseContext';
import { MetaContext } from 'context/MetaContext';
import {
  Header,
  Logo,
  Menu,
  Item,
  Actions,
  SubHeader,
  VisibilitySwitch
} from './styles';
import { ReactComponent as NavbarLogoSVG } from 'assets/navbarlogo.svg';
import { FiSettings, FiTrash2, FiX } from 'react-icons/fi';

const Navbar = () => {
  const { lists, viewState } = useContext(MetaContext);
  const { isLoggedIn, logOut, deleteList } = useContext(FirebaseContext);

  const [isSubHeaderVisible, setIsSubHeaderVisible] = useState<boolean>(false);
  const [valueDeleteMenu, setValueDeleteMenu] = useState<string>('HAZ');
  const [valueDeleteMode, setValueDeleteMode] = useState<string>('social');
  const [activeRoute, setActiveRoute] = useState(window.location.pathname);

  const updateActiveRoute = () => {
    setActiveRoute(window.location.pathname);
  };

  if (isLoggedIn)
    return (
      <>
        <Header>
          <Logo>
            <NavbarLogoSVG />
          </Logo>
          <Menu onClick={() => updateActiveRoute()}>
            <Link to="/turbos">
              <Item
                active={
                  activeRoute === '/turbos' ||
                  activeRoute === '/' ||
                  activeRoute === '/login'
                }
              >
                Turbos
              </Item>
            </Link>
            <Link to="/frontpages">
              <Item active={activeRoute === '/frontpages'}>Frontpages</Item>
            </Link>
            <Link to="/social">
              <Item active={activeRoute === '/social'}>Social</Item>
            </Link>
          </Menu>
          <Actions>
            <button onClick={() => setIsSubHeaderVisible(!isSubHeaderVisible)}>
              <FiSettings />
            </button>
            <button onClick={() => logOut()}>Sign Out</button>
          </Actions>
        </Header>
        <SubHeader visible={isSubHeaderVisible}>
          <section>
            Toggle:
            {lists.map((list, index) => (
              <VisibilitySwitch
                key={index}
                active={viewState.isVisible[list.title]}
                onClick={() =>
                  viewState.setVisibility(
                    list.title,
                    !viewState.isVisible[list.title]
                  )
                }
              >
                {list.title}
              </VisibilitySwitch>
            ))}
          </section>
          <section>
            Trash:
            <select onChange={e => setValueDeleteMode(e.target.value)}>
              <option value="social">Social</option>
              <option value="front">Frontpages</option>
              <option value="turbo">Turbos</option>
            </select>
            <select onChange={e => setValueDeleteMenu(e.target.value)}>
              {lists.map((list, index) => (
                <option key={index} value={list.title}>
                  {list.title}
                </option>
              ))}
            </select>
            <button
              onClick={() => deleteList(valueDeleteMenu, valueDeleteMode)}
            >
              <FiTrash2 />
            </button>
            <span onClick={() => setIsSubHeaderVisible(false)}>
              <FiX />
            </span>
          </section>
        </SubHeader>
      </>
    );

  return null;
};

export default Navbar;
