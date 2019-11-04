# SimpleCal

A simple firebase script for generating calendar links for google calendar, outlook, and ical.

##Requires a JSON post request with:
title |	Event title |	String
start | 	Start time |	JS Date / ISO 8601 string / Unix Timestamp
end | 	End time |	JS Date / ISO 8601 string / Unix Timestamp
duration | 	Event duration |	Array with value (Number) and unit (String)
allDay | 	All day event |	Boolean
description | 	Information about the event |	String
location | 	Event location in words |	String
busy | 	Mark on calendar as busy? |	Boolean
guests | 	Emails of other guests |	Array of emails (String)
ical | Indicates whether to return a .ical file | Boolean

## Returns

* An .ical file if ical = true
* Otherwise a json array of the form:
```
{
  google: [google cal url],
  outlook: [outlook cal url]
  yahoo: [yahoo cal url]
}
```
