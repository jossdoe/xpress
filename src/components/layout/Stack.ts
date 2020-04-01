import styled from 'styled-components';

const Stack = styled.div<{
  align?: 'left' | 'center' | 'right';
  space?: number;
  spaceRight?: number;
  marginBottom?: number;
  marginTop?: number;
}>`
  margin-top: ${props => (props.marginTop ? props.marginTop : '0')}px;
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : '0')}px;
  text-align: ${props => (props.align ? props.align : 'inherit')};

  & > * + * {
    margin-top: ${props => props.space}px;
  }

  & > * {
    ${props =>
      props.spaceRight ? 'margin-right: ' + props.spaceRight + 'px;' : null}
  }
`;

export default Stack;
