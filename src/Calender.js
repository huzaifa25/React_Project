import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
//import { dayGridPlugin } from "@fullcalendar/daygrid";
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import './App.css';
// import the third-party stylesheets directly from your JS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // needs additional webpack config!
import Page from "./components/Page/Page";
import Sidemenu from "./Sidemenu";

class Calender extends Component{
    render(){
        return(
            <>
            <Sidemenu/>
            <Page/>
            <FullCalendar

            plugins={[ dayGridPlugin ]}

            defaultView="dayGridMonth"
           
            events={[
              { title: 'Event 2', date: '2022-04-28' },
              { title: 'Independense Day', date: '2022-03-28' },
              { title: 'Independense Day', date: '2022-04-01' },
              { title: 'Independense Day', date: '2022-04-05' }
            ]}
         
            />
            </>
        
           
        )
        
    
        
        
    }
}
export default Calender