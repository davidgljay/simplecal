const functions = require('firebase-functions');
const calendarLink = require('calendar-link')

// // Respond to a request with a set of calendar links.
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.simplecalendar = functions.https.onRequest((request, response) => {
 response.send({
   google: calendarLink.google(request.body),
   outlook: calendarLink.outlook(request.body),
   yahoo: calendarLink.yahoo(request.body)
 });
});
