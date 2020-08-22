import React from 'react';

import Button from '../../components/Button';
import PageDefault from '../../components/PageDefault';

import backgroundFirstFold from '../../assets/images/backgroundFirstFold.jpg';

import {
  ButtonApresentation,
  FirstFold,
  TitleApresentation,
  Section,
  Article,
  TitleSection,
  Description,
} from './styled';

function Landing() {
  return (
    <PageDefault>
      <FirstFold background={backgroundFirstFold}>
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
      </Section>
    </PageDefault>
  );
}

export default Landing;
