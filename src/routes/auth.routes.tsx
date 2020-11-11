import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import ArticlePage from '../pages/Authorized/Article';
import Account from '../pages/Authorized/Account';
import Live from '../pages/Authorized/Live';
import NotFound from '../pages/NotFound';

import Article from './article.routes';
import Classes from './classes.routes';
import Course from './course.routes';

interface IRoutes {
  path: string;
  component: React.FC<any>;
}

const AuthRoutes: React.FC = () => {
  const routes: IRoutes[] = [
    {
      path: '/',
      component: ArticlePage,
    },
    {
      path: '/account',
      component: Account,
    },
    {
      path: '/live/:transmissionNotificationId',
      component: Live,
    },
  ].concat(Article, Classes, Course);

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
