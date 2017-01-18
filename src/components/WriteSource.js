import React from 'react';
import ajax from 'superagent';
import { FormGroup, FormControl, Button } from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';

import './WriteSource.css';

bootstrapUtils.addStyle(FormControl, 'custom');
bootstrapUtils.addStyle(Button, 'custom');

class WriteSource extends React.Component{

  constructor(props){
    super(props);

    ajax.post("")
  }

  publish(){
    // const publishContent = {
    //   urlMessage: this.refs.url.value,
    //   urlIntroduce: this.refs.introduce.value
    // }

    // const baseUrl="http://182.92.209.117:2168/fundpart";
    // ajax.post(`${baseUrl}/urlpublish`)
    // .send(publishContent)
    // .set('Accept', 'application/json')
    // .end(function(error, response){
    //  if (error || !response.ok) {
    //    alert('Oh no! error');
    //  } else {
    //    alert('yay got ' + JSON.stringify(response.body));
    //  }
    // });
    alert(this.refs.url.value);
  }

  render(){
    return(
      <div key="write-source" className="write-source">
        <h1 className="title-h">写文章</h1>
        <p className="title-p"><label className="of"></label>在这里添加链接<label className="on"></label></p>
        <form>
          <FormGroup bsSize="large">
            <FormControl type="text" placeholder="添加链接" inputRef={ url => { this.input = url; }} />
          </FormGroup>
          <FormGroup controlId="formControlsTextarea" bsStyle="custom">
            <FormControl componentClass="textarea" placeholder="请输入关于链接的描述.." inputRef={ introduce => { this.input = introduce; }} />
          </FormGroup>
        </form>
        <Button bsStyle="danger" bsSize="large" onClick={this.publish.bind(this)}>提交</Button>
      </div>
    )
  }
}

export default WriteSource;