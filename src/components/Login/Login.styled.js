import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 500px;
  margin: 50px auto;
  width: 280px;

  header {
    height: 250px;
    position: relative;

    section {
      left: 50%;
      position: absolute;
      text-align: center;
      top: 50%;
      transform: translate(-50%, -50%);

      img {
        border: solid 4px #fff;
        border-radius: 50%;
        box-shadow: 1px 2px 3px #0000000a, 1px 2px 9px #0000000a;
        display: block;
      }

      span {
        color: #999;
        display: inline-block;
        font-family: 'Merriweather', serif;
        font-size: 1.1rem;
        font-weight: bold;
        margin-top: 18px;
      }
    }
  }

  button {
    background-color: #ff4136;
    border: none;
    border-radius: 6px;
    box-shadow: 1px 2px 3px #0000000a, 1px 2px 9px #0000000a;
    color: #fdfdfd;
    cursor: pointer;
    font-family: Roboto, sans-serif;
    font-weight: bold;
    height: 45px;
    margin-top: 35px;
    width: 100%;
  }
`;

export const Form = styled.div`
  background-color: grey;
  border: solid 1px #ccc;
  border-radius: 6px;
  box-shadow: 1px 2px 3px #0000000a, 1px 2px 9px #0000000a;
  overflow: hidden;

  input {
    border: none;
    box-shadow: inset 1px 2px 3px #0000000a, inset 1px 2px 9px #0000000a;
    color: #777;
    font-family: Roboto, sans-serif;
    height: 45px;
    margin: 0;
    padding: 0 10px;
    text-align: center;
    width: 100%;

    :last-child {
      border-top: solid 1px #ccc;
    }
  }
`;
