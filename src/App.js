import './App.css';
import Login from './Login';
import Navbar from './Navbar';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from "./Weather";
import { Route , Routes} from "react-router-dom";

function App() {
  return (
    <>  

        <Routes>
        <Route exact path="/" element={<Main/>} />
          <Route path="/weather"  element={<Weather/>}/>
       </Routes> 
    </>
  );
}

export default App;
