import React, { Component, useEffect } from 'react'
import FacebookLogin from 'react-facebook-login'
import { useNavigate } from "react-router-dom";

import './App.css';

const Fb = () => {
  const navigate = useNavigate()
  const responseFacebook = (response) => {
    
    window.localStorage.setItem('fbID' , response.id);
    navigate('/calender'); 
   
  } 
 
  return (
    <>
        <div className='fb'>
    
        <FacebookLogin
    appId={process.env.REACT_APP_FACEBOOK_ID_KEY}
    autoLoad={true}
    fields="name,email,picture"
    callback={responseFacebook} />,
      </div>
    </>
  )
}

export default Fb

