import React from 'react';
import ReactDOM from 'react-dom';
import ajax from 'superagent';
import { FormGroup, FormControl, Button } from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';
import{ observer } from 'mobx-react';
import { browserHistory } from 'react-router';

import LoginStateStore from './ObservableLoginStateStore';
import baseUrl from './config';
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

  publish(){
    
    var self = this;

    if(LoginStateStore.store.completed === false){
      browserHistory.push('login');
    }else{
      if(ReactDOM.findDOMNode(this.refs.urlValue).value.trim() === "" || ReactDOM.findDOMNode(this.refs.introValue).value.trim() === ""){
        this.errorReminder();
    }else{
      let date = new Date();
      let year = date.getFullYear() >= 10 ? date.getFullYear() : '0' + date.getFullYear();
      let day = date.getDay() >= 10 ?  date.getDay() : '0' + date.getDay();
      let mouth = date.getMonth() >= 10 ? date.getMonth() : '0' + date.getMonth();
      let hour = date.getHours() >= 10 ? date.getHours() : '0' + date.getHours();
      let minute = date.getMinutes() >= 10 ? date.getMinutes() : '0' + date.getMinutes();
      let publishTime = year + '-' + mouth + '-' + day + '-' + hour + ':' + minute;

      const content = {
        owner: LoginStateStore.store.username,
        urlpublish_time: publishTime,
        urlmessage: ReactDOM.findDOMNode(this.refs.urlValue).value.trim(),
        urlintroduce: ReactDOM.findDOMNode(this.refs.introValue).value.trim()
      }
      const token = LoginStateStore.store.token;

      ajax.post(`${baseUrl}/urlpublish/`)
        .send(content)
        .set({'Authorization': "Token " + token})
        .end(function(error, response){
        if (error || response.status !== 201) {
          console.log('source push error!');
          alert("发布失败，请稍后再试");
          self.deleteInputValue();
        } else {
          console.log('yay got ' + JSON.stringify(response.body));
          alert("发布成功");
          self.deleteInputValue();
        }
        });
      }
    }
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
      this.setState({introValuePlaceholde : "描述不能为空" });
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
        <Button bsStyle="danger" bsSize="large" onClick={this.publish.bind(this)}>提交</Button>
      </div>
    )
  }
}

export default WriteSource;