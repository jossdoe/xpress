import styled from 'styled-components';

export const Item = styled.li`
  background-color: #f2f2f2;
  border-radius: 5px;
  display: flex;
  margin-bottom: 5px;
  opacity: ${(props) => (props.isPosted ? '0.4' : '1')};
`;

export const ActionButton = styled.div`
  font-size: 1.1rem;
  padding: 7px 9px;
  cursor: pointer;
`;

export const Description = styled.div`
  flex: 1;
  font-size: 0.9rem;
  padding: 9px;
  white-space: normal;
`;
