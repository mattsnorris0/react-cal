import Container from './Container';
import FullCalendar from '@fullcalendar/react';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import dayGridPlugin from '@fullcalendar/daygrid';
// import styles from './calendar.module.css';
import Dialogue from './Dialogue';
import { useState } from 'react';

export default function Calendar() {
  const [modal, setModal] = useState(false);
  const [eventInfo, setEventInfo] = useState(null);

  return (
    <div>
      <h1>Calendar</h1>
      <Container>
        <FullCalendar
          navLinks={false}
          plugins={[dayGridPlugin, googleCalendarPlugin]}
          initialView='dayGridMonth'
          googleCalendarApiKey='AIzaSyDsgF1h1kRSObulyL43evP7E63acmqTYmw'
          events={{
            googleCalendarId:
              'phdplr7gblj6t1mv6dpakf33ihme39f5@import.calendar.google.com',
          }}
          eventDataTransform={function (eventData) {
            // Modify the event data if needed
            eventData.url = ''; // Clear the URL to prevent default navigation
            return eventData;
          }}
          eventClick={function (info) {
            setModal(true);
            setEventInfo(info); // Show an alert with the event title
            info.jsEvent.preventDefault();
            console.log(info.event); // Prevent default action
          }}
          eventColor='#9fa9a3'
          eventTextColor='#fff'
          // eventDisplay='block'
        />
        <Dialogue openModal={modal} closeModal={() => setModal(false)} info={eventInfo} />
      </Container>
    </div>
  );
}
