import styled from 'styled-components';

export const CardComponent = styled.section`
  background-color: #fdfdfd;
  border-radius: 3px;
  box-shadow: 1px 2px 3px #0000000a, 1px 2px 9px #0000000a;
  display: inline-block;
  height: 100%;
  margin-right: 20px;
  vertical-align: top;
  white-space: normal;
  width: 300px;

  :last-child {
    margin-right: 0;
  }

  header {
    border-bottom: solid 1px #eee;
    color: #ff4136;
    font-weight: bold;
    margin: 20px 20px 0;
    padding-bottom: 20px;
  }

  ul {
    background-color: #fdfdfd;
    list-style: none;
    padding: 20px;
  }
`;
