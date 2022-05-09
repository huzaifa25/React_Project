import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import { useNavigate } from "react-router-dom";

import './App.css';

const Fb = () => {
  const navigate = useNavigate()
  const responseFacebook = (response) => {
    
    if(response){
      console.log(response)
      window.localStorage.setItem('fbID' , response.id);
      navigate('/calender'); 
     console.log(response);
     window.location.reload();
     
    }
    else if(response.id = null){
      navigate('/');
    }
    else{
      navigate('/');
    }
  } 
  const componentClicked =(data) => {
    console.warn(data)
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

