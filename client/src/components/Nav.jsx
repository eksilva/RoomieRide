import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = (props) => {
  return (
    <Centered>
      <Img src={props.userInfo.picture} alt={props.userInfo.name} />
      <p>Welcome, {props.userInfo.name}!</p>
      <nav>
        <Link to='/CreateRide'>
          <button type='button'>Create Ride</button>
        </Link>
        <Link to='/ViewRides'>
          <button type='button'>View Upcoming Rides</button>
        </Link>
      </nav>
    </Centered>
  )
}

const Img = styled.img`
  width: 80px;
  height: 80px;
  border: 1px solid grey;
  border-radius: 40px;
`;

const Centered = styled.div`
  display: grid;
  place-items: center;
`;

export default Nav;