import React from 'react';
import { MdNewReleases, MdLiveHelp, MdPlayArrow } from 'react-icons/md';

import Button from '../../components/Button';
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
          <Button
            to="/newRegister"
            title="Cadastre-se agora mesmo na plataforma"
            color="primary"
          >
            Cadastre-se
          </Button>
        </Methodology>
      </MethodologyWrapper>
    </PageDefault>
  );
}

export default AboutPresential;
