import React, { useEffect, useRef, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import dayjs from 'dayjs';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DateField } from '@mui/x-date-pickers/DateField';
import { TimeField } from '@mui/x-date-pickers/TimeField';
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';

import './Calendar.scss'
import { grey } from '@mui/material/colors';


const initialFormData = {
  title: '',
  description: '',
  dateTime: dayjs(''),
};


function CalendarPage(props) {

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSave = () => {
    const { title, description, dateTime } = formData;
    const eventObject = {
      title,
      description,
      dateTime: dateTime == '' ? null : dateTime.format('YYYY-MM-DD HH:mm'),
    };
    // TODO: Handle saving the eventObject or perform further processing
    console.log(eventObject);
    setFormData(initialFormData);
    handleClose();
  };
  //dialog window-----------
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setFormData({title: '',
      description: '',
      dateTime: ''});
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //------------------------
  let fc_today, fc_next, fc_prev;

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
      <div style={{}} className='calendarPage'>
        <Dialog open={open} onClose={handleClose}>
          <div style={{padding: '10px', backgroundColor: '#0D0F11', borderRadius: '2px', border: '0.5px solid rgba(134, 134, 134, 0.31)'}}>
            <DialogTitle><a style={{fontWeight: 700, fontSize: '25px'}}>Создать событие</a></DialogTitle>
            <DialogContent>
              <div style={{marginTop: '10px'}}>
                <input
                  type="text"
                  value={formData.title}
                  onChange={handleChange}
                  name="title"
                  className="dialogInput"
                  placeholder="Название события"/>
                <input
                  type="text"
                  className="dialogInput"
                  name="description"
                  placeholder="Допольнительный текст"
                  value={formData.description}
                  onChange={handleChange}/>
              </div>
              <div style={{display: 'flex'}}>
                <div style={{flex: '1'}}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar
                      // value={formData}
                      onChange={(value) =>
                        setFormData((prevFormData) => ({
                          ...prevFormData,
                          dateTime: value,
                        }))
                      }/>
                  </LocalizationProvider>
                </div>
                <div  style={{flex: '1'}}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <div style={{marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '5px'}}>
                        <a style={{fontSize: '16px', color: '#868686'}}>Дата</a>
                        <DateField
                          value={formData.dateTime}
                          onChange={(value) =>
                            setFormData((prevFormData) => ({
                              ...prevFormData,
                              dateTime: value,
                            }))
                          }/>
                      </div>
                    </LocalizationProvider>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <div style={{marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '5px'}}>
                        <a style={{fontSize: '16px', color: '#868686'}}>Время</a>
                        <TimeField
                          value={formData.dateTime}
                          onChange={(value) =>
                            setFormData((prevFormData) => ({
                              ...prevFormData,
                              dateTime: value,
                            }))
                          }/>
                      </div>
                    </LocalizationProvider>
                </div>
              </div>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Отмена</Button>
              <Button onClick={handleSave}>Сохранить</Button>
            </DialogActions>
          </div>
        </Dialog>
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
          <div>
            <Box sx={{
              display: open ? 'none': 'flex',
              position: 'fixed',
              bottom: '20px',
              right: '20px',
              zIndex: '9999',
              transform: 'translateZ(0px)',
            }}>
              <IconButton onClick={handleClickOpen} aria-label="delete" size="large">
                <AddCircleIcon fontSize="inherit" />
              </IconButton>
            </Box>
          </div>

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
