import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
 //import { Container, Row , col} from "react-bootstrap";
 import Col from 'react-bootstrap/Col'
 import Row from 'react-bootstrap/Row'
 import Container from 'react-bootstrap/Container'
import './App.css';


function Login(){
    return(
        <>
            
                <Row>
                    <Col className="column col-3" >1 of 2</Col>
                    <Col  className="column col-9" > 2 of 2 (wider)</Col>
                </Row>
            
        </>
    )
}
export default Login