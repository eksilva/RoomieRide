import React from 'react';
import FacebookLogin from 'react-facebook-login';

const LoginButton = (props) => {
  return (
    <FacebookLogin
      appId="827248551418968"
      autoLoad={true}
      fields="name,email,picture"
      callback={props.onLogin}     
    />
  )
}


export default LoginButton;