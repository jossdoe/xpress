import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FirebaseContext } from 'context/FirebaseContext';
import { MetaContext } from 'context/MetaContext';
import {
  Header,
  Logo,
  Menu,
  Item,
  SettingsButton,
  SignOutButton,
  Settings,
  VisibilityItem,
  VisibilityLabel,
  VisibilitySwitch
} from './styles';
import SubmitButton from 'components/forms/SubmitButton';
import Stack from 'components/layout/Stack';
import { ReactComponent as NavbarLogoSVG } from 'assets/navbarlogo.svg';
import { FiSettings, FiEye, FiEyeOff } from 'react-icons/fi';

const Navbar = () => {
  const { lists, viewState } = useContext(MetaContext);
  const { isLoggedIn, logOut, deleteList } = useContext(FirebaseContext);

  const [isVisibleSettings, setIsVisibleSettings] = useState<boolean>(false);
  const [valueDeleteMenu, setValueDeleteMenu] = useState<string>('HAZ');
  const [valueDeleteMode, setValueDeleteMode] = useState<string>('social');

  if (isLoggedIn)
    return (
      <>
        <Header>
          <Logo>
            <NavbarLogoSVG />
          </Logo>
          <Menu>
            <Item>
              <NavLink to="/turbos">Turbos</NavLink>
            </Item>
            <Item>
              <NavLink to="/frontpages">Frontpages</NavLink>
            </Item>
            <Item>
              <NavLink to="/social">Social</NavLink>
            </Item>
          </Menu>
          <Stack spaceRight={5} style={{ marginRight: 15 }}>
            <SettingsButton
              onClick={() => setIsVisibleSettings(!isVisibleSettings)}
            >
              <FiSettings />
            </SettingsButton>
            <SignOutButton onClick={() => logOut()}>Sign Out</SignOutButton>
          </Stack>
        </Header>
        <Settings isVisible={isVisibleSettings}>
          <Stack space={6} marginBottom={20}>
            {lists.map((list, index) => (
              <VisibilityItem key={index}>
                <VisibilityLabel active={viewState.isVisible[list.title]}>
                  {list.title}
                </VisibilityLabel>
                <VisibilitySwitch
                  active={viewState.isVisible[list.title]}
                  onClick={() =>
                    viewState.setVisibility(
                      list.title,
                      !viewState.isVisible[list.title]
                    )
                  }
                >
                  {viewState.isVisible[list.title] ? <FiEye /> : <FiEyeOff />}
                </VisibilitySwitch>
              </VisibilityItem>
            ))}
          </Stack>
          <Stack space={6} marginBottom={6}>
            <select onChange={(e) => setValueDeleteMode(e.target.value)}>
              <option value="social">Social</option>
              <option value="front">Frontpages</option>
              <option value="turbo">Turbos</option>
            </select>
            <select onChange={(e) => setValueDeleteMenu(e.target.value)}>
              {lists.map((list, index) => (
                <option key={index} value={list.title}>
                  {list.title}
                </option>
              ))}
            </select>
          </Stack>
          <Stack style={{ textAlign: 'center' }}>
            <SubmitButton
              onClick={() => deleteList(valueDeleteMenu, valueDeleteMode)}
            >
              Delete
            </SubmitButton>
          </Stack>
        </Settings>
      </>
    );

  return null;
};

export default Navbar;
