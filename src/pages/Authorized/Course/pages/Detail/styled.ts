import styled from 'styled-components';

export const ClassesWrapper = styled.ul`
  height: calc(100% - 4rem);
  padding-top: 1.2rem;
`;

export const ButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: .8rem;
  grid-gap: .8rem;
  border: 2px solid ${(props) => props.theme.colors.secondary};
  width: 100%;
`;

export const ContentCourse = styled.div`
  font-size: 2rem;
  font-weight: 500;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: .8rem;
  padding-top: 1.6rem;
`;

export const Content = styled.p`
  text-align: left;
`;

export const TimeCourse = styled.p`
  text-align: right;
`;

export const Description = styled.p`
  font-size: 1.8rem;
  padding: 2rem 0 .8rem;
`;

export const Price = styled.label`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 1.6rem;
  font-size: 2rem;
  font-weight: 500;
`;
