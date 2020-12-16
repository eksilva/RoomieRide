import React, { Component } from 'react';
import axios from 'axios';
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
    let userData = {
      fbID: data.fbID,
      name: data.name,
      email: data.email,
      picture: data.picture.data.url
    }
    //TODO: check for existing user; post to db if new, update (put) if existing in case of prof pic update, name change, etc
    // axios.get(`http://localhost:3000/api/users`)
    //   .then(res => {
    //     console.log(res);
    //     logic for post|put
          // axios.post(`http://localhost:3000/api/users/add`, { userData })
          //   .then((response) => {
          //     console.log(response);
          //   })
          //   .catch((error) => {
          //     console.log(error);
          //   });
    //   })
    //   .catch(err => {
    //   console.log(err);
    //   })
    
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
              <Route path='/CreateRide' component={CreateRide} userInfo={this.state.userInfo}/>
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
  display: grid;
  margin: auto;
  padding-bottom: 1%;
  place-items: center;
`;

