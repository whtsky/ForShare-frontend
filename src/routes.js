import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import SourceShareList from './components/SourceShareList';
import SourceShare from './components/SourceShare';
import WriteSource from './components/WriteSource';
import Login from './components/Login';
import UserInterface from './components/UserInterface';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={SourceShareList} />
    <Route path="source-share-list" component={SourceShareList} />
    <Route path="source-share/results/:id" component={SourceShare} />
    <Route path="write-source" component={WriteSource} />
    <Route path="login" component={Login} />
    <Route path="user-interface/:id" component={UserInterface} />
  </Route> 
);

export default routes;