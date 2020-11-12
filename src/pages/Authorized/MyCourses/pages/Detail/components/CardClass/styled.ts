import styled, {css} from 'styled-components';
import { ICardWrapper } from './interface';

export const CardClassWrapper = styled.li<ICardWrapper>`
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
    width: 4px;
    background: ${(props) => props.theme.colors.gray};
    position: absolute;
    left: calc(.6rem - 2px);
    top: -50%;
    z-index: 1;
  }

  &:hover {
    h4 {
      color: ${(props) => props.theme.colors.primary};
    }
    div {
      background: ${(props) => props.theme.colors.primary};
    }
  }

  ${(props) => props.active && css`
    h4 {
      color: ${(props) => props.theme.colors.primary};
    }
    div {
      background: ${(props) => props.theme.colors.primary};
    }
  `}
`;

export const Title = styled.h4`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.secondary};
  transition: all 320ms ease-in-out;
  border-bottom: 1px solid ${(props) => props.theme.colors.secondary};
  width: 100%;
`;

export const Circle = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  background: ${(props) => props.theme.colors.secondary};
  border-radius: 1.2rem;
  transition: all 320ms ease-in-out;
  position: relative;
  z-index: 2;
`;
