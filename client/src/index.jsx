import React, { Component } from 'react'
import ReactDOM from 'react-dom';

export default class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
       
    }
  }
  

  componentDidMount() {
    
  }
  
  render() {
    return (
      <div>
        <h1>Hi</h1>
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('app'));