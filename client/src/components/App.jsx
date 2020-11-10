import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginButton from './LoginButton.jsx';

import Nav from './Nav.jsx';
import CreateRide from './CreateRide.jsx';
import UpcomingRides from './UpcomingRides.jsx';

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
    console.log(data);
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
        <Centered>
          <h1>Roomie Ride</h1>
          <LoginButton onLogin={this.onLogin}/>
        </Centered>
      )
    } else {
      return (
        <Router>
          <Centered>
            <Nav userInfo={this.state.userInfo} />
            <Switch>
              <Route path='/CreateRide' component={CreateRide}/>
              <Route path='/ViewRides' component={UpcomingRides}/>
            </Switch>
          </Centered>
        </Router>
      )
    }
  }
}

const Centered = styled.div`
  font-family: 'Crimson Text', serif;
  color: white;
  background-color: #370f95;
  box-shadow: 2px 2px 10px grey, 
             -2px -2px 10px grey;
  border: 6px solid #4c00ff;
  display: grid;
  margin-left: 25%;
  margin-right: 25%;
  margin-top: 5%;
  padding-bottom: 1%;
  place-items: center;
`;