import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

import Home from './Home.jsx';
import LoginButton from './LoginButton.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      userInfo: null
    }
    this.onLogin = this.onLogin.bind(this);
  }

  onLogin(data) {
    // console.log(data);
    let userData = {
      userID: data.userID,
      name: data.name,
      email: data.email,
      picture: data.picture.data.url
    }
    this.setState({
      isLoggedIn: true,
      userInfo: userData
    });
  }

  render() {
    if (!this.state.isLoggedIn) {
      return (
        <LoginButton onLogin={this.onLogin}/>
      )
    } else {
      return (
        <Home userInfo={this.state.userInfo} />
      )
    }
  }
}
