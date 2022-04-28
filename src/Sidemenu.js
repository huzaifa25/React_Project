import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidemenu.css'
import {Navigate} from 'react-router-dom'

function logoutId (){
    
    window.localStorage.removeItem('id');
    Navigate('/')
}

export default props => {
  return (
      <>
    
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/salads">
        About
      </a>
      <a className="menu-item" href="/pizzas">
       Gallery
      </a>
      <a className="menu-item" onClick={logoutId} href="/">
        Logout
      </a>
    </Menu>
    </>
  );  
};