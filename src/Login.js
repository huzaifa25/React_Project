import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
 //import { Container, Row , col} from "react-bootstrap";
 import Col from 'react-bootstrap/Col';
 import Row from 'react-bootstrap/Row';
 import Container from 'react-bootstrap/Container';
 import GoogleLogin from "react-google-login";
import './App.css';
import { Route , Routes} from "react-router-dom";
import Weather from "./Weather";
//const img = "https://images.unsplash.com/photo-1562184552-d33c64b991ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";
//const imgq ="https://imgs.bharatmatrimony.com/bmimgs/login/login-otp-banner.png";
const img ='https://static.vecteezy.com/system/resources/previews/003/689/228/non_2x/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg';


function Login(){
    const handleFailure = (result) => {
        alert(result);
    };
    const handleLogin = (googleData) => {
        <Routes>
            <Route path="/weather" element={<Weather/>}/>
        </Routes>
        console.log(googleData);
    }
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
                                <GoogleLogin
                                    clientId={"762663928657-fh4qk2lb3qdg83ch409e4h4j7c67kecp.apps.googleusercontent.com"}
                                    buttonText="Login with Google"
                                    onSuccess={handleLogin}
                                    onFailure={handleFailure}
                                    cookiePolicy={'single_host_origin'}
                                    />
                                {/* <button class="button button2">Login</button> */}
                            </div>
                        </section>  
                    </Col>
                </Row>
            
        </>
    )
}
export default Login