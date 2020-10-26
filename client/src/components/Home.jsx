import React, { useState } from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

// import CreateRide from './CreateRide.jsx';

const Home = ({ userInfo }) => {
  return (
    <div>
      <Img src={userInfo.picture} alt={userInfo.name} />
      <p>Welcome, {userInfo.name}!</p>
    </div>
  )
}

const Img = styled.img`
  width: 80px;
  height: 80px
`;

export default Home;
