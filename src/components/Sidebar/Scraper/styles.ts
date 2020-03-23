import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  padding: 20px 0 0;
  position: relative;
`;

export const Title = styled.h2`
  padding-left: 20px;
  span {
    background-color: #777;
    border-radius: 3px;
    color: #ccc;
    cursor: pointer;
    display: inline-block;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 2px 5px;
  }
`;

export const Settings = styled.div`
  background-color: #777;
  bottom: 0;
  color: #eaeaea;
  left: 0;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
  z-index: 100;

  button {
    background-color: inherit;
    border: none;
    color: #fdfdfd;
    font-size: 1.5rem;
    position: absolute;
    top: 10px;
    right: 15px;
    cursor: pointer;
  }

  nav {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    h2 {
      color: #fff;
      margin-bottom: 7px;
    }

    h4 {
      margin-bottom: 7px;
    }

    ul {
      font-size: 0.9rem;
      list-style: none;
      margin-bottom: 20px;

      li {
        background-color: #888;
        border-radius: 3px;
        cursor: pointer;
        padding: 2px 2px;
        margin-bottom: 4px;

        :hover {
          background-color: #eaeaea;
          color: #777;
        }
      }
    }
  }
`;

export const List = styled.ul`
  height: calc(100% - 60px);
  list-style: none;
  overflow: auto;
  padding: 10px 50px 20px 20px;
`;

export const Spinner = styled.div`
  font-size: 64px;
  margin: 100px auto;
  text-align: center;
  width: 32px;

  span {
    position: relative;
  }
  span:before,
  span:after {
    content: '';
    display: block;
    position: relative;
  }
  span:before {
    animation: spinner 2.5s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;
    background-color: #ff4136;
    height: 0.5em;
    width: 0.5em;
  }
  span:after {
    animation: shadow 2.5s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;
    background-color: #ccc;
    border-radius: 50%;
    bottom: -0.2em;
    height: 0.1em;
  }

  @keyframes spinner {
    50% {
      border-radius: 50%;
      transform: scale(0.5) rotate(360deg);
    }
    100% {
      transform: scale(1) rotate(720deg);
    }
  }
  @keyframes shadow {
    50% {
      background-color: #ddd;
      transform: scale(0.5);
    }
  }
`;
