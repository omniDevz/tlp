import React from 'react';

import { FiMenu, FiX } from 'react-icons/fi';

import logo from '../../assets/images/logoBlack.svg';
import logoWhite from '../../assets/images/logoWhite.svg';

import {
  HeaderWrapper,
  Menu,
  MenuHeader,
  MenuWrapper,
  MenuLink,
} from './styled';

const Header: React.FC = () => {
  function handleToggleMenu() {
    document.getElementById('menu')?.classList.toggle('open');
  }

  return (
    <HeaderWrapper>
      <MenuWrapper id="menu">
        <MenuHeader>
          <img src={logoWhite} alt="Logo da Thomaz Language Platform" />
          <FiX size={48} onClick={handleToggleMenu} />
        </MenuHeader>
        <Menu>
          <MenuLink>Sobre o Presencial</MenuLink>
          <MenuLink>Sobre o Online</MenuLink>
          <MenuLink>Cadastre-se</MenuLink>
          <MenuLink>Login</MenuLink>
        </Menu>
      </MenuWrapper>
      <img src={logo} alt="Logo da Thomaz Language Platform" />
      <FiMenu size={44} onClick={handleToggleMenu} />
    </HeaderWrapper>
  );
};

export default Header;
