import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from '../pages/Landing';
import AboutOnline from '../pages/AboutOnline';
import AboutPresential from '../pages/AboutPresential';
import NewRegister from '../pages/NewRegister';
import Login from '../pages/Login';
import RecoveryPassword from '../pages/RecoveryPassword';
import RecoveryPasswordNew from '../pages/RecoveryPassword/pages/New';
import NotFound from '../pages/NotFound';

function LogoffRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/aboutOnline" component={AboutOnline} />
        <Route path="/aboutPresential" component={AboutPresential} />
        <Route path="/newRegister" component={NewRegister} />
        <Route path="/login" component={Login} />
        <Route
          path="/recoveryPassword/new/:token"
          component={RecoveryPasswordNew}
        />
        <Route path="/recoveryPassword" component={RecoveryPassword} />

        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default LogoffRoutes;
