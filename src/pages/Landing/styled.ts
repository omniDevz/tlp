import styled from 'styled-components';

import { ButtonStyled } from '../../components/Button/styled';

import { FirstFoldProps } from './interface';

export const FirstFold = styled.div<FirstFoldProps>`
  height: 100vh;
  width: 100%;
  background: url('${({ background }) => background}') no-repeat center 48%;
  background-size: cover;
  display: grid;
  grid-template-rows: auto auto 1fr;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  padding-top: 127px;
`;

export const TitleApresentation = styled.h2`
  font-size: 3.2rem;
  font-weight: 700;
  text-align: center;
  padding: 24px;
  text-transform: uppercase;
`;

export const ButtonApresentation = styled(ButtonStyled)`
  transform: translateY(245%);
`;

export const Section = styled.section`
  background: ${(props) => props.theme.colors.secondary};
  width: 100%;
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 260px;
  padding: 24px;
`;

export const TitleSection = styled.h3`
  color: ${(props) => props.theme.colors.primary};
  font-size: 3.8rem;
  font-weight: 400;
  margin-bottom: 1.6rem;
`;

export const Description = styled.p`
  color: ${(props) => props.theme.colors.tertiary};
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 24px;
`;
