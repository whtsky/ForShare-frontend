import React from 'react';
import Simditor from 'simditor-new';
import 'simditor-new/styles/simditor.css';

class Editor extends React.Component{

  componentDidMount(){
    this.editor = new Simditor({
      textarea: ('#editor'),
      pasteImage: true,
      upload:{
        url: '',
        type: 'photo'
      },
      params: null,
      fileKey: 'upload_file',
      connectionCount: 3,
      leaveConfirm: 'Uploading is in progress, are you sure to leave this page?',
      toolbar: [
        'title',
        'bold',
        'italic',
        'underline',
        'strikethrough',
        'fontScale',
        'color',
        'ol',      
        'ul',       
        'blockquote',
        'code',     
        'table',
        'link',
        'image',
        'hr',     
        'outdent',
        'alignment',
      ]
    })

    if(this.props.content !== undefined){
      this.editor.setValue(this.props.content);
      alert(this.props.content);
    }
  }

  setValue = (content) => {
      this.editor.setValue(content);
  }

  getValue = () => {
    return this.editor.getValue();
  }

  render(){
    return(
      <textarea id="editor" placeholder="请在这里写入文章"></textarea>
    )
  }
}

Editor.propTypes = {
  content: React.PropTypes.string
};
export default Editor;