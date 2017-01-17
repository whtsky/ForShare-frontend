import React from 'react';
import ajax from 'superagent';
import './SourceShareList.css';

class SourceShareList extends React.Component{
  constructor(props){
    super(props);

    this.state= {
      sourceList: []
    }
  }

  componentWillMount(){
    const baseUrl = "http://182.92.209.117:2168/fundpart";

    ajax.get(`${baseUrl}/urlpublish`)
    .end((error, response) => {
      if(!error && response){
        this.setState({ sourceList : response.body });
      }else{
        console.log("fetching error!");
      }
    });
  }

  render() {
    return (
      <div className="source-share-list">
        <h1 className="title-h">资源分享</h1>
        <p className="title-p"><label className="of"></label>来自IT各个领域的学习资源<label className="on"></label></p>
        {
          this.state.sourceList.map((source) => {
            const id = source.id;
            const userName = source.username;
            const urlMessage = source.urlmessage;
            const urlintroduce = source.urlintroduce;
            const urlPubulishTime = source.urlpublish_time;
            const urlReadCount = source.urlreadcount;

            return (
              <div key={source.id}>
                <p>BY{userName}urlPubulishTime</p>
                <div>了解详情</div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default SourceShareList;