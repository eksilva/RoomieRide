import React, { Component } from 'react';
import axios from 'axios';
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
      fbID: data.userID,
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
    console.log(userData);
    this.setState({
      isLoggedIn: true,
      userInfo: userData
    });
  }

  render() {
    if (!this.state.isLoggedIn) {
      return (  
        <div className="main-app">
          <h1>Roomie Ride</h1>
          <LoginButton onLogin={this.onLogin}/>
        </div>
      )
    } else {
      return (
        <Router>
          <div className="main-app">
            <h1>Roomie Ride</h1>
            <Nav userInfo={this.state.userInfo} />
            <Switch>
              <Route path='/CreateRide' render={() => (
                                                  <CreateRide userInfo={this.state.userInfo} />
                                                )}
                  />
              <Route path='/ViewRides' render={() => (
                                                  <UpcomingRides userInfo={this.state.userInfo} />
                                                )}
                  />
            </Switch>
          </div>
        </Router>
      )
    }
  }
}

