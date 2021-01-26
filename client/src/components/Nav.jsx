import React from 'react';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid'
import styled from 'styled-components';

const Nav = (props) => {
  return (
    <Centered>
      <img src={props.userInfo.picture} alt={props.userInfo.name} />
      <p>Welcome, {props.userInfo.name}!</p>
      <nav>
        <Grid container spacing={2}>
          <Grid item>
            <Link to='/CreateRide'>
              <button className="big-button">Create Ride Invite</button>
            </Link>
          </Grid>
          <Grid item>
            <Link to='/ViewRides'>
              <button className="big-button">View Upcoming Rides</button>
            </Link>
          </Grid>
        </Grid>
      </nav>
    </Centered>
  )
}

const Centered = styled.div`
  text-shadow: 1px 1px 5px #bdcfff;
  font-size: 1.5em;
  padding: 10px 10px 20px 10px;
  display: grid;
  place-items: center;
`;

export default Nav;