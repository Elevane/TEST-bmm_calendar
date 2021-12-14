

import React from 'react';
import './App.css';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import Manager from './manager'


  export default class App extends React.Component {
    constructor(props){
      super(props)
      
    }
    render() {
      return (
        <FullCalendar
          plugins={[ dayGridPlugin ]}
          initialView="dayGridMonth"
          events={ Manager()}
        />
      )
    }
  }