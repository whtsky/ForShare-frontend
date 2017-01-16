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

  render(){
    return(
      <div className="write-source">
        <h1 className="title-h">写文章</h1>
        <p className="title-p"><label className="of"></label>在这里添加链接<label className="on"></label></p>
        <form>
          <FormGroup bsSize="large">
            <FormControl type="text" placeholder="添加链接" />
          </FormGroup>
          <FormGroup controlId="formControlsTextarea" bsStyle="custom">
            <FormControl componentClass="textarea" placeholder="请输入关于链接的描述.." />
          </FormGroup>
        </form>
        <Button bsStyle="danger" bsSize="large">提交</Button>
      </div>
    )
  }
}

export default WriteSource;