import React from 'react';

import Button from '../../components/Button';
import PageDefault from '../../components/PageDefault';

import backgroundFirstFold from '../../assets/images/backgroundFirstFold.jpg';

import {
  TitlePresentation,
  TitleSection,
  Description,
  FirstFold,
  Section,
  Article,
} from './styled';

function Landing() {
  return (
    <PageDefault>
      <FirstFold background={backgroundFirstFold}>
        <TitlePresentation>
          THINK BEFORE YOU SPEAK. <br />
          READ BEFORE YOU THINK.
        </TitlePresentation>
        <Button
          to="/newRegister"
          title="Cadastre-se na plataforma"
          color="secondary"
        >
          Cadastre-se
        </Button>
      </FirstFold>
      <Section>
        <Article>
          <TitleSection>Presencial</TitleSection>
          <Description lang="en">
            Entenda a solução de seus problemas relacionado ao inglês de forma
            direta e objetiva
          </Description>
          <Button
            to="/aboutPresential"
            title="Saiba mais sobre a metodologia presencial"
            color="primary"
          >
            Saiba mais
          </Button>
        </Article>
        <Article>
          <TitleSection>Online</TitleSection>
          <Description>
            Participe de turmas online, trazendo um bate papo de pessoas
            engajadas em aprender e ensinar o inglês
          </Description>
          <Button
            to="/aboutOnline"
            title="Saiba mais sobre a metodologia online"
            color="primary"
          >
            Saiba mais
          </Button>
        </Article>
      </Section>
    </PageDefault>
  );
}

export default Landing;
