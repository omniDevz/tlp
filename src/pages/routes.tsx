import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './Landing';
import AboutOnline from './AboutOnline';
import AboutPresential from './AboutPresential';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/AboutPresential" component={AboutPresential} />
      <Route path="/aboutOnline" component={AboutOnline} />
    </BrowserRouter>
  );
}

export default Routes;
