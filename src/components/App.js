import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';
import { LinkContainer } from 'react-router-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


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
            <LinkContainer to="/source-share-list">
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
        <ReactCSSTransitionGroup transitionName="app" component="div" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          {React.cloneElement(this.props.children, {
            key: this.props.location.pathname
          })}
        </ReactCSSTransitionGroup>
        <footer>ForShare</footer>
      </div>
    );
  }
}

export default App;
