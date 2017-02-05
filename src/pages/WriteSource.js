import React from 'react';
import ReactDOM from 'react-dom';
import ajax from 'superagent';
import { FormGroup, FormControl, Button } from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';
import{ observer } from 'mobx-react';
import { browserHistory } from 'react-router';

import baseUrl from './config';
import { LoginState } from '../store';
import './WriteSource.css';

bootstrapUtils.addStyle(FormControl, 'custom');

@observer
class WriteSource extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      urlValuePlaceholde: "添加链接",
      introValuePlaceholde: "请输入关于链接的描述..",
      urlValueValidationState: null,
      introValueValidationState: null,
    }
  }

  publish = () => {
    
    if(!LoginState.completed){
      browserHistory.push('login');
      return;
    }
    const urlMessage = ReactDOM.findDOMNode(this.refs.urlValue).value.trim(),
           urlIntroduce = ReactDOM.findDOMNode(this.refs.introValue).value.trim();

    if(!(urlMessage && urlIntroduce)){
      this.errorReminder();
      return;
    }

    const content = {
      owner: LoginState.username,
      urlmessage: urlMessage,
      urlintroduce: urlIntroduce
    }
    ajax.post(`${baseUrl}/urlpublish/`)
      .send(content)
      .set({'Authorization': `Token ${LoginState.token}`})
      .end((error, response) => {
        if (error || response.status !== 201) {
          console.log('source push error!');
          alert("发布失败，请稍后再试");
          this.deleteInputValue();
        } else {
          console.log('yay got ' + JSON.stringify(response.body));
          alert("发布成功");
          this.deleteInputValue();
        }
      });
    }

  deleteInputValue = () => { 
    ReactDOM.findDOMNode(this.refs.urlValue).value = "";
    ReactDOM.findDOMNode(this.refs.introValue).value = "";
  }
  
  errorReminder(){
    if(ReactDOM.findDOMNode(this.refs.urlValue).value.trim() === ""){
      this.setState({ urlValuePlaceholde : "链接不能为空" });
      this.setState({ urlValueValidationState : "error" });
    }
    if(ReactDOM.findDOMNode(this.refs.introValue).value.trim() === ""){
      this.setState({ introValuePlaceholde : "描述不能为空" });
      this.setState({ introValueValidationState : "error" });
    }
  }

  render(){
    return(
      <div key="write-source" className="write-source">
        <h1 className="title-h">写文章</h1>
        <p className="title-p"><label className="of"></label>在这里添加链接<label className="on"></label></p>
        <form>
          <FormGroup bsSize="large" validationState={this.state.urlValueValidationState}>
            <FormControl type="text" placeholder={this.state.urlValuePlaceholde} ref="urlValue" />
          </FormGroup>
          <FormGroup controlId="formControlsTextarea" bsStyle="custom" validationState={this.state.introValueValidationState}>
            <FormControl componentClass="textarea" placeholder={this.state.introValuePlaceholde} ref="introValue" />
          </FormGroup>
        </form>
        <Button bsStyle="danger" bsSize="large" onClick={this.publish}>提交</Button>
      </div>
    )
  }
}

export default WriteSource;