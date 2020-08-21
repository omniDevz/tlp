import styled from 'styled-components';

import { ButtonStyled } from '../../components/Button/styled';

import { FirstFoldProps } from './interface';

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
`;

export const MenuWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;

  padding: 24px;
  display: flex;
  flex-direction: column;

  background: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.tertiary};
  transform: translateY(-100%);
  transition: all 360ms ease-in-out;

  &.open {
    transform: translateY(0);
  }
`;

export const MenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: 72px;
    width: 72px;
  }
`;

export const Menu = styled.ul`
  padding-top: 40px;
  height: 100%;
  position: relative;
`;

export const MenuLink = styled.li`
  border: 2px solid ${(props) => props.theme.colors.tertiary};
  font-size: 2.4rem;
  font-weight: 700;
  text-align: center;
  padding: 12px 16px;
  margin-bottom: 16px;

  &:last-child {
    background: ${(props) => props.theme.colors.primary};
    border: none;

    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

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

export const Footer = styled.footer`
  height: 164px;
  background: ${(props) => props.theme.colors.secondary};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const ListSocialMedia = styled.ul`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-bottom: 16px;
`;

export const SocialMedia = styled.li``;

export const LinkExternal = styled.a``;
