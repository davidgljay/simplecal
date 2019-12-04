const functions = require('firebase-functions');
const calendarLink = require('calendar-link')

// // Respond to a request with a set of calendar links.
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.simplecalendar = functions.https.onRequest((request, response) => {
 const {time, date, start} = request.body
 const event = Object.assign({}, request.body, {
   duration: JSON.parse(request.body.duration)
 })
 const encodedParams = Object.keys(event).map(key => key + '=' + encodeURIComponent(event[key])).join('&')
 response.send({
   google: calendarLink.google(event),
   outlook: calendarLink.outlook(event),
   yahoo: calendarLink.yahoo(event),
   ics: `https://simplecal-cht.firebaseapp.com/?${encodedParams}`
 });
});
