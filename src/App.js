import './App.css';
import Login from './Login';
import Navbar from './Navbar';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from "./Weather";
import { Route , Routes} from "react-router-dom";
import Calender from './Calender';
import Page from './components/Page/Page';

function App() {
  return (
    <>  

        <Routes>
        <Route exact path="/" element={<Main/>} />
          <Route path="/weather"  element={<Weather/>}/>
          <Route path="/calender" element={<Calender/>}/>
          <Route path="/page" element={<Page/>}/>
       </Routes> 
    </>
  );
}

export default App;
