import styled from 'styled-components';

export const Header = styled.nav`
  background-color: #fdfdfd;
  border-top: solid 6px #ff4136;
  box-shadow: 0 0 4px #00000019, 0 0 12px #00000019;
  display: flex;
  height: 56px;
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
  background-color: ${props => (props.active ? '#ff4136' : 'inherit')};
  color: ${props => (props.active ? '#fdfdfd' : '#999999')};
  display: inline-block;
  font-weight: 600;
  letter-spacing: 0.04rem;
  padding: 0 20px;
  text-transform: uppercase;

  :hover {
    color: ${props => (props.active ? '#fdfdfd' : '#ff4136')};
  }
`;

export const Actions = styled.div`
  text-align: right;
  padding-right: 20px;
  width: 200px;

  button {
    background-color: #ff4136;
    border: none;
    border-radius: 3px;
    color: #fdfdfd;
    cursor: pointer;
    font-size: 0.8rem;
    font-weight: 600;
    padding: 10px;
    margin-left: 7px;
  }
`;

export const SubHeader = styled.div<{ visible: boolean }>`
  background-color: #ccc;
  color: #666;
  display: flex;
  height: ${props => (props.visible ? '45px' : '0px')};
  line-height: 45px;
  overflow: hidden;
  padding: 0 20px;
  user-select: none;
  transition: all 0.5s;

  section {
    flex: 1;

    :last-child {
      text-align: right;

      select {
        background-color: #ccc;
        border: solid 2px #666;
        border-radius: 3px;
        color: #666;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 600;
        margin-left: 15px;
        padding: 2px 10px;
      }

      button {
        background-color: #666;
        border: none;
        border-radius: 50%;
        color: #ccc;
        cursor: pointer;
        font-size: 0.7rem;
        font-weight: 600;
        padding: 8px 10px;
        margin: 0 10px;
        text-transform: uppercase;
      }

      span {
        cursor: pointer;
        display: inline-block;
        text-align: center;
        width: 30px;
      }
    }
  }
`;

export const VisibilitySwitch = styled.button<{ active: boolean }>`
  background-color: ${props => (props.active ? '#666' : 'inherit')};
  border: none;
  border-radius: 6px;
  color: ${props => (props.active ? '#ccc' : '#666')};
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 600;
  font-size: 0.6rem;
  margin-left: 15px;
  padding: 4px 9px;
`;
