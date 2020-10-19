import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './Landing';
import AboutOnline from './AboutOnline';
import AboutPresential from './AboutPresential';
import NewRegister from './NewRegister';
import Login from './Login';
import RecoveryPassword from './RecoveryPassword';
import RecoveryPasswordCode from './RecoveryPassword/pages/Code';
import RecoveryPasswordNew from './RecoveryPassword/pages/New';
import NotFound from './NotFound';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/aboutOnline" component={AboutOnline} />
        <Route path="/aboutPresential" component={AboutPresential} />
        <Route path="/newRegister" component={NewRegister} />
        <Route path="/login" component={Login} />
        <Route path="/recoveryPassword" component={RecoveryPassword} />
        <Route path="/recoveryPassword/code" component={RecoveryPasswordCode} />
        <Route path="/recoveryPassword/new" component={RecoveryPasswordNew} />

        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
