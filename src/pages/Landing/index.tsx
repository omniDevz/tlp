import React from 'react';

import ButtonLink from '../../components/ButtonLink';
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
        <ButtonApresentation
          to="/newRegister"
          title="Cadastre-se na plataforma"
          typeButton="secondary"
        >
          Cadastre-se
        </ButtonApresentation>
      </FirstFold>
      <Section>
        <Article>
          <TitleSection>Presencial</TitleSection>
          <Description lang="en">
            Entenda a solução de seus problemas relacionado ao inglês de forma
            direta e objetiva
          </Description>
          <ButtonLink
            to="/aboutPresential"
            title="Saiba mais sobre a metodologia presencial"
            typeButton="primary"
          >
            Saiba mais
          </ButtonLink>
        </Article>
        <Article>
          <TitleSection>Online</TitleSection>
          <Description>
            Participe de turmas online, trazendo um bate papo de pessoas
            engajadas em aprender e ensinar o inglês
          </Description>
          <ButtonLink
            to="/aboutOnline"
            title="Saiba mais sobre a metodologia online"
            typeButton="primary"
          >
            Saiba mais
          </ButtonLink>
        </Article>
      </Section>
    </PageDefault>
  );
}

export default Landing;
