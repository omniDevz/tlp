import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import ArticlePage from '../pages/Authorized/Article';
import Account from '../pages/Authorized/Account';
import NotFound from '../pages/NotFound';

import Article from './article.routes';

const AuthRoutes: React.FC = () => {
  const routes = [
    {
      path: '/',
      component: ArticlePage,
    },
    {
      path: '/account',
      component: Account,
    },
  ].concat(Article);

  return (
    <BrowserRouter>
      <Switch>
        <Route path={['/home', '/login']}>
          <Redirect to="/" />
        </Route>

        {routes.map((entry) => (
          <Route key={entry.path} exact {...entry} />
        ))}

        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default AuthRoutes;
