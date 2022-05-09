import axios from 'axios';
//import './App.css';
import {useState,useEffect} from 'react'


function IpAddress() {
  //creating IP state
  const [ip, setIP] = useState('');

  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    setIP(res.data.IPv4)
    window.localStorage.setItem('res', res.data.city);
  }
  
  useEffect( () => {
    //passing getData method to the lifecycle method
    getData()

  }, [])

  return (
    <div className="App">
      
    </div>
  );
}

export default IpAddress;