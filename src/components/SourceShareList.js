import React from 'react';
import ajax from 'superagent';
import './SourceShareList.css';
import baseUrl from './config';
import { Button, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class SourceShareList extends React.Component{
  constructor(props){
    super(props);

    this.state= {
      sourceList: []
    }
  }

  componentWillMount(){
    ajax.get(`${baseUrl}/urlpublish/?limit=10`)
    .end((error, response) => {
      if(!error && response){
        this.setState({ sourceList : response.body.results });
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
        <div className="source-card-list">
        {
          this.state.sourceList.map((source) => {
            const id = source.id;
            const userName = source.username;
            const urlMessage = source.urlmessage;
            const urlintroduce = source.urlintroduce;
            const urlPubulishTime = source.urlpublish_time.slice(0, 16);
            const urlReadCount = source.urlreadcount;
            const commentLength = source.urlcomment_set.length;

            return (
                <div className="source-card" key={source.id}>
                  <p>
                    <b className="b-by">BY</b>
                    <b className="b-username">{userName}</b>
                    <b className="b-publishtime">{urlPubulishTime}</b>
                    阅读量：{urlReadCount} 
                    评论量：{commentLength}
                  </p>
                  <p>{urlintroduce}</p>
                  <LinkContainer to={`/source-share/results/${id}`}>
                    <NavItem>                           {/* 防止<Button> 被自动转换成<a>导致样式混乱 */}
                      <Button bsStyle="danger">了解详情</Button>
                    </NavItem>
                  </LinkContainer>
                </div>
            )
          }
          )
        }</div>
      </div>
    )
  }
}

export default SourceShareList;