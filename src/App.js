import './Pages/App.css';
import Main from './Pages/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Navigate, Route, Routes } from "react-router-dom";
import Calender from './Pages/Calender';
import Page from './components/Page/Page';
import Sidemenu from './Pages/Sidemenu';
import IpAddress from './Pages/IpAddress';

function App() {
  const id = window.localStorage.getItem('id');
  const fbId = window.localStorage.getItem('fbID');
  
  return (
    <>
    <IpAddress/>
      <Routes>

          <>
          <Route push path="/" element={<Main />} />
            <Route exact path="/calender" element={<Calender />} />
           
          </>
        
      </Routes>
     
    </>
  );

  

}

export default App;
