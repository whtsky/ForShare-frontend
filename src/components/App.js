import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';
import { LinkContainer } from 'react-router-bootstrap';

import './App.css';

bootstrapUtils.addStyle(Navbar, 'custom');

class App extends React.Component {
  render() {
    return (
      <div className="forShare">
        <Navbar bsStyle="custom">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">ForShare</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <LinkContainer to="/source-share">
              <NavItem>资源分享</NavItem>
            </LinkContainer>
            <LinkContainer to="/write-source">
              <NavItem>写文章</NavItem>
            </LinkContainer>
          </Nav>
          <Nav pullRight>
            <LinkContainer to="/login">
              <NavItem>登陆</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar>
        <footer>ForShare</footer>
      </div>
    );
  }
}

export default App;
