import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';
import { LinkContainer } from 'react-router-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { presets, RouteTransition } from 'react-router-transition';

import LoginStatusUI from './LoginStatusUI';
import './App.css';

bootstrapUtils.addStyle(Navbar, 'custom');

class App extends React.Component {

  render() {
    return (
      <div className="header">
        <Navbar bsStyle="custom">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">ForShare</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <LinkContainer to="/source-share-list" activeHref="active">
              <NavItem>资源分享</NavItem>
            </LinkContainer>
            <LinkContainer to="/write-source" activeHref="active">
              <NavItem>写文章</NavItem>
            </LinkContainer>
          </Nav>
          <Nav pullRight>
            <LoginStatusUI></LoginStatusUI>
          </Nav>
        </Navbar>
        <div className="body">
          { this.props.children }
        </div>
        <footer>ForShare</footer>
      </div>
    );
  }
}

export default App;
