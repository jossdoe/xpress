import styled from 'styled-components';

export const Item = styled.li<{ borderLeft: string }>`
  background-color: #fdfdfd;
  border-left: solid 6px ${props => props.borderLeft};
  border-radius: 3px;
  box-shadow: 1px 2px 3px #0000000a, 1px 2px 9px #0000000a;
  padding: 10px;
  position: relative;
  transition: all 0.2s;

  &:hover {
    box-shadow: 1px 2px 3px #0000001a, 1px 2px 9px #0000001a;
  }
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

export const Location = styled.div<{ bgColor: string; fontColor: string }>`
  background-color: ${props => props.bgColor};
  border-radius: 3px;
  color: ${props => props.fontColor};
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
  border: none;
  background: transparent;
  color: #bbb;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 2rem;

  &:hover {
    color: #999;
  }

  &:active {
    color: #777;
  }
`;
