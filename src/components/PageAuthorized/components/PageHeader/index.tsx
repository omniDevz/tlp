import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import Button from '../../../Button';

import Header from './components/Header';

import { HeaderWrapper, Navigation, Menu, LinkList } from './styled';

import { HeaderProps, IRoute } from './interface';

const links = [
  {
    route: 'home',
    title: 'Ir para página inicial',
    text: 'Home',
  },
  {
    route: 'article',
    title: 'Ir para página de artigos recomendados',
    text: 'Artigos',
  },
  {
    route: 'transmissionNotification',
    title: 'Assistir live do professor',
    text: 'Live',
  },
  {
    route: 'classes',
    title: 'Ir para página da turma',
    text: 'Turma',
  },
  {
    route: 'account',
    title: 'Ir para página de perfil',
    text: 'Perfil',
  },
];

const PageHeader: React.FC<HeaderProps> = ({ type, text }) => {
  const howType = type === undefined ? 'icon' : type;
  const { url } = useRouteMatch();
  const routeActive = url.replace('/', '');

  function handleToggleMenu() {
    const menu = document.getElementById('menu');
    menu?.classList.toggle('open');
  }

  return (
    <HeaderWrapper>
      <Menu id="menu">
        <Header
          isMenuIcon={false}
          title="Fechar Menu"
          onClick={handleToggleMenu}
          type={'exit'}
        />

        <Navigation>
          <LinkList>
            {links
              .filter((link: IRoute) => link.route !== routeActive)
              .map((link: IRoute) => (
                <Button
                  key={link.route}
                  color="primary-outline"
                  to={`/${link.route}`}
                  title={link.title}
                >
                  {link.text}
                </Button>
              ))}
          </LinkList>
        </Navigation>
      </Menu>
      <Header
        isMenuIcon={true}
        title="Abrir Menu"
        onClick={handleToggleMenu}
        type={howType}
        text={text}
      />
    </HeaderWrapper>
  );
};

export default PageHeader;
