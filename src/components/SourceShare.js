import React from 'react';
import ajax from 'superagent';
import { FormGroup, FormControl, Button } from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';

import './SourceShare.css';

bootstrapUtils.addStyle(FormControl, 'custom');

class SourceShare extends React.Component{
  constructor(props){
    super(props);

    this.state= {
      resource: [],
      comments: [],
      urlPublishTime: 0
    }
  }

  componentWillMount(){
    const baseUrl = 'http://182.92.209.117:2168/fundpart';

    ajax.get(`${baseUrl}/urlpublish/${this.props.params.id}`)
    .end((error, response) => {
      if(!error && response){
        this.setState({ resource : response.body });
        this.setState({ urlPublishTime : response.body.urlpublish_time.slice(0, 16) });
      }else{
        console.log("resource fetching error!");
      }
    })

    ajax.get(`${baseUrl}/urlcomment/?comment1=${this.props.params.id}`)
    .end((error, response) => {
      if(!error && response){
        this.setState({ comments : response.body.results });
      }else{
        console.log("comments fetching error");
      }
    })
  }

  render(){
    const length = this.state.resource.length;
    return(
      <div className="source-share">
        <div className="source">
          <div className="source-title">
            <b className="b-username">{this.state.resource.username}</b> 
            <b className="b-publishtime">{this.state.urlPublishTime}</b>
          </div>
          <p>
            {this.state.resource.urlintroduce}
          </p>
          <p>
            <a href={this.state.resource.urlmessage}>{this.state.resource.urlmessage}</a>
          </p>
        </div>
        <div className="comment-source">
          <div><h4>评论：{length}</h4></div>
          <div className="comment-list">
            {
              this.state.comments.map((comment, index) => {
                const username = comment.username;
                const commentTime = comment.comment_time.slice(0, 16);
                const content = comment.content;

                return (
                  <div className="comment" key={index}>
                    <p><b className="b-comment-username">{username}</b><b className="b-comment-time">{commentTime}</b></p>
                    <p>{content}</p>
                  </div>
                )
              })
            }
          </div>
          <div className="write-comment">
            <form>
              <FormGroup bsStyle="custom">
                <FormControl type="text" placeholder="写下你的评论.." />
              </FormGroup>
            </form>
            <Button bsStyle="danger">提交</Button>
            <Button>取消</Button>
          </div>
        </div>
      </div>  
    )
  }
}

export default SourceShare;