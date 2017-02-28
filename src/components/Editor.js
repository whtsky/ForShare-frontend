import React from 'react';
import Simditor from 'simditor-new';
import $ from 'jquery';
import 'simditor-new/styles/simditor.css';

class Editor extends React.Component{

  componentDidMount(){
    this.editor = new Simditor({
    textarea: $('#editor')
    });
  }

  render(){
    return(
      <textarea id="editor" placeholder="Balabala" autofocus></textarea>
    )
  }
  
}

export default Editor;