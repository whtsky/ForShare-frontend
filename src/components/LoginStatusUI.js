import React from 'react';
import { NavDropdown, NavItem, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import{ observer } from 'mobx-react';

import { LoginState } from '../store';

@observer
class LoginStatusUI extends React.Component{

  logout = () => {
    LoginState.logout();
  }

  render(){
    if(!LoginState.completed){
      return (
        <LinkContainer to="login" activeHref="active">
          <NavItem>登陆</NavItem>
        </LinkContainer>
      )
    }else{
      return(
        <NavDropdown title={LoginState.username} id="basic-nav-dropdown">
          <MenuItem eventKey={1} onClick={this.logout}>退出登陆</MenuItem>
        </NavDropdown>
      )
    }
  }
}

export default LoginStatusUI;