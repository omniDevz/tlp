import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './Landing';
import AboutOnline from './AboutOnline';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/aboutOnline" component={AboutOnline} />
    </BrowserRouter>
  );
}

export default Routes;
