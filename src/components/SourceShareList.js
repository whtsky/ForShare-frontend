import React from 'react';
import ajax from 'superagent';
import './SourceShareList.css';

class SourceShareList extends React.Component{
  // constructor(props){
  //   super(props);

  //   this.state= {
  //     sourceList: []
  //   }
  // }

  // componentWillMount(){
  //   ajax.get("http://182.92.209.117:2168/fundpart/urlpublish")
  //   .end((error, response) => {
  //     if(!error && response){
  //       this.setState({ sourceList : response.body });
  //     }else{
  //       console.log("fetching error!");
  //     }
  //   });
  // }

  render() {
    return (
      <div className="source-share-list">
        <h1 className="title-h">资源分享</h1>
        <p className="title-p"><label className="of"></label>来自IT各个领域的学习资源<label className="on"></label></p>
       
      </div>
    )
  }
}

export default SourceShareList;