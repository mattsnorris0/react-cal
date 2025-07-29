import './App.css';
import Calendar from './Calendar';
import { getCalendar, getEvents } from './utils/api_fetch';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState();
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  let view = 'dayGridMonth';

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  console.log(windowSize);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getCalendar();
      const calData = res.map((e) => {
        return {
          id: e.id,
          title: e.title,
          start: e.start,
          end: e.end,
          location: e.location,
          description: e.description,
        };
      });
      console.log(await getEvents());
      setData(calData);
    };
    fetchData();
  }, []);

  if (windowSize < 800) view = 'listMonth';

  return (
    <>
      <h1>Welcome to the Calendar App</h1>
      <Calendar data={data} view={view} />
    </>
  );
}

export default App;
