import {ics} from 'calendar-link';

const urlParams = new URLSearchParams(window.location.search);
const params = {
  start: new Date(`${urlParams.get('time')} PST ${urlParams.get('date')}`).toISOString(),
  title: urlParams.get('title'),
  location: urlParams.get('location'),
  description: urlParams.get('description'),
  duration: urlParams.get('duration')
}
window.location=ics(params);
