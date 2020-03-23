import styled from 'styled-components';

export const Form = styled.div`
  padding: 20px;
`;

export const RadioSection = styled.div`
  margin-bottom: 30px;
  text-align: center;
  user-select: none;
  background-color: #ccc;
  border-radius: 3px;
  color: #777;
  overflow: hidden;
  display: flex;

  label {
    border: none;
    cursor: pointer;
    font-size: 0.8rem;
    font-weight: 600;
    line-height: 35px;
    overflow: hidden;
    text-align: center;
    white-space: nowrap;
    flex: 1;
  }

  input[type='radio'] {
    display: none;
  }

  input[type='radio']:checked + label {
    background-color: #ff4136;
    color: #fdfdfd;
  }
`;

export const FieldSection = styled.div`
  margin-bottom: 30px;

  input[type='text'] {
    border: none;
    border-radius: 3px;
    box-shadow: 1px 2px 3px #0000000a, 1px 2px 9px #0000000a;
    display: block;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    height: 35px;
    line-height: 35px;
    margin-bottom: 10px;
    padding: 0 12px;
    text-align: center;
    width: 100%;
  }
`;

export const QuestionSection = styled.ul`
  font-size: 0.9rem;
  margin-bottom: 30px;

  li {
    display: flex;
    height: 30px;
    line-height: 30px;
    margin-bottom: 5px;

    div {
      flex: 1;
    }

    aside {
      text-align: center;
      width: 30px;

      label {
        background-color: #fdfdfd;
        border: solid 2px #fdfdfd;
        border-radius: 50%;
        cursor: pointer;
        color: #ff4136;
        display: inline-block;
        height: 100%;
        line-height: 26px;
        width: 100%;
      }

      input[type='checkbox'] {
        display: none;

        :checked + label {
          background-color: #ff4136;
          color: #fdfdfd;
        }
      }
    }
  }
`;

export const SubmitSection = styled.div`
  text-align: center;

  button {
    border-radius: 3px;
    box-shadow: 1px 2px 3px #0000000a, 1px 2px 9px #0000000a;
    cursor: pointer;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 0.8rem;
    font-weight: 600;
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
