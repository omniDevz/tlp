import styled from 'styled-components';

export const CardClassWrapper = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  grid-gap: 1.6rem;
  position: relative;
  padding: .4rem 0;
  cursor: pointer;
  transition: all 320ms ease-in-out;


  & + li:before {
    content: '';
    height: 100%;
    width: 1px;
    background: ${(props) => props.theme.colors.secondary};
    position: absolute;
    left: .6rem;
    top: -50%;
  }

  &:hover {
    h4, div {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

export const Title = styled.h4`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.secondary};
  transition: all 320ms ease-in-out;
`;

export const Circle = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  background: ${(props) => props.theme.colors.secondary};
  border-radius: 50%;
  transition: all 320ms ease-in-out;
`;
