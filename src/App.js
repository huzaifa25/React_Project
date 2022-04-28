import './App.css';
import Login from './Login';
import Navbar from './Navbar';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from "./Weather";
import { Route, Routes, useNavigate } from "react-router-dom";
import Calender from './Calender';
import Page from './components/Page/Page';
import Sidemenu from './Sidemenu';
function App() {
  const id = window.localStorage.getItem('id');
  console.log(id)

  return (
    <>

      <Routes>
        {!id  && <Route exact path="/" element={<Main />} />}
        {id && (
          <>
          
            <Route path="/calender" element={<Calender />} />
            <Route path="/page" element={<Page />} />
            <Route path="/side" element={<Sidemenu />} />
          </>
        )}  
          {/* <Route path="/weather" element={<Weather />} /> */}
      </Routes>
    </>
  );
}

export default App;
