import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './Landing';
import AboutOnline from './AboutOnline';
import AboutPresential from './AboutPresential';
import NewRegister from './NewRegister';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/aboutOnline" component={AboutOnline} />
        <Route path="/aboutPresential" component={AboutPresential} />
        <Route path="/newRegister" component={NewRegister} />
        <Route component={() => <div>Page Not source 404</div>} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
