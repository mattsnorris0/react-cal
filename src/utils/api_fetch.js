export async function getCalendar() {
  try {
    const res = await fetch(
      'https://church-web-api--soma-church-web-app.us-central1.hosted.app/calendar',
      { method: 'GET', headers: { 'ngrok-skip-browser-warning': true } }
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.error('Error fetching data: ', e);
    return [];
  }
}

export async function getEvents() {
  try {
    const res = await fetch(
      'https://church-web-api--soma-church-web-app.us-central1.hosted.app/events'
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.error('Error fetching data: ', e);
    return [];
  }
}
