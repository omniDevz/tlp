import React from 'react';
import {
  MdBook,
  MdDescription,
  MdVoiceChat,
  MdCameraRoll,
  MdPlayArrow,
} from 'react-icons/md';
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

function Landing() {
  return (
    <PageDefault>
      <Title>Sobre o Online</Title>
      <SkillsWrapper>
        <Skill>
          <MdBook />
          Recomendações de Livros
        </Skill>
        <Skill>
          <MdDescription />
          Artigos
        </Skill>
        <Skill>
          <MdVoiceChat />
          Lives Exclusivas
        </Skill>
        <Skill>
          <MdCameraRoll />
          Cursos para Cada Perfil
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

export default Landing;
