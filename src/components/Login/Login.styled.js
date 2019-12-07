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

export const ErrorNotice = styled.div`
  text-align: center;
  user-select: none;

  div {
    background-color: #ff0000;
    border-radius: 12px;
    color: #fff;
    height: 24px;
    line-height: 24px;
    display: inline-block;
    font-size: 0.8rem;
    margin-top: 10px;
    padding: 0 10px;

    i {
      margin-right: 8px;
    }
  }
`;

export const Spinner = styled.div`
  display: block;
  position: relative;
  width: 80px;
  height: 80px;
  margin: 20px auto;

  div {
    position: absolute;
    width: 6px;
    height: 6px;
    background: #ddd;
    border-radius: 50%;
    animation: lds-default 1.2s linear infinite;
  }

  div:nth-child(1) {
    animation-delay: 0s;
    top: 37px;
    left: 66px;
  }

  div:nth-child(2) {
    animation-delay: -0.1s;
    top: 22px;
    left: 62px;
  }

  div:nth-child(3) {
    animation-delay: -0.2s;
    top: 11px;
    left: 52px;
  }

  div:nth-child(4) {
    animation-delay: -0.3s;
    top: 7px;
    left: 37px;
  }

  div:nth-child(5) {
    animation-delay: -0.4s;
    top: 11px;
    left: 22px;
  }

  div:nth-child(6) {
    animation-delay: -0.5s;
    top: 22px;
    left: 11px;
  }

  div:nth-child(7) {
    animation-delay: -0.6s;
    top: 37px;
    left: 7px;
  }

  div:nth-child(8) {
    animation-delay: -0.7s;
    top: 52px;
    left: 11px;
  }

  div:nth-child(9) {
    animation-delay: -0.8s;
    top: 62px;
    left: 22px;
  }

  div:nth-child(10) {
    animation-delay: -0.9s;
    top: 66px;
    left: 37px;
  }

  div:nth-child(11) {
    animation-delay: -1s;
    top: 62px;
    left: 52px;
  }

  div:nth-child(12) {
    animation-delay: -1.1s;
    top: 52px;
    left: 62px;
  }

  @keyframes lds-default {
    0%,
    20%,
    80%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
  }
`;
