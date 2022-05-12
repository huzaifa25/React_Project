import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidemenu.css'
import {useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react';


const Sidemenu = () => {
  const [useData, setData] = useState(false)
  function logoutId (){
      
      window.localStorage.removeItem('id');
      window.localStorage.removeItem('fbID');
      setData(true)
  
      
  }
  const navigate = useNavigate()
  const fb_data = localStorage.getItem('fbID')
  const google_data = localStorage.getItem('id')
  useEffect(()=>{
    if(!fb_data && !google_data ) {
      navigate('/')
    }
  })
  return (
      <>
    
    <Menu>
      <a className="menu-item" onClick={logoutId} href="/">
        Logout
      </a>
    </Menu>
    </>
  );  
}


export default Sidemenu