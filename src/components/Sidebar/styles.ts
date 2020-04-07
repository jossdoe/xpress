import styled from 'styled-components';

export const NavLeft = styled.aside<{ isExpanded: boolean }>`
  background-color: #eaeaea;
  display: flex;
  flex-direction: column;
  margin-left: ${(props) => (props.isExpanded ? '0' : '-300px')};
  overflow: hidden;
  position: relative;
  transition: all 0.5s;
  width: 350px;
`;

export const Header = styled.header<{ isExpanded: boolean }>`
  height: 50px;
  position: relative;

  ul {
    font-size: 0.8rem;
    font-weight: bold;
    list-style: none;
    opacity: ${(props) => (props.isExpanded ? '1' : '0')};
    padding: 10px 50px 10px 10px;
    transition: all 0.5s;
    user-select: none;

    li {
      cursor: pointer;
      display: inline-block;
      padding: 0 10px;
      height: 30px;
      line-height: 30px;
      background-color: #ccc;
      color: #444;
      stransition: all 0.1s;

      &:first-of-type {
        border-radius: 4px 0 0 4px;
      }

      &:last-of-type {
        border-radius: 0 4px 4px 0;
      }

      &:hover:not(.active) {
        color: #333;
        background-color: #c4c4c4;
      }

      &:active:not(.active) {
        background-color: #bbb;
      }
    }

    .active {
      background-color: #ff4136;
      color: #fafafa;
    }
  }
`;

export const Hamburger = styled.div`
  background-color: #333;
  border-radius: 6px;
  color: #fafafa;
  cursor: pointer;
  height: 30px;
  font-size: 1.2rem;
  line-height: 30px;
  position: absolute;
  right: 10px;
  text-align: center;
  top: 10px;
  width: 30px;
  transition: all 0.1s;

  &:hover {
    background-color: #444;
  }

  &:active {
    background-color: #222;
    transform: scale(0.95);
  }

  &:focus {
    box-shadow: inset 0 0 0 1px #fdfdfd;
  }
`;

export const Content = styled.main<{ isExpanded: boolean }>`
  flex: 1;
  opacity: ${(props) => (props.isExpanded ? '1' : '0')};
  overflow: auto;
  transition: all 0.5s;
`;
