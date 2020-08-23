import styled from 'styled-components';

export const Title = styled.h2`
  width: 100%;
  padding-top: 132px;
  font-size: 3.2rem;
  font-weight: 700;
  text-align: center;
`;

export const SkillsWrapper = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Skill = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 24px;
  color: ${(props) => props.theme.colors.secondary};
  text-align: center;
  font-size: 1.8rem;

  svg {
    width: 7.2rem;
    height: 7.2rem;
    color: transparent;
    stroke: ${(props) => props.theme.colors.primary};
    stroke-width: 1px;
  }
`;

export const MethodologyWrapper = styled.section`
  background: ${(props) => props.theme.colors.secondary};
  padding: 24px;
  padding-bottom: 0;
`;

export const Video = styled.article`
  position: relative;
  border: 2px solid ${(props) => props.theme.colors.tertiary};
  height: 180px;

  svg {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 3.2rem;
    height: 3.2rem;
    padding: 0.4rem;
    transform: translate(-50%, -50%);
    background: ${(props) => props.theme.colors.tertiary};
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export const Methodology = styled.article`
  padding-top: 24px;
  display: grid;
  grid-template-rows: repeat(4, auto);
  row-gap: 24px;
`;

export const SemiTitle = styled.h4`
  color: ${(props) => props.theme.colors.primary};
  font-size: 3.2rem;
  font-weight: 500;
`;

export const Description = styled.p`
  color: ${(props) => props.theme.colors.tertiary};
  font-size: 1.8rem;
`;
