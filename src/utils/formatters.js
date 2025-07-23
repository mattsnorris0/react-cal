export function formatDate(timeStamp) {
  let ISOStamp = new Date(timeStamp);
  const date = ISOStamp.toLocaleDateString('en-us', {
    month: 'numeric',
    day: 'numeric',
  });
  return date;
}

export function formatLocation(location) {
  if (location) {
    const loc = location.split('-');
    return `${loc[0]}, ${loc[1]}`;
  }
  return '';
}

export function formatCalDate(timeStamp) {
  let ISOStamp = new Date(timeStamp);
  const date = ISOStamp.toLocaleDateString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
  const time = ISOStamp.toLocaleTimeString('en-us', {
    hour: 'numeric',
    minute: 'numeric',
  });
  return `${date} at ${time}`;
}
