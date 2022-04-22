import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import { useNavigate } from "react-router-dom";

// export class Fb extends Component {
function Fb() {  
  
  let navigate = useNavigate();
  const responseFacebook=(response)=>{
    navigate('weather');
    console.log(response);
  
  }
  // render() {
    return (
      <div>
        <FacebookLogin
        appId="1193468328058792"
        autoLoad={true}
        fields="name,email,picture"
        disableMobileRedirect={true}
        // onSuccess={responseFacebook}
        callback={responseFacebook} 
        />
      </div>
    )
  // }
}

export default Fb