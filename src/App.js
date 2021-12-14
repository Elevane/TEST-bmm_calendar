

import React from 'react';
import './App.css';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!



  export default class App extends React.Component {
    render() {
      return (
        <FullCalendar
          plugins={[ dayGridPlugin ]}
          initialView="dayGridMonth"
          events={[
            { title: 'event 1', start: '2021-12-14', end: "2021-12-18" },
            { title: 'event 2', date: '2021-12-14' }
          ]}
        />
      )
    }
  }