import React from 'react'

const Home = ({ userInfo }) => {
  return (
    <div>
      <img src={userInfo.picture} alt={userInfo.name} />
      <p>Welcome, {userInfo.name}!</p>
    </div>
  )
}

export default Home;
