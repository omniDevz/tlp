import styled, {css} from 'styled-components';
import { FiBook } from 'react-icons/fi';

import { ICardCourseWrapper } from './interface';

export const CardCourseWrapper = styled.li<ICardCourseWrapper>`
  border: 2px solid ${(props) => props.theme.colors.secondary};
  padding: .8rem;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  transform: scale(1);
  transition: all 320ms ease-in-out;

  & + li {
    margin-top: .8rem;
  }

  &:hover {
    transform: scale(.98);
  }

  ${(props) => props.active && css`
    border-color: ${(props) => props.theme.colors.primary};
    transform: scale(.98);
  `}
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: .8rem;
`;

export const Props = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Title = styled.h4`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: .4rem;
`;

export const Description = styled.p`
  font-size: 1.6rem;
`;

export const Price = styled(Description)`
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: .8rem;
`;

export const DetailCourse = styled(FiBook)`
  color: ${(props) => props.theme.colors.secondary};
  width: 4rem;
  height: 4rem;
  transform: scale(1);
  transition: all 320ms ease-in-out;

  &:hover {
    transform: scale(.9);
  }
`;
