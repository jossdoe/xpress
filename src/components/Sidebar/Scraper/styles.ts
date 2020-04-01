import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  padding: 20px 0 0 20px;
  position: relative;
`;

export const SourceButton = styled.div`
  background-color: #fafafa;
  color: #333;
  box-shadow: 1px 2px 3px #0000000a, 1px 2px 9px #0000000a;
  border-radius: 3px;
  cursor: pointer;
  display: inline-block;
  margin-right: 10px;
  padding: 2px 5px;
  height: 2rem;
  line-height: 2rem;
  width: 2rem;
  font-size: 1.3rem;
  text-align: center;

  &:hover {
    background-color: #f7f7f7;
    box-shadow: 1px 2px 3px #0000001a, 1px 2px 9px #0000001a;
  }

  &:active {
    box-shadow: 1px 2px 3px #0000000a, 1px 2px 9px #0000000a;
    background-color: #f4f4f4;
  }
`;

export const Settings = styled.div<{ isVisible: boolean }>`
  background-color: #00000066;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  opacity: ${props => (props.isVisible ? '1' : '0')};
  pointer-events: ${props => (props.isVisible ? 'auto' : 'none')};

  ul {
    display: inline-block;
    font-size: 0.9rem;
    list-style: none;

    li {
      border-radius: 3px;
      cursor: pointer;

      :hover {
        color: #777;
      }
    }
  }
`;

export const ExitSettingsButton = styled.div`
  font-size: 1.6rem;
  cursor: pointer;
  color: #bbb;

  &:hover {
    color: #999;
  }

  &:active {
    color: #777;
  }
`;

export const List = styled.ul`
  height: calc(100% - 70px);
  list-style: none;
  overflow: auto;
  padding: 10px 40px 20px 20px;
`;

export const Spinner = styled.div`
  font-size: 64px;
  text-align: center;
  width: 32px;
  height: 120px;

  span {
    position: relative;
  }
  span:before,
  span:after {
    content: '';
    display: block;
    position: relative;
  }
  span:before {
    animation: spinner 2.5s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;
    background-color: #ff4136;
    height: 0.5em;
    width: 0.5em;
  }
  span:after {
    animation: shadow 2.5s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;
    background-color: #ccc;
    border-radius: 50%;
    bottom: -0.2em;
    height: 0.1em;
  }

  @keyframes spinner {
    50% {
      border-radius: 50%;
      transform: scale(0.5) rotate(360deg);
    }
    100% {
      transform: scale(1) rotate(720deg);
    }
  }
  @keyframes shadow {
    50% {
      background-color: #ddd;
      transform: scale(0.5);
    }
  }
`;
