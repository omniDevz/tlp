import React from 'react';
import { FiMenu, FiInstagram, FiLinkedin, FiX } from 'react-icons/fi';
import { ImWhatsapp } from 'react-icons/im';

import Button from '../../components/Button';

import logo from '../../assets/images/logoBlack.svg';
import logoWhite from '../../assets/images/logoWhite.svg';
import backgroundFirstFold from '../../assets/images/backgroundFirstFold.jpg';

import {
  ButtonApresentation,
  FirstFold,
  Header,
  TitleApresentation,
  Section,
  Article,
  TitleSection,
  Description,
  Footer,
  ListSocialMedia,
  SocialMedia,
  LinkExternal,
  Menu,
  MenuHeader,
  MenuWrapper,
  MenuLink,
} from './styled';

function Landing() {
  function handleToggleMenu() {
    document.getElementById('menu')?.classList.toggle('open');
  }

  return (
    <>
      <FirstFold background={backgroundFirstFold}>
        <Header>
          <MenuWrapper id="menu">
            <MenuHeader>
              <img src={logoWhite} alt="Logo da Thomaz Language Platform" />
              <FiX size={48} onClick={handleToggleMenu} />
            </MenuHeader>
            <Menu>
              <MenuLink>Sobre o Presencial</MenuLink>
              <MenuLink>Sobre o Online</MenuLink>
              <MenuLink>Cadastre-se</MenuLink>
              <MenuLink>Login</MenuLink>
            </Menu>
          </MenuWrapper>
          <img src={logo} alt="Logo da Thomaz Language Platform" />
          <FiMenu size={44} onClick={handleToggleMenu} />
        </Header>
        <TitleApresentation>
          THINK BEFORE YOU SPEAK. <br />
          READ BEFORE YOU THINK.
        </TitleApresentation>
        <ButtonApresentation typeButton={'secondary'}>
          Cadastre-se
        </ButtonApresentation>
      </FirstFold>
      <Section>
        <Article>
          <TitleSection>Presencial</TitleSection>
          <Description>
            Entenda a solução de seus problemas relacionado ao inglês de forma
            direta e objetiva
          </Description>
          <Button typeButton={'primary'}>Saiba mais</Button>
        </Article>
        <Article>
          <TitleSection>Online</TitleSection>
          <Description>
            Participe de turmas online, trazendo um bate papo de pessoas
            engajadas em aprender e ensinar o inglês
          </Description>
          <Button typeButton={'primary'}>Saiba mais</Button>
        </Article>
        <Footer>
          <ListSocialMedia>
            <SocialMedia>
              <LinkExternal
                target="_blank"
                href="https://api.whatsapp.com/send?phone="
                title="Entre em contato pelo whatsapp"
              >
                <ImWhatsapp size={52} />
              </LinkExternal>
            </SocialMedia>
            <SocialMedia>
              <LinkExternal
                target="_blank"
                href="#"
                title="Siga a gente no instagram"
              >
                <FiInstagram size={52} />
              </LinkExternal>
            </SocialMedia>
            <SocialMedia>
              <LinkExternal
                target="_blank"
                href="#"
                title="Conecte pelo linkedIn"
              >
                <FiLinkedin size={52} />
              </LinkExternal>
            </SocialMedia>
          </ListSocialMedia>
          <Description>&copy;copyright {new Date().getFullYear()}</Description>
        </Footer>
      </Section>
    </>
  );
}

export default Landing;
