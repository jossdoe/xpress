import styled from 'styled-components';

const TextInput = styled.input<{ variant: 'light' | 'dark' }>`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  border: none;
  border-radius: 4px;
  background-color: ${props =>
    props.variant === 'light' ? '#e3e3e3' : '#d3d3d3'};
  box-shadow: inset 1px 2px 3px #0000000a, inset 1px 2px 9px #0000000a;
  color: #333;
  padding: 0.7rem 1rem;
  text-align: left;
  width: 100%;
  font-size: 0.9rem;

  &:hover {
    box-shadow: inset 1px 2px 3px #00000011, inset 1px 2px 9px #00000011;
  }

  &:focus {
    background-color: #333;
    color: #f7f7f7;
  }
`;

export default TextInput;
