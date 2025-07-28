import './App.css';
import Calendar from './Calendar';
import { getCalendar } from './utils/api_fetch';
import { useState, useEffect } from 'react';
// import Ref from './Ref';

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
      // console.log(calData);
      setData(calData);
    };
    fetchData();
  }, []);

  if (windowSize < 800) view = 'listMonth';

  return (
    <>
      <h1>Welcome to the Calendar App</h1>
      <Calendar data={data} view={view} />
      {/* <Ref /> */}
    </>
  );
}

export default App;
