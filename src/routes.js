import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import createSourceShareList from './pages/SourceShareList';
import createSourceShare from './pages/SourceShare';
import WriteSourceLink from './pages/WriteSourceLink';
import WriteArticle from './pages/WriteArticle';
import Login from './pages/Login';
import UserInterface from './pages/UserInterface';

const ArticleSourceShareList = createSourceShareList('createSourceShareList')

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={ArticleSourceShareList} />
    <Route path="link" component={createSourceShareList('urlpublish')} />
    <Route path="article" component={ArticleSourceShareList} />
    <Route path="article/:id" component={createSourceShare('articlelist')} />
    <Route path="link/:id" component={createSourceShare('urlpublish')} />
    <Route path="newlink" component={WriteSourceLink} />
    <Route path="newarticle" component={WriteArticle} />
    <Route path="login" component={Login} />
    <Route path="user/:id" component={UserInterface} />
  </Route> 
);

export default routes;