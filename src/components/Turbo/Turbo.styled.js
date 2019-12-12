import styled from 'styled-components';

export const Item = styled.li`
  background-color: #f2f2f2;
  border-radius: 5px;
  line-height: 1.5;
  margin-bottom: 10px;
  padding: 10px;
  position: relative;
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

export const Button = styled.div`
  background-color: ${(props) => (props.done ? '#00E676' : '#fdfdfd')};
  border: ${(props) =>
    props.done ? 'solid 2px #00E676' : 'solid 2px #ff4136'};
  border-radius: 3px;
  color: ${(props) => (props.done ? '#666' : '#ff4136')};
  cursor: pointer;
  display: inline-block;
  font-size: 0.6rem;
  margin-top: 5px;
  margin-right: 5px;
  padding: 3px 5px;
  user-select: none;
`;

export const EditButton = styled.div`
  position: absolute;
  top: 9px;
  right: 13px;
  cursor: pointer;
`;
