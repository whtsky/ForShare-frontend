import React from 'react';
import ReactDOM from 'react-dom';
import ajax from 'superagent';
import { FormGroup, FormControl, Button } from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';

import baseUrl from './config';
import './WriteSource.css';

bootstrapUtils.addStyle(FormControl, 'custom');

class WriteSource extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      publishContent: ""
    }
  }

  publish(){
    let date = new Date();
    let year = date.getFullYear() > 10 ? date.getFullYear() : '0' + date.getFullYear();
    let day = date.getDay() > 10 ?  date.getDay() : '0' + date.getDay();
    let mouth = date.getMonth() > 10 ? date.getMonth() : '0' + date.getMonth();
    let hour = date.getHours() > 10 ? date.getHours() : '0' + date.getHours();
    let minute = date.getMinutes() > 10 ? date.getMinutes() : '0' + date.getMinutes();
    let publishTime = year + '-' + mouth + '-' + day + '-' + hour + ':' + minute;

    const content = {
      username: "",
      urlpublish_time: publishTime,
      urlmessage: ReactDOM.findDOMNode(this.refs.urlValue).value,
      urlintroduce: ReactDOM.findDOMNode(this.refs.introValue).value
    }
    this.setState({ publishContent : content });

    ajax.post(`${baseUrl}/urlpublish`)
      .send(this.state.publishContent)
      .set('Accept', 'application/json')
      .end(function(error, response){
      if (error || !response.ok) {
        console.log('source push error!');
      } else {
        console.log('yay got ' + JSON.stringify(response.body));
      }
      });
  }

  render(){
    return(
      <div key="write-source" className="write-source">
        <h1 className="title-h">写文章</h1>
        <p className="title-p"><label className="of"></label>在这里添加链接<label className="on"></label></p>
        <form>
          <FormGroup bsSize="large">
            <FormControl type="text" placeholder="添加链接" ref="urlValue" />
          </FormGroup>
          <FormGroup controlId="formControlsTextarea" bsStyle="custom">
            <FormControl componentClass="textarea" placeholder="请输入关于链接的描述.." ref="introValue" />
          </FormGroup>
        </form>
        <Button bsStyle="danger" bsSize="large" onClick={this.publish.bind(this)}>提交</Button>
      </div>
    )
  }
}

export default WriteSource;