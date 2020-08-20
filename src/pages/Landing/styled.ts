import styled from 'styled-components';
import { FirstFoldProps } from './interface';

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
`;

export const FirstFold = styled.div<FirstFoldProps>`
  height: 100vh;
  background-image: url('${({ background }) => background}');
  display: grid;
  grid-template-rows: auto auto 1fr;
  justify-content: center;
  align-items: center;
`;

export const TitleApresentation = styled.h2`
  font-size: 3.2rem;
  font-weight: 700;
  text-align: center;
  padding: 24px;
  text-transform: uppercase;
`;

export const Button = styled.button`
  background: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.tertiary};
  padding: 1rem 2.4rem;
  text-align: center;
  width: 240px;
  font-size: 1.8rem;
  font-weight: 500;
  margin: 0 auto;
  transform: translateY(245%);
`;
