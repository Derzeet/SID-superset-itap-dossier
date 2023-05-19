import React, { useEffect } from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
// import allLocales from '@fullcalendar/core/locales-all';
import './Calendar.css'

function CalendarPage(props) {

  return (
    <>
      <div style={{ width: '40%', marginLeft: '10%', paddingTop: '5%' }}>
        <FullCalendar
          locale={'ru-RU'}
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          selectable={true}
        />
      </div>
    </>
  );
}

export default CalendarPage;
