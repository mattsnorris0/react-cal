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
    const replaced = location.replace(/\\/g, '');
    const loc = replaced.split('-');
    return `${loc[0].trim()}, ${loc[1].trim()}`;
  }
  return '';
}

export function formatCalDate(timeStamp) {
  let ISOStamp = new Date(timeStamp);
  if (timeStamp.length === 10) {
    const date = ISOStamp.toLocaleDateString('en-us', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
    return `${date}`;
  } else {
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
}
