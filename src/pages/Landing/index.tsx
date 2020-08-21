import React from 'react';
import { FiMenu, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { AiOutlineWhatsApp } from 'react-icons/ai';

import Button from '../../components/Button';

import logo from '../../assets/images/logoBlack.svg';
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
} from './styled';

function Landing() {
  return (
    <>
      <FirstFold background={backgroundFirstFold}>
        <Header>
          <img src={logo} alt="Logo da Thomaz Language Platform" />
          <FiMenu size={44} />
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
                <AiOutlineWhatsApp size={52} />
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
