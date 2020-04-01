import styled from 'styled-components';

export const RadioGroupItem = styled.section`
  display: flex;
`;

export const RadioInput = styled.input`
  display: none;

  &:checked + label {
    background: #333333;
    color: #fafafa;

    &:before {
      border: solid 4px #ff4136;
      background: #fafafa;
    }
  }
`;

export const RadioLabel = styled.label`
  flex: 1;
  font-size: 0.9rem;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  text-transform: capitalize;

  &::before {
    box-sizing: border-box;
    content: '';
    display: inline-block;
    height: 0.8rem;
    width: 0.8rem;
    background: #333;
    margin-right: 15px;
    border-radius: 50%;
    transition: all 0.1s;
    position: relative;
    top: 1px;
  }

  &:hover {
    background: #ddd;
  }

  &:active {
    background-color: #777;
    color: #fafafa;
  }
`;
