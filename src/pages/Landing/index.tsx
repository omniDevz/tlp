import React from 'react';
import { FiMenu } from 'react-icons/fi';

import Button from '../../components/Button';

import logo from '../../assets/images/logoBlack.svg';
import backgroundFirstFold from '../../assets/images/backgroundFirstFold.png';

import {
  ButtonApresentation,
  FirstFold,
  Header,
  TitleApresentation,
  Section,
  Article,
  TitleSection,
  Description,
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
      </Section>
    </>
  );
}

export default Landing;
