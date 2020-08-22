import styled from 'styled-components';

export const Main = styled.main`
  background: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.secondary};
  flex: 1;
`;
