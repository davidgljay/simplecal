const functions = require('firebase-functions');
const calendarLink = require('calendar-link')

// // Respond to a request with a set of calendar links.
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.simplecalendar = functions.https.onRequest((request, response) => {
 const {time, date} = request.body
 const event = Object.assign({}, {
   start: new Date(`${time} ${date} PST`).toISOString,
 }, request.body)
 response.send({
   google: calendarLink.google(event),
   outlook: calendarLink.outlook(event),
   yahoo: calendarLink.yahoo(event)
 });
});
