import Page from './components/Page/Page';
import Login from './Login';
import Navbar from './Navbar';
import './App.css';
import Sidemenu from './Sidemenu';
function Main() {
    return(
        <>
        <Navbar/> 
         <Login/>
         {/* <div className='weather1'><Page/></div> */}
        </>
    );
}
export default Main