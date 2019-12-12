import styled from 'styled-components';

export const Item = styled.li`
  background-color: #fdfdfd;
  border-left: solid 6px ${(props) => props.borderLeft};
  border-radius: 3px;
  box-shadow: 1px 2px 3px #00000011, 1px 2px 5px #00000011;
  margin-bottom: 10px;
  padding: 10px;
  position: relative;
`;

export const Time = styled.div`
  background-color: #333;
  border-radius: 3px;
  color: #fdfdfd;
  display: inline-block;
  font-size: 0.7rem;
  margin-right: 7px;
  padding: 3px 6px;
`;

export const Location = styled.div`
  background-color: ${(props) => props.bgColor};
  border-radius: 3px;
  color: ${(props) => props.fontColor};
  display: inline-block;
  font-size: 0.7rem;
  padding: 3px 6px;
`;

export const Kicker = styled.div`
  font-size: 0.8rem;
  font-weight: 600;
  margin-top: 7px;
`;

export const Headline = styled.div`
  margin-top: 5px;
  font-size: 0.9rem;
`;

export const AddButton = styled.button`
  background-color: #777;
  border: none;
  border-radius: 3px;
  color: #ccc;
  cursor: pointer;
  padding: 3px 4px;
  position: absolute;
  top: 10px;
  right: 10px;
`;
