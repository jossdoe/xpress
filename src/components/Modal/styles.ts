import styled from 'styled-components';

export const Background = styled.div`
  background-color: #00000044;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Content = styled.div`
  background-color: #fdfdfd;
  border-radius: 10px;
  box-shadow: 1px 2px 5px #00000022, 1px 2px 15px #00000022;
  padding: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 550px;
  min-height: 400px;
`;

export const DeleteQuestion = styled.div`
  background-color: #fdfdfd;
  border-radius: 10px;
  box-shadow: 1px 2px 5px #00000022, 1px 2px 15px #00000022;
  padding: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  min-height: 50px;
`;

export const DeleteButton = styled.button`
  background-color: #fdfdfd;
  border: solid 2px #fdfdfd;
  border-radius: 6px;
  color: #ff4136;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 600;
  padding: 0.7rem 1.4rem;
  transition: transform 0.1s;

  &:hover {
    color: #ff4136;
    background-color: #efefef;
    border: solid 2px #efefef;
  }

  &:active {
    color: #ff4136;
    background-color: #e1e1e1;
    border: solid 2px #e1e1e1;
    transform: scale(0.95);
  }

  &:focus {
    box-shadow: inset 0 0 0 1px #333;
  }
`;

export const CancelButton = styled.button`
  background-color: #fdfdfd;
  border: solid 2px #fdfdfd;
  border-radius: 6px;
  color: #333;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 600;
  padding: 0.7rem 1.4rem;
  transition: transform 0.1s;

  &:hover {
    background-color: #efefef;
    border: solid 2px #efefef;
  }

  &:active {
    background-color: #e1e1e1;
    border: solid 2px #e1e1e1;
    transform: scale(0.95);
  }

  &:focus {
    box-shadow: inset 0 0 0 1px #333;
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  top: -2.5rem;
  right: 0px;
  font-size: 2rem;
  cursor: pointer;
  color: #111;
  transition: all 0.1s;

  &:hover {
    color: #2a2a2a;
  }

  &:active {
    color: #3a3a3a;
  }
`;
