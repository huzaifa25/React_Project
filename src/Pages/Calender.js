import React, { Component } from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import Page from "../components/Page/Page.jsx";
import Sidemenu from "./Sidemenu";
import './Calender.css';
import Navbar from "./Navbar";

function Calender(){

   
    const events = [
        {
          id: 1,
          title: 'event 1',
          start: '2022-05-14T10:00:00',
          end: '2022-05-16T12:00:00',
        },
        {
          id: 2,
          title: 'event 2',
          start: '2022-05-13T13:00:00',
          end: '2022-05-13T18:00:00',
        },
        { 
          id: 3, 
          title: 'event 3', 
          start: '2022-05-03', 
          end: '2022-05-05' 
        },
        { 
            id: 4, 
            title: 'event 4', 
            start: '2022-05-13T01:00:00', 
            end: '2022-05-13T05:00:00' },
            
      ];

        return(
            <>
            
             <Sidemenu/>
            <Navbar/>
            <Page/>
            <div className="cal">
               
                    <FullCalendar
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                        initialView="dayGridMonth"
                        headerToolbar={{
                            left: "prev,next,today",
                            center: "title",
                            right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
                          }}
                       
                          events={events}
                    />
            </div>
            </>
        
           
        )
        
    
        
        
    }

export default Calender