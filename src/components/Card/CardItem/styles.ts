import styled from 'styled-components';

export const Item = styled.li<{ isPosted: boolean }>`
  background-color: ${props => (props.isPosted ? 'transparent' : '#fdfdfd')};
  box-shadow: ${props =>
    props.isPosted ? 'none' : '1px 2px 3px #0000000a, 1px 2px 9px #0000000a'};
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 10px 10px 10px 10px;
  transition: all 0.3s;
`;

export const ActionButton = styled.div<{ isPosted: boolean }>`
  width: 30px;
  cursor: pointer;
  opacity: ${props => (props.isPosted ? '0.4' : '1')};
  transition: all 0.1s;

  svg {
    position: relative;
    top: -2px;
  }

  &:hover {
    opacity: ${props => (props.isPosted ? '1' : '0.4')};
  }

  &:active {
    opacity: 0.6;
  }
`;

export const Description = styled.div<{ isPosted: boolean }>`
  flex: 1;
  font-size: 0.8rem;
  opacity: ${props => (props.isPosted ? '0.4' : '1')};
  transition: all 0.1s;

  &:hover {
    text-decoration: underline;
  }

  &:active {
    color: #ff4136;
  }
`;
