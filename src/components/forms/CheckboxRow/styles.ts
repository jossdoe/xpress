import styled from 'styled-components';

export const CheckboxInput = styled.input`
  display: none;

  &:checked + label {
    background-color: #333;
    color: #fafafa;
  }
`;

export const CheckboxLabel = styled.label`
  display: block;
  background-color: #fafafa;
  color: #333;
  box-shadow: 1px 2px 3px #0000000a, 1px 2px 9px #0000000a;
  padding: 0.6rem 0.8rem;
  border-radius: 5px;
  user-select: none;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s;

  &:hover {
    background-color: #f7f7f7;
  }

  &:active {
    background-color: #777;
    color: #fafafa;
  }
`;
