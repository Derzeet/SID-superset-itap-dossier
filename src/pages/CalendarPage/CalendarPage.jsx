import React, { useEffect, useRef, useState } from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
// import allLocales from '@fullcalendar/core/locales-all';
import './Calendar.scss'
import SideBar from "../../components/side-bar";

function CalendarPage(props) {
  const calendarRef = useRef(null);
  const [events, setEvents] = useState([])
  const [showEvent, setShowEvent] = useState(true)

  const [eventTitle, setEventTitle] = useState("")
  const [eventStart, setEventStart] = useState("")
  const [eventEnd, setEventEnd] = useState("")
  const [eventDesc, setEventDesc] = useState("")

  useEffect(() => {

    setEvents(
      [
        {
          id: 1,
          start: "2023-05-19",
          end: "2023-05-19",
          date: "2023-05-19",
          title: "One",
          desc: "lorem Ipsum lorem ipsum dolor sit amet"
        },
        {
          id: 2,
          start: "2023-05-20",
          end: "2023-05-21",
          title: "ttoooday",
          desc: "lorem Ipsum lorem ipsum dolor sit amet"
        },
      ]
    );

  }, [])

  const handleDateClick = (arg) => { 
    console.log("dateClick", arg)

    console.log(calendarRef)
  }

  const handleEvents = (events) => {
  }

  const handleEventClick = (e) => {
    let id = e.event.id - 0

    let event = events.filter(item => {
      return item.id === id
    })[0]

    console.log(event)

    setEventTitle(event.title)
    setEventDesc(event.desc)
    setEventStart(event.start)
    setEventEnd(event.end)
  }

  const handleEventDrop = (e) => {
    console.log(e)
  }

  return (
    <>
      <div className={'adminPage'} style={{display: "flex", flexDirection: 'row'}}>
        <SideBar/>
      <div style={{}} className='calendarPage'>
        <div className='calendar-container'>
          <FullCalendar
            ref={calendarRef}
            events={events}
            eventsSet={() => handleEvents(events)}
            locale={'ru-RU'}
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            selectable={true}
            dateClick={handleDateClick}
            eventClick={handleEventClick}
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
            eventDrop={handleEventDrop}
            editable={true}
            // selectMirror={true}
            dayMaxEvents={true}
            weekends={true}
          />
        </div>

        {showEvent ? <div className="events-block">
          <div className='event-info'>
            <div className='event-header'>
              <div className='event-date'>
                {eventStart} - {eventEnd}
              </div>
              <div className='event-title'>{eventTitle}</div>
            </div>
            <div className="event-body">
              <div className="event-desc">{eventDesc}</div>
            </div>
          </div>
        </div> : ""}
      </div></div>
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
