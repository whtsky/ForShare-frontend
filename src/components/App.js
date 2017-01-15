import React from 'react';
import { Navbar, FormGroup, FormControl, Button, Nav, NavItem } from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';
import { LinkContainer } from 'react-router-bootstrap';

import './App.css';
import searchIcon from '../img/search-icon.png';

bootstrapUtils.addStyle(Navbar, 'custom');
bootstrapUtils.addStyle(LinkContainer, 'custom');

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar bsStyle="custom">
          <Navbar.Header>
            <Navbar.Brand >
              <a href="#" className="brand-a">ForShare</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <LinkContainer to="/source-share">
              <NavItem eventKey={1}>资源分享</NavItem>
            </LinkContainer>
            <LinkContainer to="/write-source">
              <NavItem eventKey={2}>写文章</NavItem>
            </LinkContainer>
            <LinkContainer to="/login" bsStyle="custom">
              <NavItem eventKey={3}>登陆</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar>
        <footer>ForShare</footer>
      </div>
    );
  }
}

export default App;
