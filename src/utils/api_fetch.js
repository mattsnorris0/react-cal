export async function getCalendar() {
  try {
    const res = await fetch('https://ed43529bb771.ngrok-free.app/calendar', {
      headers: { 'ngrok-skip-browser-warning': 'true' },
    });
    const data = await res.json();
    return data;
  } catch (e) {
    console.error('Error fetching data: ', e);
    return [];
  }
}