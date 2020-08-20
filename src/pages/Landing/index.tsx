import React from 'react';
import { FiMenu } from 'react-icons/fi';

import logo from '../../assets/images/logoBlack.svg';
import backgroundFirstFold from '../../assets/images/backgroundFirstFold.png';

import { Button, FirstFold, Header, TitleApresentation } from './styled';

function Landing() {
  return (
    <FirstFold background={backgroundFirstFold}>
      <Header>
        <img src={logo} alt="Logo da Thomaz Language Platform" />
        <FiMenu size={44} />
      </Header>
      <TitleApresentation>
        THINK BEFORE YOU SPEAK. <br />
        READ BEFORE YOU THINK.
      </TitleApresentation>
      <Button>Cadastre-se</Button>
    </FirstFold>
  );
}

export default Landing;
