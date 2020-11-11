import styled from 'styled-components';

export const ClassStream = styled.iframe`
  margin: 0.8rem 0;
  border: 3px solid ${(props) => props.theme.colors.secondary};
  height: 50vh;
  max-height: 50vh;
  position: relative;
  overflow: hidden;
`;

export const ClassesWrapper = styled.ul`
  border: 3px solid ${(props) => props.theme.colors.secondary};
  height: calc(100% - 50vh - 6rem);
  margin: 1.2rem 0;
  padding: 1.2rem;
  padding-bottom: 0;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ButtonsWrapper = styled.div`

`;
