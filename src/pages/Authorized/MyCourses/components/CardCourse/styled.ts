import styled from 'styled-components';

export const CardCourseWrapper = styled.li`
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
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: .8rem;
`;

export const Title = styled.h4`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: .4rem;
`;

export const Description = styled.p`
  font-size: 1.6rem;
`;
