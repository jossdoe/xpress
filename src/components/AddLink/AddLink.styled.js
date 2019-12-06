import styled from 'styled-components';

export const Form = styled.div`
  padding: 20px;
`;

export const FieldSection = styled.div`
  margin-bottom: 30px;

  input[type='text'] {
    border: none;
    border-radius: 3px;
    box-shadow: 1px 2px 3px #0000000a, 1px 2px 9px #0000000a;
    display: block;
    font-family: Roboto, sans-serif;
    height: 35px;
    line-height: 35px;
    margin-bottom: 10px;
    padding: 0 12px;
    text-align: center;
    width: 100%;
  }
`;

export const RadioSection = styled.div`
  background-color: #ccc;
  border-radius: 3px;
  color: #777;
  display: flex;
  font-size: 0.7rem;
  font-weight: bold;
  height: 35px;
  line-height: 35px;
  margin-bottom: 30px;
  overflow: hidden;
  text-transform: uppercase;
  user-select: none;
  width: 100%;

  label {
    cursor: pointer;
    flex: 1;
    text-align: center;
  }

  input[type='radio'] {
    display: none;
  }

  input[type='radio']:checked + label {
    background-color: #ff4136;
    color: #fdfdfd;
  }
`;

export const CheckboxSection = styled.div`
  background-color: #ddd;
  color: #999;
  margin: 0 -20px 30px;
  padding: 15px;
  text-align: center;
  user-select: none;

  h4 {
    font-size: 0.8rem;
    margin-bottom: 15px;
    text-transform: uppercase;
  }

  label {
    background-color: #fdfdfd;
    border: solid 2px #fdfdfd;
    border-radius: 50%;
    color: #aaa;
    cursor: pointer;
    display: inline-block;
    font-size: 0.8rem;
    font-weight: bold;
    height: 44px;
    line-height: 40px;
    margin-right: 5px;
    overflow: hidden;
    text-align: center;
    white-space: nowrap;
    width: 44px;

    :last-child {
      margin-right: 0;
    }
  }

  input[type='checkbox'] {
    display: none;
  }

  input[type='checkbox']:checked + label {
    background-color: #ff4136;
    color: #fdfdfd;
  }
`;

export const SubmitSection = styled.div`
  text-align: center;

  button {
    border-radius: 3px;
    box-shadow: 1px 2px 3px #0000000a, 1px 2px 9px #0000000a;
    cursor: pointer;
    font-family: Roboto, sans-serif;
    font-size: 0.8rem;
    font-weight: bold;
    height: 45px;
    line-height: 39px;
    margin: 0 10px;
    padding: 0 25px;
    text-transform: uppercase;
  }

  .submit {
    background-color: #ff4136;
    border: solid 2px #ff4136;
    color: #fdfdfd;
  }

  .reset {
    background-color: #fdfdfd;
    border: solid 2px #ff4136;
    color: #ff4136;
  }
`;
