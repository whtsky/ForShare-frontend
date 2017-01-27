import React from 'react';
import ReactDOM from 'react-dom';
import { FormGroup, InputGroup, FormControl, Button } from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';
import ajax from 'superagent';

import App from './App';
import baseUrl from './config';
import './Login.css';

bootstrapUtils.addStyle(InputGroup.Addon, 'custom-user');
bootstrapUtils.addStyle(InputGroup.Addon, 'custom-password');
bootstrapUtils.addStyle(InputGroup, 'custom');

class Login extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      userMessage : "",
      userName: "",
      token: "",
    }
  }

  pushUserMessage(){
    const content = {
      username: ReactDOM.findDOMNode(this.refs.userName).value,
      password: ReactDOM.findDOMNode(this.refs.passWord).value
    }

    this.setState({ userMessage : content });

    ajax.post(`${baseUrl}/login`)
      .send(this.state.userMessage).set('Accept', 'application/json')
      .end(function(error, response){
      if (error || response.status !== 200) {
        console.log('login failed!');
      } else {
        this.setState({ userName : response.body.username });
        App.setState({ navContent: response.body.username });
      }
      });
  }

  render(){
    return(
      <div className="login">
        <h3>登录</h3>
        <form>
          <FormGroup>
            <InputGroup bsStyle="custom">
              <InputGroup.Addon bsStyle="custom-user"></InputGroup.Addon>
              <FormControl type="text" ref="userName" />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup bsStyle="custom">
              <InputGroup.Addon bsStyle="custom-password"></InputGroup.Addon>
              <FormControl type="text" ref="passWord" />
            </InputGroup>
          </FormGroup>
        </form>
        <Button bsStyle="danger" onClick={this.pushUserMessage.bind(this)}>登录</Button>
      </div>
    );
  }
}

export default Login;