import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import Button from '../../../Button';

import Header from './components/Header';

import { HeaderWrapper, Navigation, Menu, LinkList } from './styled';

import api from '../../../../services/api';

import { ITransmissionNotificationApi, HeaderProps, IRoute } from './interface';

let links = [
  {
    route: 'home',
    title: 'Ir para página inicial',
    text: 'Home',
  },
  {
    route: 'course',
    title: 'Ir para página de cursos',
    text: 'Cursos',
  },
  {
    route: 'article',
    title: 'Ir para página de artigos recomendados',
    text: 'Artigos',
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

const PageHeader: React.FC<HeaderProps> = ({ type = 'icon', text }) => {
  const [routes, setRoutes] = useState(links);

  const { url } = useRouteMatch();
  const { addToast } = useToasts();
  const routeActive = url.replace('/', '');

  function handleToggleMenu() {
    const menu = document.getElementById('menu');
    menu?.classList.toggle('open');
  }

  function handleHasLive() {
    api
      .get('notificacaoTransmissao')
      .then((response) => {
        if (response.status === 206) {
          addToast(response.data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        const liveApi = response.data as ITransmissionNotificationApi[];

        const lastLive = liveApi[liveApi.length - 1];

        setRoutes([
          {
            route: `live/${lastLive.notificacaoTransmissaoId}`,
            title: 'Assistir live do professor',
            text: 'Live',
          },
          ...links,
        ]);
      })
      .catch((err) => {
        console.log(err);
        addToast(
          'Houve algum erro inesperado na busca por live, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }

  useEffect(handleHasLive, []);

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
            {routes
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
        type={type}
        text={text}
      />
    </HeaderWrapper>
  );
};

export default PageHeader;
