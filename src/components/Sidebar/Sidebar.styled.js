import styled from 'styled-components';

export const NavLeft = styled.aside`
  background-color: #eaeaea;
  display: flex;
  flex-direction: column;
  margin-left: ${(props) => (props.isExpanded ? '0' : '-300px')};
  overflow: hidden;
  position: relative;
  transition: all 0.5s;
  width: 350px;
`;

export const Header = styled.header`
  height: 50px;
  overflow: hidden;
  position: relative;

  ul {
    font-size: 0.8rem;
    font-weight: bold;
    line-height: 50px;
    list-style: none;
    opacity: ${(props) => (props.isExpanded ? '1' : '0')};
    padding: 0 50px 0 10px;
    transition: all 0.5s;
    user-select: none;

    li {
      cursor: pointer;
      display: inline-block;
      padding: 0 10px;
    }

    .active {
      color: #ff4136;
    }
  }
`;

export const Hamburger = styled.div`
  background-color: #ccc;
  border-radius: 3px;
  color: #777;
  cursor: pointer;
  height: 30px;
  font-size: 1rem;
  line-height: 30px;
  position: absolute;
  right: 10px;
  text-align: center;
  top: 10px;
  width: 30px;
`;

export const Content = styled.main`
  flex: 1;
  opacity: ${(props) => (props.isExpanded ? '1' : '0')};
  overflow: hidden;
  transition: all 0.5s;
`;
