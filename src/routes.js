import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import SourceShare from './components/SourceShare';
import WriteSource from './components/WriteSource';
import Login from './components/Login';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={SourceShare} />
    <Route path="/source-share" component={SourceShare} />
    <Route path="/write-source" component={WriteSource} />
    <Route path="/login" component={Login} />
  </Route> 
);

export default routes;