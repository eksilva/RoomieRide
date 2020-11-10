import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const Nav = (props) => {
  return (
    <Centered>
      <Img src={props.userInfo.picture} alt={props.userInfo.name} />
      <p>Welcome, {props.userInfo.name}!</p>
      <nav>
        <Link to='/CreateRide'>
          <Button variant="contained" color="primary">Create Ride Invite</Button>
        </Link>
        <Link to='/ViewRides'>
          <Button variant="contained" color="primary">View Upcoming Rides</Button>
        </Link>
      </nav>
    </Centered>
  )
}

const Img = styled.img`
  width: 80px;
  height: 80px;
  border: 3px solid #4c00ff;
  border-radius: 40px;
`;

const Centered = styled.div`
  font-size: 1.5em;
  padding: 10px 10px 20px 10px;
  display: grid;
  place-items: center;
`;

export default Nav;