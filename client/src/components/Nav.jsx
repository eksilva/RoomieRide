import React from 'react';
import { Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components';

const Nav = (props) => {
  return (
    <Centered>
      <Img src={props.userInfo.picture} alt={props.userInfo.name} />
      <p>Welcome, {props.userInfo.name}!</p>
      <nav>
        <Grid container spacing={2}>
          <Grid item>
            <Link to='/CreateRide'>
              <Fab variant="contained" color="primary">Create Ride Invite</Fab>
            </Link>
          </Grid>
          <Grid item>
            <Link to='/ViewRides'>
              <Fab variant="contained" color="primary">View Upcoming Rides</Fab>
            </Link>
          
          </Grid>
        </Grid>
      </nav>
    </Centered>
  )
}

const Img = styled.img`
  width: 80px;
  height: 80px;
  border: 3px solid #3f51b5;
  border-radius: 40px;
`;

const Centered = styled.div`
  font-size: 1.5em;
  padding: 10px 10px 20px 10px;
  display: grid;
  place-items: center;
`;

export default Nav;