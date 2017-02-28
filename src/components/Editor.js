import React from 'react';
import Simditor from 'simditor-new';
import $ from 'jquery';
import 'simditor-new/styles/simditor.css';

class Editor extends React.Component{

  componentDidMount(){
    
  }

  render(){
    return(
      <textarea id="editor" placeholder="Balabala" autofocus></textarea>
    )
  }
  
}

export default Editor;