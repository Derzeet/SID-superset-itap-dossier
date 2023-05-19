import React, { useEffect, useRef, useState } from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
// import allLocales from '@fullcalendar/core/locales-all';
import './Calendar.scss'

function CalendarPage(props) {
  let fc_today, fc_next, fc_prev;

  const calendarRef = useRef(null);
  const [events, setEvents] = useState([])
  const [showEvent, setShowEvent] = useState(true)

  useEffect(() => {
    fc_today = document.querySelector('.fc-today-button[title="This month"]');
  }, [])

  const handleDateClick = (arg) => { 
    console.log("dateClick", arg)

    console.log(calendarRef)
  }

  return (
    <>
      <div style={{}} className='calendarPage'>
        <div className='calendar-container'>
          <FullCalendar
            ref={calendarRef}
            locale={'ru-RU'}
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            selectable={true}
            dateClick={handleDateClick}
            eventContent={renderEventContent}

            headerToolbar={{
              left: "prev,today,next",
              center: "",
              right: "title"
            }}
            buttonText={{
              today: "Сегодня",
              month: "Месяц",
              week: "Неделя",
              day: "День",
              list: "Список"
            }}
            editable={true}
            // selectMirror={true}
            dayMaxEvents={true}
            weekends={true}
            //
            eventAdd={(e) => {
              console.log("eventAdd", e);
            }}
            eventChange={(e) => {
              console.log("eventChange", e);
            }}
            eventRemove={(e) => {
              console.log("eventRemove", e);
            }}
          />
        </div>

        {showEvent ? <div className="events-block">

          <div className='event-info'>
            <div className='event-header'>
              <div className='event-date'>2023-08-11</div>
              <div className='event-title'>Собрание</div>
            </div>
            <div className="event-body">
              <div className="event-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptatibus alias ipsam nisi minus possimus odit facilis assumenda enim repudiandae. Minima velit officiis pariatur ut porro. Eveniet, voluptatem! Nobis, inventore?</div>
            </div>
          </div>

          <div className='event-info'>
            <div className='event-header'>
              <div className='event-date'>2023-08-11</div>
              <div className='event-title'>Собрание</div>
            </div>
            <div className="event-body">
              <div className="event-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptatibus alias ipsam nisi minus possimus odit facilis assumenda enim repudiandae. Minima velit officiis pariatur ut porro. Eveniet, voluptatem! Nobis, inventore?</div>
            </div>
          </div>

        </div> : ""}
      </div>
    </>
  );
}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}

export default CalendarPage;
