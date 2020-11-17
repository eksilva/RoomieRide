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
          <H1>Roomie Ride</H1>
          <LoginButton onLogin={this.onLogin}/>
        </Centered>
      )
    } else {
      return (
        <Router>
          <Centered>
            <H1>Roomie Ride</H1>
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

const H1 = styled.p`
  font-size: 3em;
  font-weight: bold;
`;

const Centered = styled.div`
  font-family: '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"';
  color: white;
  background-color: #391c7d;
  box-shadow: 2px 2px 10px grey, 
             -2px -2px 10px grey;
  display: grid;
  margin: auto;
  padding-bottom: 1%;
  place-items: center;
`;