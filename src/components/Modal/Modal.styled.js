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
  border-radius: 3px;
  box-shadow: 1px 2px 5px #00000022, 1px 2px 15px #00000022;
  padding: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 550px;
  min-height: 400px;
`;

export const CloseButton = styled.div`
  position: absolute;
  top: -6px;
  right: -5px;
  font-size: 1.5rem;
  cursor: pointer;
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

export const RadioSection = styled.div`
  background-color: #ccc;
  border-radius: 3px;
  color: #777;
  display: flex;
  font-size: 0.7rem;
  font-weight: 600;
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
    font-weight: 600;
  }

  label {
    background-color: #fdfdfd;
    border: solid 2px #fdfdfd;
    border-radius: 50%;
    color: #aaa;
    cursor: pointer;
    display: inline-block;
    font-size: 0.7rem;
    font-weight: 400;
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
  margin-bottom: 10px;

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
    vertical-align: top;
  }

  .submit {
    background-color: #ff4136;
    border: solid 2px #ff4136;
    color: #fdfdfd;
  }

  .cancel {
    background-color: #fdfdfd;
    border: solid 2px #ff4136;
    color: #ff4136;
  }

  .delete {
    background-color: #fdfdfd;
    border: solid 2px #ff4136;
    color: #ff4136;
    position: relative;
    margin-left: 50px;

    span {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      display: inline-block;
      width: 30px;
      height: 30px;
      line-height: 30px;
      background-color: #ff4136;
      color: #fdfdfd;
      border-radius: 50%;
    }
  }
`;
