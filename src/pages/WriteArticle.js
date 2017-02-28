import React from 'react';
import Simditor from 'simditor-new';
import $ from 'jquery';
import 'simditor-new/styles/simditor.css';

import Editor from '../components/Editor';

class WriteArticle extends React.Component{
  constructor(){
    super();

  }
  componentWillMount(){
    
  }

  render(){
    return (
      <Editor></Editor>
    );
  }
}

export default WriteArticle;