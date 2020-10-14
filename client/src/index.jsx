import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';

import Login from './components/Login.jsx';
import Home from './components/Home.jsx';
import CreateRide from './components/CreateRide.jsx';

const Index = () => {
  
  return (
    <Router>
      <div className='container'>
        <Switch>
          <Route path='/CreateRide' component={CreateRide} />
          <Route path='/Home' component={Home} />
          <Route path='/' component={Login} />
        </Switch>
      </div>
    </Router>
  )
  
}

export default Index;

ReactDOM.render(<Index />, document.getElementById('app'));