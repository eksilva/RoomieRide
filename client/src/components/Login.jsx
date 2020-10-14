import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      userID: '',
      name: '',
      email: '',
      picture: '',

    }

    this.responseFacebook = this.responseFacebook.bind(this);
    this.componentClicked = this.componentClicked.bind(this);
  }

  responseFacebook(response) {
    console.log(response);

    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
    });
    
  }

  componentClicked() {
    console.log('clicked');
  }

  render() {
    let fbContent; 

    if (this.state.isLoggedIn) {
      fbContent = (
        <div>
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Welcome, {this.state.name}</h2>
        </div>
      )
    } else {
      fbContent = (
        <FacebookLogin
          appId="827248551418968"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}     
        />
      )
    }
    return (
      <div>
        <h1>Roomie Ride</h1>
        {fbContent}
      </div>
    )
  }
}
