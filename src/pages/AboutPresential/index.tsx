import React from 'react';
import { MdNewReleases, MdLiveHelp, MdPlayArrow } from 'react-icons/md';

import ButtonLink from '../../components/ButtonLink';
import PageDefault from '../../components/PageDefault';

import {
  Title,
  SkillsWrapper,
  Skill,
  MethodologyWrapper,
  Video,
  Methodology,
  SemiTitle,
  Description,
} from './styled';

function AboutPresential() {
  return (
    <PageDefault>
      <Title>Sobre o presencial</Title>
      <SkillsWrapper>
        <Skill>
          <MdNewReleases />
          Direto e objetivo
        </Skill>
        <Skill>
          <MdLiveHelp />
          Descobrimos e sanamos suas falhas
        </Skill>
      </SkillsWrapper>
      <MethodologyWrapper>
        <Video>
          <MdPlayArrow />
        </Video>
        <Methodology>
          <SemiTitle>Metodologia</SemiTitle>
          <Description>
            Entenda a solução de seus problemas relacionado ao inglês de forma
            direta e objetiva
          </Description>
          <ButtonLink
            to="#"
            title="Cadastre-se agora mesmo na plataforma"
            typeButton="primary"
          >
            Cadastre-se
          </ButtonLink>
        </Methodology>
      </MethodologyWrapper>
    </PageDefault>
  );
}

export default AboutPresential;
