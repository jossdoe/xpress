import styled from 'styled-components';

export const Item = styled.li`
  background-color: #fdfdfd;
  box-shadow: 1px 2px 3px #0000000a, 1px 2px 9px #0000000a;
  border-radius: 5px;
  line-height: 1.5;
  padding: 10px;
  position: relative;
  overflow: hidden;

  &:hover > aside {
    opacity: 0.7;
  }
`;

export const Headline = styled.div`
  font-weight: 600;
`;

export const Topic = styled.div`
  font-size: 0.9rem;
  opacity: 0.7;
`;

export const Location = styled.div`
  font-size: 0.9rem;
  opacity: 0.7;
`;

export const StatusStack = styled.div`
  display: flex;
  font-size: 0.7rem;
  margin: 0 -10px -10px;
`;

export const StatusItem = styled.div<{ done: boolean }>`
  background-color: ${props => (props.done ? '#333' : 'transparent')};
  color: ${props => (props.done ? '#fafafa' : 'inherit')};
  flex: 1;
  padding: 5px 10px;
  cursor: pointer;
  user-select: none;
  transition: all 0.1s;

  span {
    opacity: 0.7;
    transition: all 0.1s;
  }

  &:hover {
    background-color: ${props => (props.done ? '#444' : '#f7f7f7')};

    span {
      opacity: 1;
    }
  }

  &:active {
    background-color: ${props => (props.done ? '#444' : '#f1f1f1')};

    span {
      opacity: ${props => (props.done ? '0.5' : '1')};
    }
  }
`;

export const EditButton = styled.aside`
  position: absolute;
  top: 12px;
  right: 14px;
  cursor: pointer;
  opacity: 0;
  transition: all 0.1s;

  &:hover {
    opacity: 1 !important;
  }

  &:active {
    opacity: 0.5 !important;
  }
`;
