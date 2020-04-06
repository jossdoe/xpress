import styled from 'styled-components';

export const Header = styled.nav`
  background-color: #fdfdfd;
  border-top: solid 4px #ff4136;
  box-shadow: 0 0 4px #00000019, 0 0 12px #00000019;
  display: flex;
  height: 54px;
  line-height: 50px;
  overflow: hidden;
  user-select: none;
`;

export const Logo = styled.header`
  text-align: left;
  width: 200px;

  .navbarlogo-svg {
    height: 100%;
  }
`;

export const Menu = styled.ul`
  flex: 1;
  list-style-type: none;
  text-align: center;
`;

export const Item = styled.li<{ active: boolean }>`
  color: ${(props) => (props.active ? '#ff4136' : '#999999')};
  display: inline-block;
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 0.04rem;
  padding: 0 20px;
  text-transform: uppercase;
  position: relative;
  opacity: 1;
  transition: all 0.1s;

  &::before {
    content: '';
    display: inline-block;
    top: 10px;
    bottom: 12px;
    left: ${(props) => (props.active ? '20px' : '52%')};
    right: ${(props) => (props.active ? '20px' : '52%')};
    position: absolute;
    background-color: transparent;
    border-bottom: solid 2px #ff4136;
    transition: all 0.3s;
  }

  &:hover {
    color: #ff4136;
  }

  &:active {
    opacity: 0.8;
  }
`;

export const SettingsButton = styled.button`
  background-color: #333;
  border: solid 2px #333;
  border-radius: 6px;
  box-shadow: 1px 2px 3px #00000011, 1px 2px 9px #00000011;
  color: #fafafa;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 600;
  padding: 0 0.5rem;
  font-size: 1rem;
  transition: transform 0.1s;
  vertical-align: middle;
  line-height: 35px;
  height: 35px;

  &:hover {
    background-color: #444
    border: solid 2px #444;
  }

  &:active {
    background-color: #222;
    border: solid 2px #222;
    transform: scale(0.95);
  }

  &:focus {
    box-shadow: inset 0 0 0 1px #fdfdfd;
  }
`;

export const SignOutButton = styled.button`
  background-color: #ff4136;
  border: solid 2px #ff4136;
  border-radius: 6px;
  box-shadow: 1px 2px 3px #00000011, 1px 2px 9px #00000011;
  color: #fdfdfd;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 600;
  font-size: 0.7rem;
  padding: 0 1.4rem;
  transition: transform 0.1s;
  vertical-align: middle;
  height: 35px;

  &:hover {
    background-color: #e33e34;
    border: solid 2px #e33e34;
  }

  &:active {
    background-color: #c4342b;
    border: solid 2px #c4342b;
    transform: scale(0.95);
  }

  &:focus {
    box-shadow: inset 0 0 0 1px #fdfdfd;
  }
`;

export const Settings = styled.aside<{ isVisible: boolean }>`
  position: fixed;
  background-color: #222;
  color: #fafafa;
  box-shadow: 1px 2px 6px #0000001a, 1px 2px 18px #0000001a;
  padding: 20px;
  right: 20px;
  top: 74px;
  z-index: 100;
  opacity: ${(props) => (props.isVisible ? '1' : '0')};
  border-radius: 5px;
  transition: all 0.2s;

  &::after {
    content: '';
    display: inline-block;
    background-color: #222;
    height: 20px;
    width: 20px;
    position: absolute;
    top: -10px;
    right: 109px;
    transform: rotate(45deg);
  }

  select {
    border: none;
    width: 100%;
    min-width: 90px;
    height: 30px;
    background-color: #444;
    color: #fff;
    font-size: 0.9rem;
    font-family: inherit;
    padding: 0.4rem;
    position: relative;
    border-radius: 5px;
  }
`;

export const VisibilityItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
`;

export const VisibilityLabel = styled.div<{ active: boolean }>`
  flex: 1;
`;

export const VisibilitySwitch = styled.div<{ active: boolean }>`
  width: 20px;
  text-align: right;
  cursor: pointer;
  opacity: ${(props) => (props.active ? '1' : '0.6')};
  transition: all 0.1s;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
  }
`;
