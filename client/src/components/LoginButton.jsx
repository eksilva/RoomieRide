import React from 'react';
import FacebookLogin from 'react-facebook-login';

const { APPID } = process.env;

const LoginButton = (props) => {
  return (
    <FacebookLogin
      appId={APPID}
      autoLoad={true}
      fields="name,email,picture"
      callback={props.onLogin}     
    />
  )
}


export default LoginButton;