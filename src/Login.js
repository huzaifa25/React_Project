import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import GoogleLogin from "react-google-login";
//import FacebookLogin from "react-facebook-login";
import './App.css';
import { Route , Routes} from "react-router-dom";
import Dashboard from "./Dashboard";
import  { Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Fb from "./Fb";
const img ='https://static.vecteezy.com/system/resources/previews/003/689/228/non_2x/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg';


function Login(){
    let navigate = useNavigate();
    const [loginData, setLoginData] = useState(
        localStorage.getItem('loginData')
          ? JSON.parse(localStorage.getItem('loginData'))
          : null
      );

    const handleFailure = (result) => {
        alert(result);
    };
    const handleLogin = (googleData) => {
        navigate('dashboard');
      
        console.log(googleData);
    }
    const handleLogout = () => {
        localStorage.removeItem('loginData');
        setLoginData(null);
      };
    return(
        <>  
            
                <Row>
                    <Col className="column" lg={5} md={4} >
                     <div><img src={img} alt="login pic" className="login-pic"/></div>
                    </Col>
                    <Col  className="column "lg={7} md={8} >
                        <section className="login-box">
                            <div className="signup-form">
                                <p className="heading">Login</p>
                                <div>
                                  {loginData ? (
                                      <div>
                                          
                                     </div>
                                    ) : (
                                        <GoogleLogin
                                        clientId={"762663928657-fh4qk2lb3qdg83ch409e4h4j7c67kecp.apps.googleusercontent.com"}
                                        buttonText="Log in with Google"
                                        onSuccess={handleLogin}
                                        onFailure={handleFailure}
                                        cookiePolicy={'single_host_origin'}
                                        ></GoogleLogin>
                                    )}
                                 </div>
                                 <div>
                                     <Fb/>
                                 </div>
                            </div>
                            
                        </section>  
                    </Col>
                </Row>
            
        </>
    )
}
export default Login