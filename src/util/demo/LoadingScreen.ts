import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingScreen = styled.div<{ active: boolean }>`
  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fdfdfd;
  color: #333;
  opacity: ${(props) => (props.active ? '1' : '0')};
  pointer-events: ${(props) => (props.active ? 'auto' : 'none')};
  font-size: 0.8rem;
  transition: all 0.3s;
  &::before {
    content: 'Preparing Demo';
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200px;
    text-align: center;
    transform: translate(-50%, -50%);
  }
  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: calc(50% - 50px);
    left: calc(50% - 10px);
    background-color: transparent;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    border-top: solid 2px #333;
    border-left: solid 2px #ddd;
    border-right: solid 2px #ddd;
    border-bottom: solid 2px #ddd;
    animation: ${rotate} 0.6s linear infinite;
  }
`;
