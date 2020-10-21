import React from 'react';
import {
  MdBook,
  MdDescription,
  MdVoiceChat,
  MdCameraRoll,
  MdPlayArrow,
} from 'react-icons/md';

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

function AboutOnline() {
  return (
    <PageDefault>
      <Title>Sobre o online</Title>
      <SkillsWrapper>
        <Skill>
          <MdBook />
          Recomendações de livros
        </Skill>
        <Skill>
          <MdDescription />
          Artigos
        </Skill>
        <Skill>
          <MdVoiceChat />
          Lives exclusivas
        </Skill>
        <Skill>
          <MdCameraRoll />
          Cursos para cada perfil
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

export default AboutOnline;
