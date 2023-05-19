import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

function CalendarPage(props) {
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs} locale="ru-RU">
        <DateCalendar sx={{height: '100%', width: '100%'}}/>
      </LocalizationProvider>
    );
}

export default CalendarPage;