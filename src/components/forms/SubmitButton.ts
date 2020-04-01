import styled from 'styled-components';

const SubmitButton = styled.button`
  background-color: #ff4136;
  border: solid 2px #ff4136;
  border-radius: 6px;
  box-shadow: 1px 2px 3px #00000011, 1px 2px 9px #00000011;
  color: #fdfdfd;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 600;
  padding: 0.7rem 1.4rem;
  transition: transform 0.1s;

  &:hover {
    background-color: #e33e34;
    border: solid 2px #e33e34;
  }

  &:active {
    background-color: #c4342b;
    border: solid 2px #c4342b;
    transform: scale(0.95);
  }

  &:focus {
    box-shadow: inset 0 0 0 1px #fdfdfd;
  }
`;

export default SubmitButton;
