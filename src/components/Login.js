import React from 'react';
import { FormGroup, InputGroup, FormControl, Button } from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';
import './Login.css';

bootstrapUtils.addStyle(InputGroup.Addon, 'custom-user');
bootstrapUtils.addStyle(InputGroup.Addon, 'custom-password');
bootstrapUtils.addStyle(InputGroup, 'custom');

class Login extends React.Component{

  render(){
    return(
      <div className="login">
        <h3>登录</h3>
        <form>
          <FormGroup>
            <InputGroup bsStyle="custom">
              <InputGroup.Addon bsStyle="custom-user"></InputGroup.Addon>
              <FormControl type="text" />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup bsStyle="custom">
              <InputGroup.Addon bsStyle="custom-password"></InputGroup.Addon>
              <FormControl type="text" />
            </InputGroup>
          </FormGroup>
        </form>
        <Button bsStyle="danger">登录</Button>
      </div>
    );
  }
}

export default Login;