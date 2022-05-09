import React, { Component, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {GoogleLogin} from "react-google-login";
import './App.css';
import { useNavigate, Link } from "react-router-dom";
import { useState } from 'react';
import Fb from "./Fb";
const img = 'https://static.vecteezy.com/system/resources/previews/003/689/228/non_2x/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg';


function Login() {
    
    const [loginData, setLoginData] = useState(
        localStorage.getItem('loginData')
            ? JSON.parse(localStorage.getItem('loginData'))
            : null
    );

   
    var navigate = useNavigate();
    const handleLogin = (googleData) => {
        
        window.localStorage.setItem('id', googleData.googleId);
        navigate('/calender')
        window.location.reload();
    
    }

    return (
        <>
            <Row>
                <Col className="column" lg={5} md={4} >
                    <div><img src={img} alt="login pic" className="login-pic" /></div>
                </Col>
                <Col className="column " lg={7} md={8} >
                    <section className="login-box">
                        <div className="signup-form">
                            <p className="heading">Login</p>
                            <div>
                                {loginData ? (
                                    <div>

                                    </div>
                                ) : (
                                    <GoogleLogin
                                        clientId={process.env.REACT_APP_GOOGLE_ID_KEY}
                                        buttonText="Log in with Google"
                                        onSuccess={handleLogin}
                                        cookiePolicy={'single_host_origin'}
                                    ></GoogleLogin>
                                )}
                            </div>
                            <br></br>
                            <div>
                                <Fb />
                            </div>
                        </div>

                    </section>
                </Col>
            </Row>

        </>
    )
}
export default Login