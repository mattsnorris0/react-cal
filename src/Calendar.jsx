import Container from './Container';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import Dialogue from './Dialogue';
import { useState } from 'react';

export default function Calendar({ data, view = 'dayGridMonth' }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (info) => {
    console.log(info.event);
    info.jsEvent.preventDefault();
    setSelectedEvent(info); // Store the clicked event object
    setModalOpen(true); // Open the modal
  };

  return (
    <div>
      <Container>
        <FullCalendar
          plugins={[dayGridPlugin, listPlugin]}
          initialView={view}
          lazyFetching={true}
          height={view === 'listMonth' ? '95vh' : null}
          events={data}
          eventClick={handleEventClick}
        />
      </Container>
      {modalOpen && (
        <Dialogue info={selectedEvent} closeModal={() => setModalOpen(false)} />
      )}
    </div>
  );
}
