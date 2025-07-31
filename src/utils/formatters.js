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

  function getSuffix(day) {
    if (day > 3 && day < 21) return 'th'; // Handles 11th, 12th, 13th, etc.
    switch (day % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  }

  const day = ISOStamp.getDate();
  const suffix = getSuffix(day);

  if (timeStamp.length === 10) {
    const date = ISOStamp.toLocaleDateString('en-us', {
      month: 'long',
      year: 'numeric',
    });
    return `${date.split(' '[0])} ${day}${suffix}, ${date.split(' ')[1]}`;
  } else {
    const date = ISOStamp.toLocaleDateString('en-us', {
      month: 'long',
      year: 'numeric',
    });
    const time = ISOStamp.toLocaleTimeString('en-us', {
      hour: 'numeric',
      minute: 'numeric',
    });
    return `${date.split(' ')[0]} ${day}${suffix}, ${
      date.split(' ')[1]
    } at ${time}`;
  }
}
