import Container from './Container';
import FullCalendar from '@fullcalendar/react';
// import googleCalendarPlugin from '@fullcalendar/google-calendar';
// import iCalendarPlugin from '@fullcalendar/icalendar';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import Dialogue from './Dialogue';
import { useState } from 'react';

export default function Calendar({ data, view = 'dayGridMonth' }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  // const [windowSize, setWindowSize] = useState(window.innerWidth);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWindowSize(window.innerWidth);
  //   };

  //   window.addEventListener('resize', handleResize);

  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);
  // console.log(windowSize);

  const handleEventClick = (info) => {
    console.log(info.event);
    info.jsEvent.preventDefault();
    setSelectedEvent(info); // Store the clicked event object
    setModalOpen(true); // Open the modal
  };

  // if (windowSize < 800) initialView = 'listMonth';

  return (
    <div>
      <Container>
        <FullCalendar
          plugins={[dayGridPlugin, listPlugin]}
          initialView={view}
          lazyFetching={true}
          height={view === 'listMonth' ? '95vh' : null}
          // googleCalendarApiKey='AIzaSyDsgF1h1kRSObulyL43evP7E63acmqTYmw'
          // events={{
          //   googleCalendarId:
          //     'phdplr7gblj6t1mv6dpakf33ihme39f5@import.calendar.google.com',
          // }}
          // events={{
          //   // url: 'https://20e38ac357ff.ngrok-free.app/calendar',
          //   url: 'https://6883909421fa24876a9e870e.mockapi.io/api/v1/calendarevents',
          //   // headers: { 'ngrok-skip-browser-warning': 'true' },
          //   method: 'GET',
          //   format: 'json',
          // }}
          // events={async function (fetchInfo, successCallback, failureCallback) {
          //   // const res = await fetch(
          //   //   'https://6883909421fa24876a9e870e.mockapi.io/api/v1/calendarevents'
          //   // );
          //   const res = await fetch(
          //     'https://20e38ac357ff.ngrok-free.app/calendar',
          //     {
          //       headers: { 'ngrok-skip-browser-warning': 'true' },
          //     }
          //   );
          //   const data = await res.json();
          //   successCallback(data);
          //   failureCallback(data.error);
          // }}
          events={data}
          // events={[
          //   {
          //     id: 'ET-25404924-192103920@resources.planningcenteronline.com',
          //     title: 'Soma at the Water Park',
          //     start: '2025-07-13T17:00:00',
          //     end: '2025-07-13T19:00:00',
          //     description: '\\n',
          //     location:
          //       'Fayette Aquatic Center - 23rd St NE\\, Fayette\\, AL 35555\\, USA',
          //   },
          //   {
          //     id: 'ET-25406324-192103920@resources.planningcenteronline.com',
          //     title: 'New Event',
          //     start: '2025-07-20',
          //     end: '2025-07-20',
          //     extendedProps: {
          //       description: '\\n',
          //       location: null,
          //     },
          //   },
          // ]}
          // eventDataTransform={function (eventData) {
          //   eventData.url = ''; // Clear the URL to prevent default navigation
          //   return eventData;
          // }}
          eventClick={handleEventClick}
        />
        {/* <button
          onClick={() => {
          }}
          className='bg-dark text-white p-3 rounded-lg cursor-pointer'
        >
          Open Modal
        </button> */}
      </Container>
      {modalOpen && (
        <Dialogue info={selectedEvent} closeModal={() => setModalOpen(false)} />
      )}
    </div>
  );
}
