import styled from 'styled-components';

export const CardComponent = styled.section`
  border-radius: 3px;
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
    border-bottom: solid 1px #ddd;
    color: #ff4136;
    font-weight: 600;
    margin: 20px 20px 0;
    padding-bottom: 20px;
  }

  ul {
    list-style: none;
    padding: 20px;
    height: calc(100% - 50px);
    overflow: auto;
  }
`;
