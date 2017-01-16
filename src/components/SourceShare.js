import React from 'react';
import ajax from 'superagent';

class SourceShare extends React.Component{
  constructor(props){
    super(props);

    this.state= {
      resource: []
    }
  }

  componentWillMount(){
    ajax.get("")
    .end((error, response) => {
      if(!error && response){
        this.setState({ resource : response.body });
      }else{
        console.log("fetching error!");
      }
    })
  }
  render(){
    return(null)
  }
}

export default SourceShare;