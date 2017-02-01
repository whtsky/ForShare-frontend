import React from 'react';
import { NavDropdown, NavItem, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import{ observer } from 'mobx-react';

import LoginStateStore from './ObservableLoginStateStore';

@observer
class LoginStatusUI extends React.Component{

  logOut = () => {
    LoginStateStore.logout();
  }

  render(){
    const loginStatus = LoginStateStore.store.completed;
    const username = LoginStateStore.store.username;

    if(loginStatus === false){
      return (
        <LinkContainer to="login" activeHref="active">
          <NavItem>{username}</NavItem>
        </LinkContainer>
      )
    }else{
      return(
        <NavDropdown title={username} id="basic-nav-dropdown">
          <MenuItem eventKey={1} onClick={this.logOut.bind(this)}>退出登陆</MenuItem>
        </NavDropdown>
      )
    }
  }
}

export default LoginStatusUI;