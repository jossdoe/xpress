import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  text-align: center;
  padding: 100px 20px 20px 20px;

  img {
    max-width: 700px;
  }

  span {
    display: inline-block;
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 70%;
  }
`;
