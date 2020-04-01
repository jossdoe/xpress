import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 250px;
  text-align: center;
  margin: 0 auto;

  .roundlogo-svg {
    border: solid 4px #fff;
    border-radius: 50%;
    box-shadow: 1px 2px 3px #0000000a, 1px 2px 9px #0000000a;
    height: 120px;
  }

  .appname-svg {
    height: 20px;
  }
`;

export const ErrorNotice = styled.div`
  display: inline-block;
  user-select: none;
  background-color: transparent;
  border-radius: 12px;
  border: solid 2px #ff4136;
  color: #ff4136;
  height: 24px;
  line-height: 20px;
  font-size: 0.8rem;
  padding: 0 10px;
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
